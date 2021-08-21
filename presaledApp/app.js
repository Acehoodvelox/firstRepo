let web3;
let default_account;
let my_contract;

const contract_address = "0x04A9DC5724CC38CBcD4b3F6B50B93a5DDEd7F0cB";
const contract_abi = [{"inputs":[{"internalType":"uint256","name":"rate","type":"uint256"},{"internalType":"address payable","name":"wallet","type":"address"},{"internalType":"contract IERC20","name":"token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beneficiary","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"AmountContribution","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Refund","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beneficiary","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokensPurchased","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_address","type":"address"}],"name":"Whitelisted","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"Claimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_TokensReserved","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_rate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_wallet","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_weiRaised","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"addtoWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"availableTokensICO","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_addresses","type":"address[]"}],"name":"bulkAddtoWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"buyTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"checkContribution","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"checkWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endICO","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"enteredPresale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"hardCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPurchase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minPurchase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"refundMe","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"removefromWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setAvailableTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setHardCap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setMaxPurchase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setMinPurchase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"setRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setSoftCap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"newWallet","type":"address"}],"name":"setWalletReceiver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"softCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"endDate","type":"uint256"},{"internalType":"uint256","name":"_minPurchase","type":"uint256"},{"internalType":"uint256","name":"_maxPurchase","type":"uint256"},{"internalType":"uint256","name":"_softCap","type":"uint256"},{"internalType":"uint256","name":"_hardCap","type":"uint256"}],"name":"startICO","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startRefund","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stopICO","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"tokenAddress","type":"address"}],"name":"takeTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"weiRaised","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]

// Unpkg imports
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const evmChains = window.evmChains;


// Web3modal instance
let web3Modal


// Chosen wallet provider given by the dialog window
let provider;


// Address of the selected account
let selectedAccount;


/**
 * Setup the orchestra
 */
function init() {

  console.log("Jadeite Public Presale");
  console.log("WalletConnectProvider is", WalletConnectProvider);
  console.log("window.web3 is", window.web3, "window.ethereum is", window.ethereum);

  // Check that the web page is run in a secure context,
  // as otherwise MetaMask won't be available
  if(location.protocol !== 'https:') {
    // https://ethereum.stackexchange.com/a/62217/620
    const alert = document.querySelector("#alert-error-https");
    alert.style.display = "block";
    document.querySelector("#btn-connect").setAttribute("disabled", "disabled")
    return;
  }

  // Tell Web3modal what providers we have available.
  // Built-in web browser provider (only one can exist as a time)
  // like MetaMask, Brave or Opera is added automatically by Web3modal
  const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
         56: 'https://bsc-dataseed1.binance.org'
      },
      network: 'binance',
    }
  }
};

  web3Modal = new Web3Modal({
    cacheProvider: false, // optional
    network: 'binance',
    networkId:56,
    providerOptions, // required
    disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
  });

  console.log("Web3Modal instance is", web3Modal);
}

async function preSale() {

    console.log(provider)
    console.log(selectedAccount)
  if (provider == undefined || selectedAccount == null) {
   Swal.fire(
  'Connect Alert',
  'Please Connect Wallet',
  'error'
)  
    return
  } else {
    console.log ('Right Provider')
    console.log('Your account is: ' + selectedAccount)
  }


    const chainId = await web3.eth.getChainId();
    console.log(chainId)   

  contract = new web3.eth.Contract(contract_abi,contract_address);

  if (chainId !== 56) {
   Swal.fire(
  'Connect Alert',
  'Please connect on Binance Smart Chain network',
  'error'
)  
    return
  } else {
    console.log ('Right Network')
  }

  const whitelisted = await contract.methods.checkWhitelist(selectedAccount).call();
  console.log(whitelisted)
    if(whitelisted != true){
       console.log('Not whitelisted')
      Swal.fire(
  'Buy Alert',
  'Address not whitelisted!',
  'error'
)
    return
  }

 const endICO = await contract.methods.endICO().call({from : selectedAccount});
    if(endICO == 0){
      Swal.fire(
  'Buy Alert',
  'Presale not active!',
  'error'
)
    return
  }

 const enteredpresale = await contract.methods.enteredPresale(selectedAccount).call({from : selectedAccount}, function(error, result){
    console.log(result);
});
    if(enteredpresale == true){
      Swal.fire(
  'Buy Alert',
  'Already entered in presale!',
  'error'
)
    return
  }


  let val = document.getElementById("buyinput").value;
  newval = val.replace(",","."); // Replace ',' with '.'
  console.log(newval)
  const min = await contract.methods.minPurchase().call({from : selectedAccount});
  const max = await contract.methods.maxPurchase().call({from : selectedAccount});
  const weiRaised = await contract.methods._weiRaised().call({from : selectedAccount});
  const hardCap = await contract.methods.hardCap().call({from : selectedAccount});
  console.log(min)
  console.log(max)
  bnbval = Number(newval) * 1e18;
  console.log(bnbval)
  bnbRaised = Number(bnbval)+Number(weiRaised);
  console.log(bnbRaised)
  bnbRemain = (Number(hardCap)-Number(weiRaised)) / 1e18;
  console.log(bnbRemain)
  if(bnbRaised > hardCap){
      Swal.fire(
  'Hard Cap Alert',
  'Only ' + bnbRemain + ' BNB left',
  'error'
)
    return
  }

  if(bnbval <= max && bnbval >= min){
  await contract.methods.buyTokens().send({from:selectedAccount, value: bnbval}, (err, res) => {
    if(!err) {
    Swal.fire(
  'Jadeite Presale',
  'Successful Buy',
  'success'
)
  } else {
    Swal.fire(
  'Presale Alert',
  'Transaction Error',
  'error'
)    
  }
  });
  }else{
    Swal.fire(
  'Buy Alert',
  'Min contribution 0.1 BNB\nMax contribution 2 BNB',
  'error'
)    
  }
}

