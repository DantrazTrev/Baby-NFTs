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

      it("Create charecter",
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

    it("Fails with char with less money",
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
    it("Return No NFTs",async function () {
       expect(await uwu.getChars()).to.deep.equal([]) 
        
    })
    it("Should create ")
   })
