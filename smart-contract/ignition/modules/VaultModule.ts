import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const VaultModule = buildModule("VaultModule", (m) => {
  const tokenAddress = m.getParameter(
    "tokenAddress",
    "0x84022756071ffbdBF5c0555cd1216751EcfCE96f" 
  );
  const vault = m.contract("Vault", [tokenAddress]);

  return { vault };
});

export default VaultModule;