import "@/styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import type { AppProps } from "next/app";
import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  const { user } = pageProps;
  return (
    <UserProvider user={user}>
      <main className={lato.className}>
        <Component {...pageProps} />
      </main>
    </UserProvider>
  );
}