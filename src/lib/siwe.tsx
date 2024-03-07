import { SiweMessage } from 'siwe';
import * as React from 'react'
import { useSignMessage } from 'wagmi'
import { recoverMessageAddress } from 'viem'


export function SignMessage() {
  const recoveredAddress = React.useRef<string>()
  const { data: signMessageData, error, signMessage, variables } = useSignMessage()


    
  React.useEffect(() => {
    (async () => {

        console.log(variables, signMessageData)

      if (variables?.message && signMessageData) {
        const recoveredAddress = await recoverMessageAddress({
          message: variables?.message,
          signature: signMessageData,
        })
        

        console.log(recoveredAddress)
      }
    })()
  }, [signMessageData, variables?.message])


}


function getMessage({nonce, address, chainId}:{nonce: string, address: string, chainId: number}){
    return new SiweMessage({
        domain: window.location.host,
        address,
        statement: 'Sign in with Ethereum to the app.',
        uri: window.location.origin,
        version: '1',
        chainId,
        nonce,
      }).prepareMessage()
}