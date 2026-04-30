import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  console.log("Document Rendering");
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="title" content="Nestar-demo" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" type="img/png" href="/img/logo/favicon.svg" />
        {/* SEO OPTIMIZATION */}
        <meta
          name="keyword"
          content={"Nestar, Nestar uz, devex mern , mern nestjs fullstack"}
        />
        <meta
          name="description"
          content={
            "Koreyaing har nuqtasidan kochmas mulklarni sotib oling , soting. |" +
            "shuning koreyschasi . |" +
            "shuning ruschasi"
          }
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// Toliq server side rendering da ishga tushadi. har bir request da ishga tushadi  hamda Search Engine Optimization uchun ishlatiladi
// Meta datalar uchun ishlatiladi