async function claimTokens() {

    console.log(provider)
    console.log(selectedAccount)
  if (provider == undefined || selectedAccount == null) {
   Swal.fire(
  'Connect Alert',
  'Please Connect Wallet',
  'error'
)  
    return
  } else {
    console.log ('Right Provider')
    console.log('Your account is: ' + selectedAccount)
  }

    const chainId = await web3.eth.getChainId();
    console.log(chainId)
    console.log('Your account is: ' + selectedAccount);

  contract = new web3.eth.Contract(contract_abi,contract_address);

  if (chainId !== 56) {
   Swal.fire(
  'Connect Alert',
  'Please connect on Binance Smart Chain network',
  'error'
)  
    return
  } else {
    console.log ('Right Network')
  }

  const haveclaimed = await contract.methods.Claimed(selectedAccount).call({from : selectedAccount}, function(error, result){
    console.log(result);
});
    if(haveclaimed == true){
       console.log('Already claimed')
      Swal.fire(
  'Claim Alert',
  'Tokens already claimed!',
  'error'
)
    return
  }


  const ico = await contract.methods.endICO().call({from : selectedAccount});
  console.log(ico)
    if(ico != 0){
       console.log('Presale is Active!')
      Swal.fire(
  'Claim Alert',
  'Presale is Active!',
  'error'
)
    return
  }

  const enteredpresale = await contract.methods.enteredPresale(selectedAccount).call({from : selectedAccount}, function(error, result){
    console.log(result);
});
  if(enteredpresale == true){
  contract.methods.claimTokens().send({from:selectedAccount}, (err, res) => {
    if(!err) {
    Swal.fire(
  'Jadeite Presale',
  'Successful Claim',
  'success'
)
  } else {
    Swal.fire(
  'Claim Alert',
  'Transaction Error',
  'error'
)    
  }
  });
  }else{
    Swal.fire(
  'Claim Alert',
  'No reserved tokens',
  'error'
)    
  }
}

async function refundMe() {

    console.log(provider)
    console.log(selectedAccount)
  if (provider == undefined || selectedAccount == null) {
   Swal.fire(
  'Connect Alert',
  'Please Connect Wallet',
  'error'
)  
    return
  } else {
    console.log ('Right Provider')
    console.log('Your account is: ' + selectedAccount)
  }
   
    const chainId = await web3.eth.getChainId();
    console.log(chainId)
    console.log('Your account is: ' + selectedAccount);

  contract = new web3.eth.Contract(contract_abi,contract_address);

  if (chainId !== 56) {
   Swal.fire(
  'Connect Alert',
  'Please connect on Binance Smart Chain network',
  'error'
)  
    return
  } else {
    console.log ('Right Network')
  }

  const startrefund = await contract.methods.startRefund().call({from : selectedAccount}, function(error, result){
    console.log(result);
});
    if(startrefund == false){
       console.log('No refund available!')
      Swal.fire(
  'Refund Alert',
  'No refund available!',
  'error'
)
    return
  }

  const contributions = await contract.methods._contributions(selectedAccount).call({from : selectedAccount}, function(error, result){
    console.log(result);
});
  if(contributions > 0){
  contract.methods.refundMe().send({from:selectedAccount}, (err, res) => {
    if(!err) {
    Swal.fire(
  'Presale Refund',
  'Successful Refund',
  'success'
)
  } else {
    Swal.fire(
  'Presale Refund',
  'Transaction Error',
  'error'
)    
  }
  });
  }else{
    Swal.fire(
  'Presale Refund',
  'Transaction Error',
  'error'
)    
  }
}

/**
 * Kick in the UI action after Web3modal dialog has chosen a provider
 */
