"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { abi } from "../utils/Vault.json";
import { useAccount, useWriteContract } from "wagmi";
import { useEffect, useState } from "react";
import { useReadContract } from 'wagmi'

export default function TokenVault() {
  const account = useAccount();
  const { writeContract } = useWriteContract();
  const [value, setValue] = useState(0);
  const handleDeposit = async () => {
    writeContract({
      abi,
      address: "0x8e56c12ac374DE66cDd3e19458AB8A0797537799",
      functionName: "deposit",
      args: [value *10**18],
    })
    setValue(0);
  }
  const handleWithdraw = async () => {
    writeContract({
      abi,
      address: "0x8e56c12ac374DE66cDd3e19458AB8A0797537799",
      functionName: "withdraw",
      args: [value *10**18],
    })
    setValue(0);
  } 

  const { data: balance, isLoading, isError, refetch } = useReadContract({
    abi,
    address: "0x8e56c12ac374DE66cDd3e19458AB8A0797537799",
    functionName: "userBalance",
    args: [account.address],
  });
  const bal = Number(balance) / 10**18;

  useEffect(() => {
    refetch();
  }, [value]);


  return (
    <div className="flex items-center justify-center ">
      <div className="bg-white rounded-lg shadow-lg p-12">
        <div className="border-b p-6">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Token Vault
          </h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="text-center flex flex-col items-center space-y-2">
              <ConnectButton chainStatus="name" showBalance={false} />
              <p className="text-sm py-2 text-gray-500">Deposited Tokens</p>
              {isLoading ? (
                <p className="text-md font-thin text-gray-800">Loading...</p>
              ) : isError ? (
                <p className="text-md font-thin text-gray-800">Error loading balance</p>
              ) : (
                <p className="text-md font-thin text-gray-800">{bal} TOKENS</p>
              )}
              <input
                type="number"
                placeholder="Enter amount"
                className="w-full text-gray-700 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
              />
              <div className="grid grid-cols-2 gap-4">
                <button onClick={handleDeposit} className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none">
                  Deposit
                </button>
                <button onClick={handleWithdraw} className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none">
                  Withdraw
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}