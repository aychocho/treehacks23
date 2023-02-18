import { AptosAccount, AptosClient, TokenClient } from 'aptos'


/**
 * Reference:
 * 
 * Aptos Devnet API Docs: https://fullnode.devnet.aptoslabs.com/v1/spec#/operations/get_account
 *  
 */
const admin_address = "0x76c6703811ecfc91ca761600b782ae3cd1a9845c3ca940f14225a491d64213e7"

const defaultNetworks = {
    nodeUrl: 'https://fullnode.devnet.aptoslabs.com'
}

function getAptosClient() {
    return new AptosClient(defaultNetworks.nodeUrl)
}

async function getAccountResources(address) {
    const aptosClient = getAptosClient();
    const accountResources = await aptosClient.getAccountResources(address);
    return accountResources;
}

function createToken(address, name, SerialNum, description, img) {
    const tokenClient = new TokenClient(getAptosClient());
    tokenClient.createCollection(address, name, description, img, 1);
    const hash = tokenClient.createToken(address, name, SerialNum, description, 1, img, 1);
    return hash;
}

function sendToken(address, name, SerialNum, dest) {
    const tokenClient = new TokenClient(getAptosClient());
    tokenClient.offerToken(address, dest, admin_address, name, SerialNum, 1);
}