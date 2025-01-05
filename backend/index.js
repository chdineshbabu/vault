import express from "express";
import { ethers } from "ethers";
const app = express();
const port = 3001;
const provider = new ethers.JsonRpcProvider(
  "https://holesky.infura.io/v3/ef32ca39802242d69b586f48e24ee92c"
);

const eventAbi = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Deposit",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Withdrawn",
      "type": "event"
    }
  ];
  
const contractAddress = "0x8e56c12ac374DE66cDd3e19458AB8A0797537799";
const contract = new ethers.Contract(contractAddress, eventAbi, provider);

app.get("/", async (req, res) => {
    res.send(`Contract address: ${contractAddress}`);
}) 

app.get("/deposit", async (req, res) => {
    const q = await contract.queryFilter(contract.filters.Deposit());
    const lq = q.length
    res.send({ Number_of_Deposit_Events: lq, Deposit_Events: q });
});
app.get("/withdraw", async (req, res) => {
    const q = await contract.queryFilter(contract.filters.Withdrawn());
    const lq = q.length
    res.send({ Number_of_Withdraw_Events: lq, Withdraw_Events: q });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