async function fetchAccountData() {

  // Get a Web3 instance for the wallet
  const web3 = new Web3(provider);

  console.log("Web3 instance is", web3);

  // Get connected chain id from Ethereum node
  const chainId = await web3.eth.getChainId();
  // Load chain information over an HTTP API
  const chainData = evmChains.getChain(chainId);

  // Load Presale Contract
  const presale = new web3.eth.Contract(contract_abi,contract_address);

  // Get list of accounts of the connected wallet
  const accounts = await web3.eth.getAccounts();

  // MetaMask does not give you all accounts, only the selected account
  console.log("Got accounts", accounts);
  selectedAccount = accounts[0];

  document.querySelector("#selected-account").textContent = selectedAccount;

  // Presale Whitelist
    if (chainId == 56) {
    const whitelistedaddress = await presale.methods.checkWhitelist(selectedAccount).call();
    console.log(whitelistedaddress)
    document.querySelector("#whitelisted-address").textContent = whitelistedaddress;
    console.log ('Right Network')  
  } else {
    document.querySelector("#whitelisted-address").textContent = 'Connect on Binance Smart Chain';
    console.log ('Wrong Network')
  }

  // Reserved Tokens
  const enteredpresale = await presale.methods.enteredPresale(selectedAccount).call({from : selectedAccount}, function(error, result){
    console.log(result);
});
    if (chainId == 56 && enteredpresale == true) {
    const reserved = await presale.methods._TokensReserved(selectedAccount).call();
    reservedtokens = Number(reserved) / 1e9;
    console.log(reservedtokens)
    const checkcontrib = await presale.methods.checkContribution(selectedAccount).call();
    console.log(checkcontrib)
    checkcontribution = Number(checkcontrib) / 1e18;
    console.log(checkcontribution)
    document.querySelector("#contribution-amount").textContent = Number(checkcontribution) + ' BNB';
    document.querySelector("#reserved-tokens").textContent = Number(reservedtokens) + ' JDT';    
  } else {
    test = 0;
    document.querySelector("#contribution-amount").textContent = 0 + ' BNB';
    document.querySelector("#reserved-tokens").textContent = 0 + ' JDT';
    console.log ('Wrong Network')
  }


  // Display fully loaded UI for wallet data
  document.querySelector("#prepare").style.display = "none";
  document.querySelector("#connected").style.display = "block";
}



/**
 * Fetch account data for UI when
 * - User switches accounts in wallet
 * - User switches networks in wallet
 * - User connects wallet initially
 */
async function refreshAccountData() {

  // If any current data is displayed when
  // the user is switching acounts in the wallet
  // immediate hide this data
  document.querySelector("#connected").style.display = "none";
  document.querySelector("#prepare").style.display = "block";

  // Disable button while UI is loading.
  // fetchAccountData() will take a while as it communicates
  // with Ethereum node via JSON-RPC and loads chain data
  // over an API call.
  document.querySelector("#buy-connect").setAttribute("disabled", "disabled")
  await fetchAccountData(provider);
  document.querySelector("#buy-connect").removeAttribute("disabled")
}


/**
 * Connect wallet button pressed.
 */
async function onConnect() {

  console.log("Opening a dialog", web3Modal);
  try {
    provider = await web3Modal.connect();
    web3 = new Web3(provider);
  } catch(e) {
    console.log("Could not get a wallet connection", e);
    return;
  }

  // Subscribe to accounts change
  provider.on("accountsChanged", (accounts) => {
    fetchAccountData();
  });

  // Subscribe to chainId change
  provider.on("chainChanged", (chainId) => {
    fetchAccountData();
  });

  // Subscribe to networkId change
  provider.on("networkChanged", (networkId) => {
    fetchAccountData();
  });

  await refreshAccountData();
}

/**
 * Disconnect wallet button pressed.
 */
async function onDisconnect() {

  console.log("Killing the wallet connection", provider);

  if(provider.close) {
    await provider.close();
    await web3Modal.clearCachedProvider();
    window.location.reload();
    provider = null;
  }

  selectedAccount = null;

  // Set the UI back to the initial state
  document.querySelector("#prepare").style.display = "block";
  document.querySelector("#connected").style.display = "none";
}

/**
 * Main entry point.
 */
window.addEventListener('load', async () => {
  init();
  document.querySelector("#buy-connect").addEventListener("click", onConnect);
  document.querySelector("#buy-disconnect").addEventListener("click", onDisconnect);
  document.querySelector("#refundme").addEventListener("click", refundMe);
  document.querySelector("#claimtokens").addEventListener("click", claimTokens);
  document.querySelector("#enterpresale").addEventListener("click", preSale);
});

function setInputFilter(textbox, inputFilter) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
    textbox.addEventListener(event, function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  });
}

setInputFilter(document.getElementById("buyinput"), function(value) {
  return /^\d*\.?\,?\d*$/.test(value); // Allow digits and '.&,' only, using a RegExp
});

