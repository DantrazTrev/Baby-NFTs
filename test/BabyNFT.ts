import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("Baby NFTS",function(){
    async function NFTsBirth(){
      const NFT = await ethers.getContractFactory("BabyNFT");
        const uwu = await NFT.deploy();
        await uwu.deployed();
        return uwu;
    }

    let uwu;
    before(async function () {
        uwu= await NFTsBirth();
    })
    it("Fails with char",
    async function () {
        let e;
        try{
            await uwu.createChar(0,{
                value:ethers.utils.parseEther("0.049999")
            })

        }
        catch(err){
            e=err
        }
        expect(e.message.includes("Send more money , bitch")).to.equal(true)
        
    })
   })
