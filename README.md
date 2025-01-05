# Simple Gas-Efficient Token Vault

A decentralized application (DApp) designed for users to deposit ERC20 tokens into a vault contract and withdraw them later. This project includes a smart contract, a frontend built with Next.js, and an optional backend using Node.js for tracking deposit and withdrawal statistics.


## Project Structure
```
Valut
  └── Smart Contract/
      └── contracts/               # Solidity smart contracts using Hardhat
  └── Frontend/
      └── src/                     # Next.js with wagmi frontend for interacting with the vault
  └── Backend/
      └── index.js                 # Node.js backend to track on-chain data
```

---

## Specifications

### Smart Contract
The **Vault** smart contract is written in Solidity and includes the following functions:
- `deposit(uint256 amount)`: Allows users to deposit ERC20 tokens into the vault.
- `withdraw(uint256 amount)`: Enables users to withdraw their deposited tokens.
- `balanceOf(address user)`: Returns the token balance of a given user.

```

```

### Frontend
The frontend is built using **Next.js** and includes:
- Wallet connection functionality (e.g., via MetaMask).
- Real-time display of the user’s deposited token balance.
- Forms for depositing and withdrawing tokens, with interactions sent to the smart contract.

### Backend
The backend is a **Node.js** server that:
- Tracks the total number of deposits and withdrawals using on-chain data.
- Provides an endpoint for analytics.
```
https:www.*****.com/
             └──        #Returns Contruct address

https:www.*****.com/deposit
             └──        #Returns total numbers of deposits

https:www.*****.com/withdraw
             └──        #Returns total numbers of withdraws
```



## Dependencies

### Smart Contract
- Hardhat
- OpenZeppelin Contracts (for ERC20 token interface)

### Frontend
- Next.js
- Wagmi

### Backend
- Node.js
- ethers.js
- Express.js 

