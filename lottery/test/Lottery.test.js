const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const {interface, bytecode} = require('../compile')

let accounts

beforeEach(() => {
//Get a list of all accounts

    // web3.eth.getAccounts()
    //     .then(fetchedAccounts => {
    //         console.log(fetchedAccounts);
    //     });

    beforeEach(async() => {
        //get a list of all accounts
        accounts = await web3.eth.getAccounts();
        //Use One of those accounts to deploy
        //the contract
        lottery = await new Web3.eth.Contract(JSON.parse(interface))
            .deploy({data : bytecode, arguments : ['Hi there!']})
            .send({from : accounts[0], gas : '1000000'});
    })
});

describe('Lottery', () => {
    it('deploys a contract', () => {
        console.log(lottery);
        assert.ok(lottery.options.address);
    });
    it('has a default message', async () => {
        const message = await lottery.methods.message().call();
        assert.strictEqual(message, 'Hi there!');
    });
    it('can change the message', async () => {
        await lottery.methods.setMessage('bye').send({from : accounts[0]})
        const message = await lottery.methods.message().call()
        assert.strictEqual(message, 'bye')
    });
})

