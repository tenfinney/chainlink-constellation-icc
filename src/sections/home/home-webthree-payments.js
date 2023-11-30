import { React, useState, useRef } from 'react';
import ReactPlayer from "react-player";

import LinkExternal01Icon from '@untitled-ui/icons-react/build/esm/LinkExternal01';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import Iframe from 'react-iframe'
import { useTheme } from '@mui/material/styles';
import ImageSwapOnHover from './ImageSwapOnHover';

const webthreepayments = [
{
id: "exclusivenft",
title: "Exclusive Membership NFT: ",
description:
"Every member will receive an exclusive NFT minted on an EVM-based blockchain, symbolizing their affiliation with the Consortium. This NFT can be a collectible and a digital badge of honor within the legal community.",
imageDark: "/assets/vertical/lexautomatico-2024-vertical-membership12-600w.png",
imageLight: "/assets/vertical/lexautomatico-2024-vertical-membership12-600w.png",
},
{
id: "web3training",
title: "Cutting-Edge Web3 Training:",
description:
"Access to high-quality Web3 training courses, including blockchain fundamentals, smart contract development, and decentralized applications (dApps). This training equips members with valuable skills for the future of law and technology.",
imageDark: "/assets/vertical/lexautomatico-2024-vertical-web3-600w.png",
imageLight: "/assets/vertical/lexautomatico-2024-vertical-web3-600w.png",
},
{
id: "blockchaincert",
title: "Blockchain-Based Certificates of Completion: ",
description:
"Earn blockchain-based certificates of completion for progressing through Web3 courses. These certificates are tamper-proof, easily verifiable, and can be shared on professional platforms, enhancing your credibility in the legal and tech sectors.",
imageDark: "/assets/vertical/lexautomatico-2024-vertical-blockchain-600w.png",
imageLight: "/assets/vertical/lexautomatico-2024-vertical-blockchain-600w.png",
},
{
id: "networkingoppys",
title: "Networking Opportunities: ",
description:
"Joining the Consortium provides a unique opportunity to connect with like-minded peers, faculty, and legal professionals interested in the intersection of law and technology. Build a valuable network of contacts for future collaborations and career opportunities.",
imageDark: "/assets/vertical/lexautomatico-2024-vertical-networking-600w.png",
imageLight: "/assets/vertical/lexautomatico-2024-vertical-networking-600w.png",
},
{
id: "resumebooster",
title: "Unique Resume Booster: ",
description:
"The membership NFT, blockchain certificates, and Legal Engineering certification can make your resume stand out to prospective employers and clients, showcasing your commitment to staying at the forefront of legal innovation.",
imageDark: "/assets/vertical/lexautomatico-2024-vertical-resume-600w.png",
imageLight: "/assets/vertical/lexautomatico-2024-vertical-resume-600w.png",
},
{
id: "legalengcertpath",
title: "Legal Engineering Certification Pathway: ",
description:
"Gain access to a structured pathway toward obtaining a Legal Engineering certification. This certification signifies expertise in using technology, including blockchain and smart contracts, to innovate legal processes and services.",
imageDark: "/assets/vertical/lexautomatico-2024-vertical-certification-600w.png",
imageLight: "/assets/vertical/lexautomatico-2024-vertical-certification-600w.png",
},
{
id: "insights",
title: "Industry Insights: ",
description:
"Stay updated on the latest developments at the intersection of law and technology through exclusive webinars, seminars, and guest lectures from industry leaders and innovators.",
imageDark: "/assets/vertical/lexautomatico-2024-vertical-insights-600w.png",
imageLight: "/assets/vertical/lexautomatico-2024-vertical-insights-600w.png",
},
{
id: "researchandcollab",
title: "Research and Collaboration: ",
description:
"Collaborate on research projects exploring the legal implications of emerging technologies. Contribute to cutting-edge legal scholarship and be part of the conversation shaping the future of the legal profession.",
imageDark: "/assets/vertical/lexautomatico-2024-vertical-research-600w.png",
imageLight: "/assets/vertical/lexautomatico-2024-vertical-research-600w.png",
},
{
id: "influencepolicy",
title: "Influence LegalTech Policy: ",
description:
"Participate in discussions and initiatives that can influence the development of legal technology policies and regulations, helping to shape the legal landscape of the future.",
imageDark: "/assets/vertical/lexautomatico-2024-vertical-influence-600w.png",
imageLight: "/assets/vertical/lexautomatico-2024-vertical-influence-600w.png",
}

];
export const HomeWebThreePayments = () => {


   const theme = useTheme();
   const playerRef = useRef(null);
   
   const handleReady = () => {
       if (playerRef.current) {
       playerRef.current.wrapper.querySelector('video').setAttribute('preload', 'none');
       }
       };
   
   function VideoPlayer({ videoUrl, light }) {
       return (
         <Stack
         alignItems="center" 
         direction="row" 
         flexWrap="wrap" 
         spacing={1} 
         sx={{ my: 3 }}
         >
           <ReactPlayer
             ref={playerRef}
             url={videoUrl}
             controls={true}
             playing={false}
             loop={false}
             volume={0.25}
             width="90vw"
             height="auto"
             onReady={handleReady}
             poster={light ? light : undefined}
           />
         </Stack>
       );
     }



const [activeWebThreePayment, setActiveWebThreePayment] = useState(0);
const webthreepayment = webthreepayments[activeWebThreePayment];
const image = theme.palette.mode === 'dark' ? webthreepayment?.imageDark : webthreepayment?.imageLight;


return (

<Box
sx={{
backgroundColor: 'neutral.800',
backgroundRepeat: 'no-repeat',
backgroundPosition: 'top center',
backgroundImage: 'url("/assets/gradient-bg.svg")',
color: 'common.white',
py: '60px'
}}
>
<br/>
<br/>

<Container maxWidth="lg">

<Grid alignItems="center"
container
spacing={3}
>
<br />

<Grid
alignItems="center"
container
spacing={3}
>

<Grid
xs={12} 
md={6}
>
<Stack spacing={4}>
<br/>
<ImageSwapOnHover
src="/assets/hover/lexautomatico-2024-vert-46-desat.png"
hoverSrc="/assets/hover/lexautomatico-2024-vert-46-blue.png"
alt="LexAutomatico"
/>

</Stack>
</Grid>


<Grid
xs={12} 
md={6}
>
<Box sx={{ mt: 3 }}>
<hr />
<Typography
color="lightsteelblue"
sx={{ mb: 1 }}
variant="h6"
>
<h1>FEATURES OF USING ICC</h1>
</Typography>
<hr/>
<br/>
<Typography
align="left"
color="palegoldenrod"
variant="h4"
>
Primary Objectives
</Typography>



<div>
<Typography
align="left"
color="inherit"
sx={{ mb: 3 }}
variant="body2"
fontSize="12pt"


>
<li>Secure escrow functionality allowing clients to deposit case retainers and other digital assets into reputable third party custody.</li>
<li>Automated transfer of pre-agreed portions of deposited assets to counterparties when certain computable conditions are fulfilled.</li>
<li>Immutable transaction histories providing undisputed evidentiary records acceptable to any court.</li>
<li>Integration of oracular services to query off-chain legal databases and apply relevant precedentswithin the smart-contract logic. </li>
<li>Cross-chain asset transfers to comply with jurisdiction-specific laws</li>
<li>Encrypted data storage for selectively revealing info only to authorized entities</li>
<li>Off-chain API access to latest legal precedents from external sources</li>
<li>Reliable and uncensorable data feeds for legal smart-contracts</li>
<li>teroperability with other blockchain networks through cross-chain communication protocols.</li>
<li>With these tools, we can programmatically enforce contractual agreements, leverage big data insights, and reduce disputes all on a neutral, tamper-proof infrastructure. The game-changing legal implications are clear.</li>
</Typography>
</div>
<Typography
align="left"
sx={{ mb: 3 }}
color="palegoldenrod"
variant="h4"
>
Overview
</Typography>
<Typography
align="left"
color="inherit"
sx={{ mb: 3 }}
variant="body2"
fontSize="12pt"
>
The contract&apos;s primary objective is to enable users to securely transfer tokens across different blockchains and obtain legal data through Chainlink oracles. It achieves this by integrating Chainlink oracles, utilizing the Chainlink Interoperability Protocol (CCIP), and implementing secure cross-chain transfers. The contract is deployed on Ethereum but supports interoperability with other chains such as Polygon and Avalanche.
</Typography>
<Typography
align="left"
sx={{ mb: 3 }}
color="palegoldenrod"
variant="h4"
>
Opportunities and Challenges 
</Typography>
<Typography
align="left"
color="inherit"
sx={{ mb: 3 }}
variant="body2"
fontSize="12pt"
>
Creating a smart contract involves programming on a specific blockchain platform, such as Ethereum. However, there are some challenges with creating a smart-contract that handles off-chain data: Smart contracts on blockchain networks, like Ethereum, are executed in a secure and deterministic environment. They can&apos;t directly interact with external web resources or APIs that require authentication, such as a county recorder website. Given these limitations, the general idea is to have an off-chain service, like a Chainlink oracle, that interacts with the external API and then provides the data to the smart contract. The smart contract then interacts with the oracle to receive the data.
</Typography>
<Typography
align="left"
color="inherit"
sx={{ mb: 3 }}
variant="body2"
fontSize="12pt"
>
The `ChainlinkClient` contract and the corresponding functions we used as a basis of this project are part of the Chainlink framework. The ICC smart-contract presented here assumes that the external API returns the required property data as a string, and it emits an event with the result when the data is received. A front-end application (HTML/JavaScript) was developed to interact with this contract and display the results in an `index.html` file.
</Typography>
<Typography
align="left"
sx={{ mb: 3 }}
color="palegoldenrod"
variant="h4"
>
Interfacing with Chainlink
</Typography>
<Typography
align="left"
color="inherit"
sx={{ mb: 3 }}
variant="body2"
fontSize="12pt"
>
When interacting with Chainlink, the ICC smart contract serves as the interface between our decentralized application and the Chainlink network. The ICC smart contract contains the logic for initiating requests to external data sources (such as the Caselaw API) and processing the responses.</Typography>
<Typography
align="left"
color="inherit"
variant="body2"
fontSize="12pt"
>
This expands the design space for legal tech smart-contracts and highlights key roles Chainlink can play in serving data requests, facilitating cross-chain transactions, and enabling advanced hybrid smart-contract designs. For both legal teams and blockchain developers, SecureCrossChainTransferAndLexOracle shows the immense possibilities ahead in combining decentralized oracle networks with legal agreements on-chain.
</Typography>
<br/>
<br/>
</Box>
</Grid>




<Grid
xs={12} 
md={6}
>
<Box sx={{ mt: 3 }}>

<hr />
<Typography
color="lightsteelblue"
sx={{ mb: 1 }}
variant="h6"
>
<h1>Here&apos;s a breakdown of the necessary files used for the ICC smart-contract and application.
</h1>
</Typography>
<hr/>

<br/>
<br/>

<Typography
align="left"
color="palegoldenrod"
sx={{ mb: 1 }}
variant="h4"
>
Smart Contract
</Typography>
<Typography
align="left"
color="#a0b3f2"
sx={{ mb: 2 }}
variant="h5"
>
`SecureCrossChainTransferAndLexOracle.sol`
</Typography>
<Typography
align="left"
color="inherit"
sx={{ mb: 1 }}
variant="body1"
>
Written in Solidity, this smart contract handles the interaction with Chainlink. It defines functions for initiating Chainlink requests, processing responses, and implementing the logic specific to the legal-tech application.

</Typography>
<br/>
<br/>

<Typography
align="left"
color="palegoldenrod"
sx={{ mb: 2 }}
variant="h4"
>
External Adapter
</Typography>
<Typography
align="left"
color="#a0b3f2"
sx={{ mb: 2 }}
variant="h5"
>
`SecureCrossChainTransferAndLexOracle.js`
</Typography>
<Typography
align="left"
color="inherit"
sx={{ mb: 1 }}
variant="body1"
>

Written in JavaScript, this file serves as an external adapter to interact with the API. It fetches data from the external source (Caselaw API) and can perform any necessary data transformation before passing it back to the smart contract.


</Typography>

<br/>
<br/>

<Typography
align="left"
color="palegoldenrod"
sx={{ mb: 2 }}
variant="h4"
>
Deployment Scripts
</Typography>
<Typography
align="left"
color="#a0b3f2"
sx={{ mb: 2 }}
variant="h5"
>
`deploy_smart_contract.js` and `deploy_chainlink_job.js`
</Typography>

<Typography
align="left"
color="inherit"
sx={{ mb: 1 }}
variant="body1"
>

Written in JavaScript, these scripts handle the deployment of the smart contract and, if needed, the Chainlink job. Deployment scripts are essential for setting up smart-contracts on the Ethereum blockchain and Chainlink network.


</Typography>

<br/>
<br/>

<Typography
align="left"
color="palegoldenrod"
sx={{ mb: 2 }}

variant="h4"
>
Chainlink Job Specification
</Typography>
<Typography
align="left"
color="#a0b3f2"
sx={{ mb: 2 }}
variant="h5"
>
`job_specification.json`
</Typography>

<Typography
align="left"
color="inherit"
sx={{ mb: 1 }}
variant="body1"
>

Written in JSON, this file specifies the job that Chainlink nodes will perform. It includes information such as the type of initiator, tasks to be performed, and any necessary parameters. This configuration is essential for telling Chainlink nodes how to interact with the external data source.



</Typography>

<br/>
<br/>
<Typography
align="left"
color="inherit"
sx={{ mb: 1 }}
variant="body1"
fontSize="16pt"

>

While the smart contract is written in Solidity, the interaction with Chainlink involves external components like the external adapter and Chainlink job specification, which is written in JavaScript and JSON, respectively.





</Typography>

<br/>
<br/>

<Typography
align="left"
color="inherit"
sx={{ mb: 1 }}
variant="body1"
fontSize="16pt"
>

These files work together to create a decentralized oracle system, with the smart contract as the core component handling interactions with both the blockchain and external data sources through Chainlink. 


</Typography>


<br/>
<br/>

<br/>
<br/>

<hr/>

<br/>
<br/>



<ImageSwapOnHover
src="/assets/hover/2024-hover-colored-11.png-desat.png"
hoverSrc="/assets/hover/2024-hover-colored-11.png"
alt="LexAutomatico"
/>
</Box>
</Grid>



<Grid
xs={12} 
md={6}
>
<Stack spacing={4}>
<br/>
<ImageSwapOnHover
src="/assets/hover/lexautomatico-2024-vert-47-desat.png"
hoverSrc="/assets/hover/lexautomatico-2024-vert-47-blue.png"
alt="LexAutomatico"
/>

</Stack>
</Grid>




</Grid>
























<Grid
xs={12} 
md={6}
>
<Box sx={{ mt: 3 }}>
<hr />
<Typography
color="lightsteelblue"
sx={{ mb: 1 }}
variant="h6"
>
<h1>Overview of the ICC</h1>
</Typography>
<hr/>
<br/>
<Typography
align="left"
sx={{ mb: 1 }}
color="palegoldenrod"
variant="h4"
>
Secure CrossChain Transfer And LexOracle
</Typography>
<Typography
align="left"
color="inherit"
sx={{ mb: 3 }}
variant="body2"
>
The SecureCrossChainTransferAndLexOracle smart-contract is a powerful and versatile tool designed to facilitate secure and auditable cross-chain transfers of assets while leveraging the capabilities of Chainlink oracles to access and evaluate complex legal problems through API calls.</Typography>
<Typography
align="left"
sx={{ mb: 1 }}
color="palegoldenrod"
variant="h4"
>
Developed by
</Typography>
<Typography
align="left"
color="inherit"
sx={{ mb: 3 }}
variant="body2"
>
Developed by Scott Stevenson, J.D., in collaboration with Web3 Legal Engineering, this smart-contract provides a robust framework for secure transactions and legal data processing on multiple blockchain networks.
</Typography>
<Typography
align="left"
sx={{ mb: 1 }}
color="palegoldenrod"
variant="h4"
>
Secure and Decentralized 
</Typography>
<Typography
align="left"
color="inherit"
sx={{ mb: 3 }}
variant="body2"
>
The SecureCrossChainTransferAndLexOracle smart-contract enables secure and decentralized cross-chain token transfers while also allowing for encrypted data storage and off-chain data retrieval through Chainlink oracles. This opens up exciting possibilities for evaluating complex legal issues on blockchain networks.
</Typography>
<Typography
align="left"
sx={{ mb: 1 }}
color="palegoldenrod"
variant="h4"
>
Primary Purpose
</Typography>
<Typography
align="left"
color="inherit"
sx={{ mb: 3 }}
variant="body2"
>
The primary purpose of this smart-contract is to enable the secure transfer of assets, such as tokens, between different blockchain networks while concurrently addressing complex legal challenges through the use of Chainlink oracles. The smart-contract achieves this by employing Chainlink&apos;s decentralized oracle network to access external data securely and efficiently.

</Typography>
<Typography
align="left"
color="inherit"
sx={{ mb: 3 }}
variant="body2"
>
It achieves this by integrating Chainlink oracles, utilizing the Chainlink Interoperability Protocol (CCIP), and implementing secure cross-chain transfers.

</Typography>
<Typography
align="left"
sx={{ mb: 1 }}

color="palegoldenrod"
variant="h4"
>
Core Features
</Typography>
<Typography
align="left"
color="inherit"
sx={{ mb: 3 }}
variant="body2"
>
At its core, SecureCrossChainTransferAndLexOracle facilitate cross-chain transactions between different blockchain networks like Ethereum, Polygon, and Avalanche. Users can deposit tokens into the smart-contract, which are then securely held until the owner triggers a cross-chain transfer to the next specified network. Chainlink oracles handle retrieving any necessary data from off-chain sources and enabling the actual transfer of funds across chains.</Typography>
<Typography
align="left"
sx={{ mb: 1 }}

color="inherit"
variant="body2"
>
The smart-contract tracks user balances, token approvals, transaction histories, and messages associated with addresses. Importantly, sensitive data like API keys are stored encrypted on-chain, only accessible to the smart-contract owner. The owner can set a decryption key to securely reveal the plaintext data when needed.
</Typography>

<br/>
</Box>
</Grid>




<Grid
xs={12} 
md={6}
>
<Box sx={{ mt: 3 }}>

<Typography
align="center"
color="lightsteelblue"
sx={{ mb: 1 }}
variant="h3"
>
Unlock Excellence with Chainlink and ICC!
</Typography>


<hr/>




<ImageSwapOnHover
src="/assets/hover/lexautomatico-2024-vert-30-desat.png"
hoverSrc="/assets/hover/lexautomatico-2024-vert-30-blue.png"
alt="LexAutomatico"
/>
</Box>
</Grid>


<Grid
xs={12} 
md={6}
>
<Box sx={{ mt: 3 }}>
<hr />
<Typography
color="lightsteelblue"
sx={{ mb: 1 }}
variant="h6"
>
<h1>Smart-Contract Features and Key Components</h1>
</Typography>
<hr/>
<br/>
<Typography
align="left"
sx={{ mb: 1 }}

color="palegoldenrod"
variant="h4"
>
Modular Interface: 
</Typography>
<Typography
align="left"
color="inherit"
sx={{ mb: 3 }}
variant="body2"
>
For retrieving off-chain data, the smart-contract defines a modular interface to make requests to Chainlink oracles. Parameters like the API endpoint, key, and job ID are configurable. The smart-contract specifies a sample endpoint for a case law API, showing how legal data could be pulled from external sources to supplement on-chain logic. For example, smart-contracts could call this API to check the status of relevant cases when executing agreements.

</Typography>

<Typography
align="left"
color="inherit"
sx={{ mb: 3 }}
variant="body2"
>
For Chainlink node operators, this smart-contract represents an opportunity to provide key services to legal tech projects. Operating Chainlink oracles allows serving data requests from legal smart-contracts, like the case law API call in the example code. Running a decentralized oracle network also enables facilitating cross-chain transactions, which legal agreements may require to comply with regulations across different blockchain networks and traditional systems.

</Typography>
<Typography
align="left"
sx={{ mb: 1 }}

color="palegoldenrod"
variant="h4"
>
Encryption and Data Security:
</Typography>
<Typography
align="left"
color="inherit"
sx={{ mb: 3 }}
variant="body2"
>
To ensure data security, the smart-contract incorporates encryption mechanisms. The owner can set and retrieve encrypted data, and the smart-contract supports decryption using a provided key.
</Typography>

<Typography
align="left"
sx={{ mb: 1 }}

color="palegoldenrod"
variant="h4"
>
Chainlink Oracle Integration: 
</Typography>
<Typography
align="left"
color="inherit"
sx={{ mb: 3 }}
variant="body2"
>
The smart-contract leverages Chainlink oracles to access external data, enabling the evaluation of complex legal problems. It provides flexibility by allowing the smart-contract owner to set different oracles for each supported chain, along with corresponding Job IDs.

</Typography>




<Typography
align="left"
sx={{ mb: 1 }}

color="palegoldenrod"
variant="h4"
>
Oracle Configuration: 
</Typography>
<Typography
align="left"
color="inherit"
sx={{ mb: 3 }}
variant="body2"
>
The smart-contract allows the owner to configure the Chainlink oracle with specific parameters, including oracle address, oracle node, API key, endpoint, job ID, and fee.
</Typography>

<Typography
align="left"
color="palegoldenrod"
variant="h4"
>
API Access: 
</Typography>

<Typography
align="left"
sx={{ mb: 1 }}

color="inherit"
variant="body2"
>
Through the requestOracleData function, the smart-contract sends requests to Chainlink oracles, leveraging the CCIP for cross-chain access. The oracle processes the request and triggers the receiveCrossChainTransaction function upon fulfillment.

</Typography>

<br/>
<br/>
<br/>
<Typography
align="left"
color="yellow"
variant="body1"
>
The off-chain API access, cross-chain interoperability, and encrypted data storage provided by SecureCrossChainTransferAndLexOracle open up new possibilities for legal smart-contracts. Clauses could reference the latest legal precedents through oracle requests, without exposing sensitive API credentials on-chain. Assets could be securely transferred between chains to comply with jurisdiction-specific laws. And encrypted data enables selectively revealing information only to authorized entities.


</Typography>


<br/>
<br/>
</Box>
</Grid>




<Grid
xs={12} 
md={6}
>
<Box sx={{ mt: 3 }}>

<Typography
align="center"
color="lightsteelblue"
sx={{ mb: 1 }}
variant="h3"
>
Discover Web3 with Interchain Connector & Chainlink!
</Typography>
<Typography
align="center"
color="inherit"
sx={{ mb: 1 }}
variant="h5"
>
Dive into cutting-edge legal technology.
</Typography>

<br/>
<hr/>

<ImageSwapOnHover
src="/assets/hover/lexautomatico-2024-vert-37-desat.png"
hoverSrc="/assets/hover/lexautomatico-2024-vert-37-blue.png"
alt="LexAutomatico"
/>
</Box>
</Grid>




</Grid>

<br/>
<Grid
xs={12} 
md={6}
>
<hr/>
<br/>

<Stack spacing={4}>
<Typography
color="lightsteelblue"
sx={{ mt: 4 }}
variant="h2"
>
Secure Cross Chain Transfer and Lex Oracle
</Typography>


<br/>

<Typography variant="body2">
<VideoPlayer
  videoUrl="https://freeweb3.infura-ipfs.io/ipfs/QmeJ1wKWgmWKLD1WuHpLoPP17Le9tCJJZzhNfBGGNDrqBL"
  light="/assets/lex_image_03.png"
/>
</Typography>




</Stack>
</Grid>




</Container>
</Box>



);
};
