import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("Test Gas",function(){
    it("Describe Gas",async function (){
        const Gas = await ethers.getContractFactory("TestGas");
        const gas = await Gas.deploy();
        await gas.deployed();

        for (let i=0;i<10;i++){
           await gas.test1();  
           await gas.test2();  
           await gas.test3();
           await gas.test4();    
           await gas.test5();  
        }
        
    })
    expect(1).to.equal(1)
})