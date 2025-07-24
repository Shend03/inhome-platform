// src/pages/_app.tsx
import { SessionProvider } from "next-auth/react"
import { AppProps } from "next/app"
import { RoleProvider } from '../lib/RoleContext'

export default function App({ 
  Component, 
  pageProps: { session, ...pageProps } 
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <RoleProvider>
        <Component {...pageProps} />
      </RoleProvider>
    </SessionProvider>
  )
}
