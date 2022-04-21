import "@nomiclabs/hardhat-ethers"
import { ethers } from "hardhat"


// async function deploy(){
//     const Fallback = await ethers.getContractFactory("Fallback");
//     const fallback = await Fallback.deploy();
//     await fallback.deployed();
//     console.log(fallback.address)
//     return fallback;

// }
// //@ts-ignore
// async function fallback(fallback){
//     const f= await ethers.getContractAt("IFallback",fallback.address)
// await f.count() ;

// }

// deploy().then(fallback)

async function deploy(name,...args){
    const Fallback = await ethers.getContractFactory(name);
    const fallback = await Fallback.deploy(...args);
    await fallback.deployed();
    console.log(fallback.address)
    return fallback;

}
//@ts-ignore
async function fallback(){
    const A= await deploy("X")
    const B= await deploy("Y",A.address)

   console.log("X",await A.getX())

   console.log("Y",await B.getX())

       await A.setX(1);
   console.log("Update X via X")
   console.log("X",await A.getX())
   console.log("Y",await B.getX())


    await B.setX(69);
   console.log("Update X via Y")
   console.log("X",await A.getX())
   console.log("Y",await B.getX())
    

}

fallback()