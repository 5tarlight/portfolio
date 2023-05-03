import Lock from "@/components/Lock";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Head>
        <title>YEAHx4 | Portfolio</title>
        <meta name="description" content="Hello. I'm YEAHx4." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="main">
        <Lock show={show} setShow={setShow} />
      </div>

      <style jsx>{`
        .main {
          width: 100vw;
          height: 100vh;
        }
      `}</style>
    </>
  );
}
