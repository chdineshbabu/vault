// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Vault {
    IERC20 public token;
    mapping(address => uint256) private balances;
    event Deposit(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount);
    constructor(address _tokenAddress) {
        require(_tokenAddress != address(0), "Not a token address");
        token = IERC20(_tokenAddress);
    }
    function deposit(uint256 amount) external {
        require(amount > 0, "Amount is not greater than zero");
        require(
            token.transferFrom(msg.sender, address(this), amount),
            "Transfer failed"
        );
        balances[msg.sender] += amount;
        emit Deposit(msg.sender, amount);
    }
    function withdraw(uint256 amount) external {
        require(amount > 0, "Amount is not greater than zero");
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        require(token.transfer(msg.sender, amount), "Transfer failed");
        emit Withdrawn(msg.sender, amount);
    }
    function balanceOf() external view returns (uint256) {
        return token.balanceOf(address(this));
    }
    function userBalance(address user) external view returns (uint256) {
        return balances[user];
    }
}