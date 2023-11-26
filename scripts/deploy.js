const { ethers } = require("hardhat";
const dotenv = dotenv.config();

const main = async () =>{

  const PepeToken = await ethers.getContractFactory("PepeToken");
  const pepToken = await PepeToken.deploy();

  console.log("PepeToken Deployed to:",pepToken.address);

}

const runMain = async() => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error("Error deploying Contract:", error);
    process.exit(1);
  }
}

runMain();