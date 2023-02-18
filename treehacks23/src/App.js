import { AptosWalletAdapterProvider } from '@aptos-labs/wallet-adapter-react'
import logo from './logo.svg';
import './App.css';
import HomeBody from './HomeBody';
import { PetraWallet } from 'petra-plugin-wallet-adapter';

function App() {

  const wallets = [new PetraWallet()]

  return (
    <AptosWalletAdapterProvider autoConnect plugins={wallets}>
      <HomeBody />
    </AptosWalletAdapterProvider>
  );
}

export default App;
