import { AptosAccount, AptosClient } from 'aptos'


/**
 * Reference:
 * 
 * Aptos Devnet API Docs: https://fullnode.devnet.aptoslabs.com/v1/spec#/operations/get_account
 *  
 */

const defaultNetworks = {
    nodeUrl: 'https://fullnode.devnet.aptoslabs.com'
}

async function getAccountResources(address) {
    const aptosClient = new AptosClient(defaultNetworks.nodeUrl)
    const accountResources = await aptosClient.getAccountResources(address);
    return accountResources;
}