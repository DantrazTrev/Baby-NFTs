import { ethers } from "ethers";
import Counter from '../artifacts/contracts/Counter.sol/Counter.json'
function getETH(){
    //@ts-ignore
    const eth= window.ethereum;
    //@ts-ignore
    window.ethereum.enable()
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
    console.log("Yeah we up")
    if(!await hasAccounts && !await reqAccounts()){
        throw new Error("Fuck Metamask")
    }
    const counter = new ethers.Contract(process.env.CONTRACT_ADDRESS,Counter.abi,new ethers.providers.Web3Provider(getETH()).getSigner())
    // const hello = new ethers.Contract("0x5fbdb2315678afecb367f032d93f642f64180aa3",["function hello() public pure returns(string memory)",],new ethers.providers.Web3Provider(getETH()))
    // document.body.innerHTML= await hello.hello();
    const el =document.createElement('div');
    async function setCounter(count?) {
        el.innerHTML= count || await counter.readCount()
        
    }
    setCounter()

    const button = document.createElement("button");
    button.innerText="UPP"
    button.onclick= async function () {
        await counter.count();
    }

    counter.on(counter.filters.CounterInc(),function (count){
        setCounter(count)
    })
    document.body.appendChild(el)

    document.body.appendChild(button)
;}
run()