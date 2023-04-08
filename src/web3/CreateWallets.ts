// import ethers from "ethers";
// const {PrivateKey} = require("bitcore-lib");
// const{Networks} = require("bitcore-lib");
// const Mnemonic=require("bitcore-mnemonic");

// async function CreateBTCWallet() {
//   let WalletDetails = [];
//   var code = new Mnemonic();
//   const newMnemonic = code.toString();
//   var xpriv1 = code.toHDPrivateKey();
//   WalletDetails.push(xpriv1.privateKey.toString());
//   var publicKey = xpriv1.privateKey.toPublicKey();
//   WalletDetails.push(publicKey.toAddress(Networks.testnet).toString());
//   WalletDetails.push(newMnemonic);
//   return WalletDetails;
// }

// const CreateETHWallet = async () => {
//   let WalletDetails = [];
//   const NewWallet = await CreateBTCWallet();
//   const SeedPhrase = ethers.Wallet.fromMnemonic(NewWallet[2]);
//   // console.log("private Key: "+wallet.privateKey+"   " +"public Key : "+wallet.address)
//   WalletDetails.push(SeedPhrase.privateKey);
//   WalletDetails.push(SeedPhrase.address);

//   return WalletDetails;
// };
