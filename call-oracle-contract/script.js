import web3 from './web3';

console.log("Hi script connected");

document.querySelector('.btnCall').addEventListener('click', function(){
	document.querySelector(".address").innerHTML = "pending"

	console.log('click');
})





// async function loadWeb3() {
//     if (window.ethereum) {
//         window.web3 = new Web3(window.ethereum);
//         window.ethereum.enable();
//     }
// }


// async function load() {
//     await loadWeb3();
//     window.contract = await loadContract();
//     updateStatus('Ready!');
// }

// async function printCoolNumber() {
//     updateStatus('fetching Cool Number...');
//     const coolNumber = await window.contract.methods.coolNumber().call();
//     updateStatus(`coolNumber: ${coolNumber}`);
// }

// async function changeCoolNumber() {
//     const value = Math.floor(Math.random() * 100);
//     updateStatus(`Updating coolNumber with ${value}`);
//     const account = await getCurrentAccount();
//     const coolNumber = await window.contract.methods.setCoolNumber(value).send({ from: account });
//     updateStatus('Updated.');
// }

// const coolNumber = await window.contract.methods.setCoolNumber(value).send({ from: account });

// async function getCurrentAccount() {
//     const accounts = await window.web3.eth.getAccounts();
//     return accounts[0];
// }

// function updateStatus(result) {
//     const resultEl = document.getElementById('result');
//     resultEl.innerHTML = result;
//     console.log(result);
// }

// load();



