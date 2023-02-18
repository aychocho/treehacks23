import { useWallet } from "@aptos-labs/wallet-adapter-react"
import { WalletSelector } from '@aptos-labs/wallet-adapter-ant-design'

export default function HomeBody() {

    return (
        <div>
            <WalletSelector />
        </div>
    )
}