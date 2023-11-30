// deploy_smart_contract.js

const hre = require('hardhat');

async function main() {
    const CaseLawOracle = await hre.ethers.getContractFactory('CaseLawOracle');
    const caseLawOracle = await CaseLawOracle.deploy();

    await caseLawOracle.deployed();

    console.log('CaseLawOracle deployed to:', caseLawOracle.address);
}

main();