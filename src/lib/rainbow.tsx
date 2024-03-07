import '@rainbow-me/rainbowkit/styles.css'

import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { WagmiProvider } from 'wagmi'
import { mainnet, polygon, optimism, arbitrum, base, zora } from 'wagmi/chains'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const config = getDefaultConfig({
    appName: 'ShopcekApp',
    projectId: 'YOUR_PROJECT_ID',
    chains: [mainnet, polygon, optimism, arbitrum, base, zora],
    ssr: true // If your dApp uses server side rendering (SSR)
})

const queryClient = new QueryClient()

export function RainbowProvider({ children }: any) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider coolMode>
                    {children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    )
}
