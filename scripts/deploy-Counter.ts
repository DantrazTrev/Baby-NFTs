import "@nomiclabs/hardhat-ethers"
import { ethers } from "hardhat"


async function deploy(){
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.deployed();
    return counter;

}
//@ts-ignore
async function count(counter){
await counter.count() ;
await counter.count() ;
await counter.count() ;  

console.log("From Script count",await counter.readCount())

}

deploy().then(count)