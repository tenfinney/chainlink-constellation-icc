// SPDX-License-Identifier: AGPL-3.0-or-later and Custom-Commercial-License
pragma solidity ^0.8.20;
pragma experimental ABIEncoderV2;

// Copyright (c) 2023 Scott Stevenson, J.D. and Web3 Legal Engineering
/* Dual-licensed under the GNU Affero General Public License AGPL-3.0-or-later
 * (https://spdx.org/licenses/AGPL-3.0-or-later.html)and a Commercial License.
 *  Contact Scott Stevenson at scott@onelaw.us or @tenfinney for commercial licensing inquiries.
 */

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract SecureCrossChainTransferAndLexOracle is
    ChainlinkClient,
    ReentrancyGuard
{
    using Chainlink for Chainlink.Request;
    using SafeMath for uint256;

    // s ----------------------------- STATE VARIABLES -----------------------------------------------

    Chain public nativeChain;
    IERC20 public token;
    string public apiKey;
    string public endpoint;
    string public caseData;
    string public caseName;
    string public caselawApiEndpoint;
    string public test_parameter_1;
    string public test_parameter_2;
    address public oracle;
    address public owner;
    address public oracleNode;
    address public nativeTokenAddress;
    address public immutable ethereumNativeToken =
        0x0000000000000000000000000000000000000000;
    address public immutable polygonNativeToken =
        0x0000000000000000000000000000000000001010;
    address public immutable avalancheNativeToken =
        0x93567d6B6553bDe2b652FB7F197a229b93813D3f;
    address public immutable ethereumOracle =
        0xDC530D9457755926550b59e8ECcdaE7624181557;
    address public immutable polygonOracle =
        0xd9FFdb71EbE7496cC440152d43986Aae0AB76665;
    address public immutable avalancheOracle =
        0x49ccd9ca821EfEab2b98c60dC60F518E765EDe9a;
    bytes32 public jobId;
    bytes32 public requestId;
    bytes32 private encryptedData;
    uint256 public fee;
    uint256 public transactionCounter;

    enum Chain {
        Ethereum,
        Polygon,
        Avalanche,
        Sepolia,
        Mumbai,
        Fuji
    }
    mapping(Chain => address) public nativeTokenAddresses;
    mapping(Chain => address) public oracleAddresses;
    mapping(Chain => bytes32) public jobIds;
    mapping(address => Chain) public reverseNativeTokenMapping;
    mapping(address => address) public nextChain;
    mapping(address => string) public messages;
    mapping(address => uint256) public balances;
    mapping(address => bool) public isTokenAdded;
    mapping(bytes32 => address) public requestIdToRequester;
    mapping(uint256 => uint256) private transactionTokenAmounts;

    // c ----------------------------- CONSTRUCTOR ---------------------------------------------------
    constructor() {
        if (block.chainid == 1) {
            nativeChain = Chain.Ethereum;
        } else if (block.chainid == 137) {
            nativeChain = Chain.Polygon;
        } else if (block.chainid == 43114) {
            nativeChain = Chain.Avalanche;
        }

        owner = msg.sender;
        jobId = "7223acbd01654282865b678924126013"; // set an arbitrary jobId
        apiKey = "encrypted_apiKey_8675309";
        endpoint = "https://api.case.law/v1/cases/?page_size=10&ordering=relevance";
        fee = 10000000000000000; // Actual fee 10000000000000000 0.01 LINK)
        nativeTokenAddresses[
            Chain.Ethereum
        ] = 0x0000000000000000000000000000000000000000;
        nativeTokenAddresses[
            Chain.Polygon
        ] = 0x0000000000000000000000000000000000001010;
        nativeTokenAddresses[
            Chain.Avalanche
        ] = 0x93567d6B6553bDe2b652FB7F197a229b93813D3f;
        caselawApiEndpoint = "https://api.case.law/v1/cases/?page_size=10&ordering=relevance";
        test_parameter_1 = "Instructions for an off-chain API call for test_parameter_1.";
        test_parameter_2 = "Instructions for an off-chain API call for test_parameter_2.";
    }

    // m ----------------------------- PERMISSIONS ---------------------------------------------------
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    // f ----------------------------- FUNCTION ------------------------------------------------------
    // Function to transfer ownership of the contract
    function transferOwnership(address newOwner) external onlyOwner {
        require(newOwner != address(0), "Invalid new owner");
        emit OwnershipTransferred(owner, newOwner);
        owner = newOwner;
    }

    // Event emitted when the contract ownership is transferred
    event OwnershipTransferred(
        address indexed previousOwner,
        address indexed newOwner
    );

    // f ----------------------------- FUNCTION ------------------------------------------------------
    function getNativeChain() internal view returns (Chain) {
        if (block.chainid == 1) {
            return Chain.Ethereum;
        } else if (block.chainid == 137) {
            return Chain.Polygon;
        } else if (block.chainid == 43114) {
            return Chain.Avalanche;
        }
        // If none of the above conditions are met, return a default value
        return Chain.Ethereum; // You can replace Chain.Ethereum with an appropriate default value
    }

    // f ----------------------------- FUNCTION ------------------------------------------------------
    function getNativeTokenAddress() public view returns (address) {
        return nativeTokenAddress;
    }

    // f ----------------------------- FUNCTION ------------------------------------------------------
    function getNativeTokenForChain(
        Chain chain
    ) internal view returns (address) {
        if (chain == Chain.Ethereum) {
            return ethereumNativeToken;
        }
        if (chain == Chain.Polygon) {
            return polygonNativeToken;
        }
        if (chain == Chain.Avalanche) {
            return avalancheNativeToken;
        }
        revert("Unsupported chain");
    }

    // f ----------------------------- FUNCTION ------------------------------------------------------
    function getNativeTokenAddress(
        Chain chain
    ) internal view returns (address) {
        if (chain == Chain.Polygon) {
            return polygonNativeToken;
        } else if (chain == Chain.Avalanche) {
            return avalancheNativeToken;
        }
        // Default to Ethereum
        return ethereumNativeToken;
    }

    // f ----------------------------- FUNCTION ------------------------------------------------------
    function getNativeTokenDetails(
        Chain chain
    ) external view returns (address, uint256) {
        // Returns details of a native token on a specific chain
        address chainNativeToken = getNativeTokenAddress(chain);
        // Replace this with specific token details retrieval logic
        uint256 balance = IERC20(chainNativeToken).balanceOf(address(this));

        return (chainNativeToken, balance);
    }

    // f ----------------------------- FUNCTION ------------------------------------------------------
    function logCurrentNativeToken() external view returns (address) {
        address current = nativeTokenAddresses[Chain.Ethereum];
        return current;
    }

    // f ----------------------------- FUNCTION ------------------------------------------------------
    // Get next transaction ID
    function getNextTransactionCounter() internal returns (uint256) {
        transactionCounter++;
        return transactionCounter;
    }

    // f ----------------------------- FUNCTION ------------------------------------------------------
    // Utility function to withdraw Link
    function withdrawLink() public onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
        require(
            link.transfer(owner, link.balanceOf(address(this))),
            "Unable to transfer LINK to owner"
        );
    }

    // f ----------------------------- FUNCTION ------------------------------------------------------
    // Function to set encrypted data
    function setEncryptedData(bytes32 _data) public onlyOwner {
        encryptedData = _data;
    }

    // f ----------------------------- FUNCTION ------------------------------------------------------
    // Return encrypted data
    function getEncryptedData() public view onlyOwner returns (bytes32) {
        return encryptedData;
    }

    // f ----------------------------- FUNCTION ------------------------------------------------------
    // Decode encrypted data
    function decryptData(
        bytes32 decryptionKey
    ) public view onlyOwner returns (bytes32) {
        // Decrypt the data using the provided decryption key
        require(decryptionKey != bytes32(0), "Invalid decryption key");
        return xor(encryptedData, decryptionKey); // For demonstration purposes, use XOR as a simple decryption method
    }

    // f ----------------------------- FUNCTION ------------------------------------------------------
    // Returns a bytes32
    function xor(bytes32 a, bytes32 b) private pure returns (bytes32) {
        return a ^ b;
    }

    // f ----------------------------- FUNCTION ------------------------------------------------------
    function getNextChain(address userAddress) external view returns (Chain) {
        address userNextChain = nextChain[userAddress];
        return reverseNativeTokenMapping[userNextChain];
    }

    // f ----------------------------- FUNCTION ------------------------------------------------------
    function updateOracleNode(address newOracleNode) public onlyOwner {
        oracleNode = newOracleNode;
    }

    // f ----------------------------- FUNCTION ------------------------------------------------------
    function updateApiKey(string memory newApiKey) public onlyOwner {
        apiKey = newApiKey;
    }

    // f ----------------------------- FUNCTION ------------------------------------------------------
    function updateEndpoint(string memory newEndpoint) public onlyOwner {
        endpoint = newEndpoint;
    }

    // f ----------------------------- FUNCTION AND EVENTS -------------------------------------------
    function getCurrentNativeToken() external view returns (address) {
        return nativeTokenAddresses[Chain.Ethereum];
    }

    event LoggedCurrentNativeToken(address currentNativeToken);

    // f ----------------------------- FUNCTION ------------------------------------------------------
    function getContractBalance() external view returns (uint256) {
        return token.balanceOf(address(this));
    }

    // f ----------------------------- FUNCTION ------------------------------------------------------
    function stringToBytes32(
        string memory source
    ) internal pure returns (bytes32 result) {
        bytes memory tempEmptyStringTest = bytes(source);
        if (tempEmptyStringTest.length == 0) {
            return 0x0;
        }
        assembly {
            result := mload(add(source, 32))
        }
    }

    // f ----------------------------- FUNCTION ------------------------------------------------------
    function bytes32ToString(
        bytes32 _bytes32
    ) internal pure returns (string memory) {
        uint8 i = 0;
        while (i < 32 && _bytes32[i] != 0) {
            i++;
        }
        bytes memory bytesArray = new bytes(i);
        for (i = 0; i < 32 && _bytes32[i] != 0; i++) {
            bytesArray[i] = _bytes32[i];
        }

        return string(bytesArray);
    }

    // x ---------------------------------------------------------------------------------------------
    // x ---------------------------- CROSS CHAIN MESSAGING ------------------------------------------
    // x ---------------------------------------------------------------------------------------------

    // f ----------------------------- FUNCTION AND EVENT --------------------------------------------
    function setNextChain(
        address tokenAddress,
        Chain nextChainEnum
    ) external onlyOwner {
        // Validate token address
        require(tokenAddress != address(0), "Invalid token address");
        // Get native token for the chain
        address nextNativeToken = getNativeTokenForChain(nextChainEnum);
        // Set next chain mapping
        nextChain[tokenAddress] = nextNativeToken;
        // Set reverse mapping
        reverseNativeTokenMapping[nextNativeToken] = nextChainEnum;
        // Emit event
        emit NextChainSet(tokenAddress, nextNativeToken);
    }

    event NextChainSet(
        address indexed tokenAddress,
        address indexed nativeToken
    );

    // f ----------------------------- FUNCTION AND EVENTS -------------------------------------------
    function depositTokens(uint256 amount) external onlyOwner nonReentrant {
        // Get native token address
        address currentNativeToken = nativeTokenAddresses[Chain.Ethereum];
        // Validate token
        require(isTokenAdded[currentNativeToken], "Invalid native token");
        // Deposit tokens
        IERC20(currentNativeToken).transferFrom(
            msg.sender,
            address(this),
            amount
        );
        // Emit events
        uint256 transactionId = getNextTransactionCounter();
        emit TokenDepositInitiated(
            msg.sender,
            currentNativeToken,
            amount,
            transactionId
        );
        emit TransactionQueued(msg.sender, transactionId);
        emit TokenDeposited(
            msg.sender,
            currentNativeToken,
            amount,
            transactionId
        );
    }

    // Event emitted when a token deposit is initiated
    event TokenDepositInitiated(
        address indexed user,
        address indexed nativeToken,
        uint256 amount,
        uint256 transactionId
    );
    // Event emitted when a token is deposited into the contract
    event TokenDeposited(
        address indexed user,
        address indexed nativeToken,
        uint256 amount,
        uint256 transactionId
    );

    // f ----------------------------- FUNCTION AND EVENTS -----------------------------------------
    function withdrawTokens(
        address userAddress,
        uint256 amount
    ) external onlyOwner nonReentrant {
        // Additional security: Ensure the user address is valid
        require(userAddress != address(0), "Invalid user address");
        // Additional security: Ensure the native token is valid
        require(
            isTokenAdded[nativeTokenAddresses[Chain.Ethereum]],
            "Invalid native token"
        );
        // Withdraw tokens to the owner (Fictional Data, replace with actual logic)
        IERC20(nativeTokenAddresses[Chain.Ethereum]).transfer(owner, amount);
        // Increment and store the transactionId
        uint256 transactionId = getNextTransactionCounter();
        // Emit TokenWithdrawalInitiated event
        emit TokenWithdrawalInitiated(
            owner,
            nativeTokenAddresses[Chain.Ethereum],
            amount,
            transactionId
        );
        // Emit TransactionQueued event
        emit TransactionQueued(owner, transactionId);
    }

    // Event emitted when a token withdrawal is initiated
    event TokenWithdrawalInitiated(
        address indexed user,
        address indexed nativeToken,
        uint256 amount,
        uint256 transactionId
    );
    // Event emitted when there is a queued transaction
    event TransactionQueued(
        address indexed user,
        uint256 indexed transactionId
    );

    // f ----------------------------- FUNCTION AND EVENT --------------------------------------------
    // Transfer tokens to another chain (Chain B)
    function transferTokensToOtherChain(
        address destinationChainContract,
        address tokenAddress,
        uint256 amount
    ) public onlyOwner {
        // Add security checks if needed
        // Implement token transfer logic specific to CCIP network
        // Example: Transfer tokens to the destination chain's contract
        IERC20(tokenAddress).transfer(destinationChainContract, amount);
        // Emit an event for transparency
        emit TokensTransferredToOtherChain(
            owner,
            destinationChainContract,
            tokenAddress,
            amount
        );
    }

    // Event emitted when tokens are transferred to another chain
    event TokensTransferredToOtherChain(
        address indexed sender,
        address indexed destinationChainContract,
        address indexed tokenAddress,
        uint256 amount
    );

    // f ----------------------------- FUNCTION AND EVENT --------------------------------------------
    function sendMessage(
        Chain destinationChain,
        string calldata message,
        uint256 tokenAmount
    ) internal {
        // Sending messages logic for the specified destinationChain
        // Use Chainlink or other suitable use case method
        // For demonstration purposes simple logging used.
        emit MessageSent(destinationChain, message, tokenAmount);
    }

    // Event emitted when a message is sent to another chain
    event MessageSent(
        Chain indexed destinationChain,
        string message,
        uint256 tokenAmount
    );

    // f ----------------------------- FUNCTION ------------------------------------------------------
    // Send a cross-chain message to another chain
    function sendMessageToOtherChain(
        address destinationChainContract,
        string memory message
    ) public onlyOwner {
        // Add security checks if needed
        require(
            destinationChainContract != address(0),
            "Invalid destination chain contract address"
        );
        require(bytes(message).length > 0, "Empty message");
        // Implement message passing logic specific to CCIP network
        // Use Chainlink oracles to transmit the message
        Chainlink.Request memory req = buildChainlinkRequest(
            jobIds[Chain.Polygon],
            address(this),
            this.fulfill.selector
        );
        req.add("message", message);
        req.addUint("chainId", uint256(Chain.Polygon)); // Include the destination chain ID
        sendChainlinkRequestTo(oracleAddresses[Chain.Polygon], req, fee);
        // Emit an event for transparency
        emit MessageSentToOtherChain(owner, destinationChainContract, message);
    }

    // Event emitted when a message is sent to another chain
    event MessageSentToOtherChain(
        address indexed sender,
        address indexed destinationChainContract,
        string message
    );

    // f ----------------------------- FUNCTION AND EVENT --------------------------------------------
    // Placeholder function for processing CCIP messages - replace with actual logic
    function processCCIPMessage(string memory message) internal {
        // Replace this with the actual logic for processing the CCIP messages
        // Store the message or trigger some other action.
        // Emit an event to indicate that a CCIP message has been processed
        emit CCIPMessageProcessed(msg.sender, message);
    }

    // Event emitted when a CCIP message is processed locally
    event CCIPMessageProcessed(address indexed sender, string message);

    // f ----------------------------- FUNCTION AND EVENT --------------------------------------------
    function receiveMessageFromOtherChain(string memory message) public {
        // Implement logic to handle incoming messages from other chains
        require(bytes(message).length > 0, "Empty message");
        // Add specific logic here based on the incoming message
        // Store the message or trigger some other action.
        // Emit an event to indicate that a message has been received
        emit MessageReceivedFromOtherChain(msg.sender, message);
    }

    // Event emitted when a message is received from another chain
    event MessageReceivedFromOtherChain(address indexed sender, string message);

    // f ----------------------------- FUNCTION ------------------------------------------------------
    function getMessage(
        address contractAddress
    ) public view returns (string memory) {
        return messages[contractAddress];
    }

    // f ----------------------------- FUNCTION ------------------------------------------------------
    // Function to extract token amount from the message
    function getTokenAmountFromMessage(
        string memory /*_message*/
    ) internal pure returns (uint256) {
        // Add token amount extraction logic from the message
        return 0;
    }

    // f ----------------------------- FUNCTION ------------------------------------------------------
    function getTransactionStatus(
        uint256 transactionId
    ) external view returns (string memory) {
        // Returns the status of a transaction (Queued, Processed, Failed, or Invalid)
        if (transactionId < transactionCounter) {
            // Success criteria - replace with actual logic
            bool isTransactionSuccessful = checkSuccessCriteria(transactionId);
            return isTransactionSuccessful ? "Processed" : "Failed";
        } else if (transactionId == transactionCounter) {
            return "Queued";
        } else {
            return "Invalid";
        }
    }

    // f ----------------------------- FUNCTION ------------------------------------------------------
    function getTransactionDetails(
        uint256 transactionId
    ) external view returns (address, string memory, uint256) {
        // Returns details of a transaction
        require(transactionId < transactionCounter, "Invalid transaction ID");

        // Replace this with your specific transaction details retrieval logic
        address user = owner;
        string memory message = messages[nextChain[address(this)]];

        // Replace the next line with the actual token amount retrieval logic
        uint256 tokenAmount = transactionTokenAmounts[transactionId];

        return (user, message, tokenAmount);
    }

    // f ----------------------------- FUNCTION ------------------------------------------------------
    function checkSuccessCriteria(
        uint256 transactionId
    ) internal pure returns (bool) {
        return transactionId % 2 == 0;
    }

    // f ----------------------------- FUNCTION AND EVENT --------------------------------------------
    function addToken(address tokenAddress) external onlyOwner {
        // Additional security: Ensure the token has not been added before
        require(!isTokenAdded[tokenAddress], "Token already added");
        // Additional security: Ensure the token is a valid ERC20 token
        uint256 tokenBalance;
        try IERC20(tokenAddress).balanceOf(address(this)) returns (
            uint256 balance
        ) {
            tokenBalance = balance;
        } catch {
            revert("Invalid ERC20 token");
        }
        require(tokenBalance >= 0, "Invalid ERC20 token");
        // Mark the token as added
        isTokenAdded[tokenAddress] = true;
        // Emit TokenAdded event
        emit TokenAdded(tokenAddress);
    }

    // Event emitted when a token is added to the contract
    event TokenAdded(address indexed nativeToken);

    // x ---------------------------------------------------------------------------------------------
    // x ------------------------------- REQUESTING DATA ---------------------------------------------
    // x ---------------------------------------------------------------------------------------------

    // f ----------------------------- FUNCTION AND EVENTS -------------------------------------------
    // Sending a single message
    function sendSingleMessage(string memory _message) public onlyOwner {
        // Build Chainlink request
        Chainlink.Request memory req = buildChainlinkRequest(
            jobId,
            address(this),
            this.fulfill.selector
        );
        req.add("message", _message);

        // Send Chainlink request to the oracle
        sendChainlinkRequestTo(oracle, req, fee);

        // Emit OracleRequestSent event
        uint256 transactionId = getNextTransactionCounter();
        emit OracleRequestSent(owner, transactionId);
        emit TransactionQueued(owner, transactionId);
    }

    // f ----------------------------- FUNCTION AND EVENT --------------------------------------------
    // Send a message to another chain using Chainlink
    function sendMessage(
        Chain destinationChain,
        string calldata message
    ) external onlyOwner {
        // Additional security: Ensure the destination chain is valid
        require(
            destinationChain != Chain.Ethereum &&
                destinationChain != Chain.Polygon &&
                destinationChain != Chain.Avalanche,
            "Unsupported chain"
        );
        require(
            destinationChain != Chain.Polygon,
            "Cannot send a message to Polygon"
        );
        require(
            destinationChain != Chain.Avalanche,
            "Cannot send a message to Avalanche"
        );

        // Send the message using Chainlink
        Chainlink.Request memory req = buildChainlinkRequest(
            jobIds[destinationChain],
            address(this),
            this.fulfill.selector
        );
        req.add("message", message);
        sendChainlinkRequestTo(oracleAddresses[destinationChain], req, fee);

        // Emit OracleRequestSent event
        uint256 transactionId = getNextTransactionCounter();
        emit OracleRequestSent(owner, transactionId);
        emit TransactionQueued(owner, transactionId);
    }

    // Event emitted when an Oracle request is sent
    event OracleRequestSent(
        address indexed sender,
        uint256 indexed transactionId
    );

    // f ----------------------------- FUNCTION AND EVENT --------------------------------------------
    // Send a message to another chain using Chainlink with token deposit
    function sendMessageComplex(
        Chain destinationChain,
        string calldata message,
        uint256 tokenAmount
    ) external onlyOwner {
        // Additional security: Ensure the destination chain is valid
        require(
            destinationChain != Chain.Ethereum,
            "Cannot send a message to Ethereum"
        );
        require(
            destinationChain != Chain.Polygon,
            "Cannot send a message to Polygon"
        );
        require(
            destinationChain != Chain.Avalanche,
            "Cannot send a message to Avalanche"
        );
        // Get native token directly without redeclaration
        address nativeToken = nativeTokenAddresses[destinationChain];
        // Validate token
        require(isTokenAdded[nativeToken], "Invalid native token");
        // Deposit tokens
        IERC20(nativeToken).transferFrom(
            msg.sender,
            address(this),
            tokenAmount
        );
        // Send the message using Chainlink
        Chainlink.Request memory req = buildChainlinkRequest(
            jobIds[destinationChain],
            address(this),
            this.fulfillWithTokens.selector
        );
        req.add("message", message);
        req.addUint("tokenAmount", tokenAmount);
        sendChainlinkRequestTo(oracleAddresses[destinationChain], req, fee);
        // Emit OracleRequestSent event
        uint256 transactionId = getNextTransactionCounter();
        emit OracleRequestSent(owner, transactionId);
        emit TransactionQueued(owner, transactionId);
    }

    // f ----------------------------- FUNCTION ------------------------------------------------------
    // Set Chainlink job ID and oracle address for a specific chain
    function setChainlinkJobAndOracle(
        Chain chain,
        bytes32 _jobId,
        address oracleAddress
    ) external onlyOwner {
        require(_jobId != bytes32(0), "Invalid job ID");
        require(oracleAddress != address(0), "Invalid oracle address");
        setOracle(chain, oracleAddress, bytes32ToString(_jobId));
    }

    // f ----------------------------- FUNCTION ------------------------------------------------------
    // Callback function to handle the response from the Chainlink node
    function fulfill(
        bytes32 _requestId,
        string memory _message,
        uint256 version
    ) public recordChainlinkFulfillment(_requestId) {
        // Declare the variable message here
        string memory message;
        if (version == 1) {
            // Variation 1 logic
            messages[nextChain[msg.sender]] = _message;
        } else if (version == 2) {
            // Variation 2 logic
            // Additional security: Ensure the request is valid
            require(
                msg.sender == oracleAddresses[Chain.Polygon],
                "Invalid requestor"
            );
            // Additional logic for Variation 2
            // Replace the following line with the actual Variation 2 logic
            messages[nextChain[msg.sender]] = _message;
        } else if (version == 3) {
            // Variation 3 logic
            // Process and store the data as needed within the smart-contract
            caseData = processData(_message);
        } else if (version == 4 || version == 5) {
            // Variation 4 or 5 logic
            // Process and store the data as needed within the smart-contract
            // Variation 4 or 5 logic vvvv
            message = _message;
            // Emit an event with the result
            emit RequestFulfilled(_requestId, message);
            // Notify the requester (off-chain) that the data is ready
            address requester = requestIdToRequester[_requestId];
            // Implement notification logic if needed
            // Additional logic for token transfer
            uint256 tokenAmount = getTokenAmountFromMessage(_message); // actual logic vvvv
            if (tokenAmount > 0) {
                // Transfer tokens to the requester
                token.transfer(requester, tokenAmount);
                emit TokensTransferred(requester, tokenAmount);
            }
        } else {
            // Handle unsupported version or throw an error
            revert("Unsupported version");
        }
    }

    // f ----------------------------- FUNCTION AND EVENT --------------------------------------------
    // Placeholder function for processing data in Variation 3
    function processData(
        string memory _data
    ) internal pure returns (string memory) {
        // Use data processing logic for Variation 3
        return _data;
    }

    event RequestFulfilled(bytes32 indexed requestId, string result);

    // f ----------------------------- FUNCTION AND EVENTS -------------------------------------------
    function processCCIPMessageAndTransfer(
        Chain destinationChain,
        string calldata message,
        uint256 tokenAmount
    ) external {
        // Validate token transfer
        require(tokenAmount > 0, "Token amount must be greater than zero");
        // Check if destinationChain is a valid enum value
        if (uint256(destinationChain) < uint256(Chain.Fuji)) {
            // Perform CCIP message transfer to the specified destination chain
            sendMessage(destinationChain, message, tokenAmount);
        } else {
            // Process CCIP message locally
            processCCIPMessage(message);
            // Transfer tokens to the contract
            token.transferFrom(msg.sender, address(this), tokenAmount);
            // Emit events for local CCIP message and token transfer
            emit CCIPMessageQueued(msg.sender, message);
            emit TokensTransferred(msg.sender, tokenAmount);
            emit MessageSent(destinationChain, message, tokenAmount);
            // Emit combined event
            emit CCIPMessageAndTransferQueued(
                msg.sender,
                destinationChain,
                message,
                tokenAmount
            );
        }
    }

    // Event emitted when message is queued
    event CCIPMessageQueued(address indexed sender, string ccipMessage);

    // Event emitted when tokens are transferred
    event TokensTransferred(address indexed sender, uint256 tokenAmount);

    // Event emitted when a CCIP message and token transfer are queued
    event CCIPMessageAndTransferQueued(
        address indexed sender,
        Chain indexed destinationChain,
        string ccipMessage,
        uint256 tokenAmount
    );

    // f ----------------------------- FUNCTION AND EVENT --------------------------------------------
    // Function to Set Oracle
    function setOracle(
        Chain _chain,
        address _oracle,
        string memory _jobId
    ) internal {
        // Additional security: Ensure the oracle address is valid
        require(_oracle != address(0), "Invalid oracle address");
        // Initialize the oracle and job ID for each chain
        oracleAddresses[_chain] = _oracle;
        jobIds[_chain] = stringToBytes32(_jobId);
        // Emit OracleSet event
        emit OracleSet(_chain, _oracle, _jobId);
    }

    // Event emitted when an oracle is set for a chain
    event OracleSet(Chain indexed chain, address indexed oracle, string jobId);

    // f ----------------------------- FUNCTION AND EVENT --------------------------------------------
    function fulfillWithTokens(
        bytes32 _requestId,
        string memory _message,
        uint256 _tokenAmount
    ) public {
        // Ensure that the request ID is valid
        require(_requestId != bytes32(0), "Invalid request ID");
        // Validate the origin of the request (optional security check)
        // require(msg.sender == oracleAddresses[destinationChain], "Invalid request sender");
        // Process the received message data
        string memory processedData = processData(_message);
        // Placeholder logic: Process the received message and token amount
        // Use actual logic for handling the data
        processReceivedData(processedData, _tokenAmount);
        // Emit an event or perform other actions as needed
        emit FulfillmentWithTokens(_requestId, processedData, _tokenAmount);
    }

    // Event emitted when fulfilled With Tokens
    event FulfillmentWithTokens(
        bytes32 indexed requestId,
        string message,
        uint256 tokenAmount
    );

    // f ----------------------------- FUNCTION AND EVENT --------------------------------------------
    // Placeholder function for processing received data
    function processReceivedData(
        string memory _processedData,
        uint256 _tokenAmount
    ) internal {
        // Logic for handling the processed data
        // For updating state variables and/or interacting with other contracts
        // Simple processed data log example
        emit DataProcessed(_processedData, _tokenAmount);
    }

    // Event emitted when data is processed in fulfillWithTokens
    event DataProcessed(string processedData, uint256 tokenAmount);

    // f ----------------------------- FUNCTION ------------------------------------------------------
    // Function to request data from the Caselaw API using Chainlink
    function requestCaseLawData(
        string memory caselawIdentifier,
        string memory customParameter1,
        string memory customParameter2
    ) public payable {
        // Input Validation
        require(bytes(caselawIdentifier).length > 0, "Empty caselawIdentifier");
        require(bytes(customParameter1).length > 0, "Empty customParameter1");
        require(bytes(customParameter2).length > 0, "Empty customParameter2");
        // Access Control
        require(msg.sender == owner, "Only the owner can make requests");
        // Fee Validation
        require(msg.value >= fee, "Insufficient funds for the request fee");
        // Oracle Address Validation
        require(
            oracleAddresses[Chain.Ethereum] != address(0),
            "Invalid oracle address"
        );
        // Build the Chainlink request
        Chainlink.Request memory req = buildChainlinkRequest(
            jobIds[Chain.Ethereum],
            address(this),
            this.fulfill.selector
        );
        // Add parameters to the request
        req.add("caselawIdentifier", caselawIdentifier);
        req.add("apiKey", apiKey);
        req.add("caselawApiEndpoint", caselawApiEndpoint);
        req.add("customParameter1", customParameter1);
        req.add("customParameter2", customParameter2);
        // Send the Chainlink request to the oracle
        sendChainlinkRequestTo(oracleAddresses[Chain.Ethereum], req, fee);
    }

    // f ----------------------------- FUNCTION AND EVENT --------------------------------------------
    // Function to request data using Chainlink
    function requestData(
        string memory identifier,
        address _oracle
    ) external payable {
        // Input Validation
        require(bytes(identifier).length > 0, "Empty identifier");
        require(_oracle != address(0), "Invalid oracle address");
        // Access Control
        require(msg.sender == owner, "Only the owner can make requests");
        // Fee Validation
        require(msg.value >= fee, "Insufficient funds for the request fee");
        // Oracle Address Validation
        require(
            oracleAddresses[Chain.Polygon] != address(0),
            "Invalid oracle address"
        );
        // Build the Chainlink request
        Chainlink.Request memory req = buildChainlinkRequest(
            jobId,
            address(this),
            this.fulfill.selector
        );
        // Add common parameters to the request
        req.add("identifier", identifier);
        req.add("apiKey", apiKey);
        req.add("caselawApiEndpoint", caselawApiEndpoint);
        // Send the Chainlink request to the oracle
        sendChainlinkRequestTo(_oracle, req, fee);
        // Emit an event for transparency
        emit DataRequested(owner, identifier, _oracle);
    }

    // Event emitted when case data is requested
    event DataRequested(
        address indexed requester,
        string identifier,
        address indexed oracle
    );

    // f ----------------------------- FUNCTION AND EVENT --------------------------------------------
    // Function to request property data from the using Chainlink
    function requestPropertyData(
        string memory parcelNumber,
        address _oracle,
        uint256 timeout,
        string memory callbackFunction,
        uint256 gasLimit,
        string memory dataFormat,
        string memory encryptionKey,
        string memory callbackUrl,
        string memory customHeader,
        string memory dataFilter
    ) external payable {
        // Input Validation
        require(bytes(parcelNumber).length > 0, "Empty parcelNumber");
        require(_oracle != address(0), "Invalid oracle address");
        // Access Control
        require(msg.sender == owner, "Only the owner can make requests");
        // Fee Validation
        require(msg.value >= fee, "Insufficient funds for the request fee");
        // Oracle Address Validation
        require(
            oracleAddresses[Chain.Polygon] != address(0),
            "Invalid oracle address"
        );
        // Build the Chainlink request
        Chainlink.Request memory req = buildChainlinkRequest(
            jobId,
            address(this),
            this.fulfill.selector
        );
        // Add parameters to the request
        req.add("parcelNumber", parcelNumber);
        req.add("apiKey", apiKey);
        req.add("caselawApiEndpoint", caselawApiEndpoint);
        // Additional parameters
        req.addUint("timeout", timeout);
        req.add("callbackFunction", callbackFunction);
        req.addUint("gasLimit", gasLimit);
        req.add("dataFormat", dataFormat);
        req.add("encryptionKey", encryptionKey);
        req.add("callbackUrl", callbackUrl);
        req.add("customHeader", customHeader);
        req.add("dataFilter", dataFilter);
        // Send the Chainlink request to the oracle
        sendChainlinkRequestTo(_oracle, req, fee);
        // Emit an event for transparency
        emit CaseDataRequested(owner, parcelNumber, _oracle);
    }

    // Event emitted when case data is requested
    event CaseDataRequested(
        address indexed requester,
        string caseIdentifier,
        address indexed oracle
    );
}
