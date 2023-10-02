import { RadixDappToolkit, RadixNetwork } from '/radixdlt/radix-dapp-toolkit'

const rdt = RadixDappToolkit({
    dAppDefinitionAddress:
        'account_rdx16x0xz9ydwehjcuq43wy0u94lguat9wy3u9rk6zr5q3vw4ay9jdkpwd',
    networkId: RadixNetwork.RCnetV3,
    applicationName: 'Radix Web3 dApp',
    applicationVersion: '1.0.0',
})