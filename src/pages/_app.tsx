import "../styles/globals.css";

import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

import { ApolloProviderWrapper } from "../components/apollo-provider-wrapper";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ApolloProviderWrapper>
        <Component {...pageProps} />
      </ApolloProviderWrapper>
    </SessionProvider>
  );
}
