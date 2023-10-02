# Radix_001
First steps
1) I copy "radix-dapp-toolkit" from https://github.com/radixdlt/radix-dapp-toolkit to my main directory of my website.

2) html: 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Test</title>
    <add key="webpages:Enabled" value="true" />
    <script type="module" src="main.js"></script>
</head>
<body>
      <radix-connect-button></radix-connect-button>
</body>
</html>

3) javascript:
import { RadixDappToolkit, RadixNetwork } from '/radixdlt/radix-dapp-toolkit'
const rdt = RadixDappToolkit({
    dAppDefinitionAddress:
        'account_rdx16xx_valid_adress_xxxxxxxxxxxxxxxxxxxxxxx',
    networkId: RadixNetwork.RCnetV3,
    applicationName: 'Radix Web3 dApp',
    applicationVersion: '1.0.0',
})
