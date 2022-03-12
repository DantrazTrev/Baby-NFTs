import { ethers } from "ethers";

function getETH(){
    //@ts-ignore
    const eth= window.ethereum;
    if(!eth){
        throw new Error("Dude where is metamask??")
    }
    return eth
}

async function hasAccounts() {
const eth = getETH()
const accounts = await eth.request({method:"eth_accounts"}) as string[];

return accounts && accounts.length;    
}

async function reqAccounts() {
const eth = getETH()
const accounts = await eth.request({method:"eth_requestAccounts"}) as string[];

return accounts && accounts.length;    
}

async function run() {
    if(!await hasAccounts && !await reqAccounts()){
        throw new Error("Fuck Metamask")
    }
    const counter = new ethers.Contract(process.env.CONTRACT_ADDRESS,["function coutn() public","function readCount public view returns(uint)"],new ethers.providers.Web3Provider(getETH()))
    // const hello = new ethers.Contract("0x5fbdb2315678afecb367f032d93f642f64180aa3",["function hello() public pure returns(string memory)",],new ethers.providers.Web3Provider(getETH()))
    // document.body.innerHTML= await hello.hello();
    const el =document.createElement('div');
    async function setCounter() {
        el.innerHTML= await counter.readCount()
        
    }
    setCounter();
    const button = document.createElement("button");
    button.onclick= async function () {
        await counter.count();
        setCounter()
    }
    document.body.appendChild(el)

    document.body.appendChild(button)
;}
run()