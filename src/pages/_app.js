import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { StateProvider } from "@/context/StateContext";
import reducer, { initialState } from "@/context/StateReducer";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import React from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="relative flex flex-col h-screen justify-between">
        <Navbar />
        <div
          className={`mb-auto w-full mx-auto ${
            router.pathname !== "/" ? "mt-36" : ""
          }`}
        >
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </StateProvider>
  );
}
