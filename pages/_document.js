import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" defer />
          {/* <link rel="preconnect" href="https://fonts.googleapis.com" defer />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="crossorigin" defer />
          <link href="https://fonts.googleapis.com/css2?family=Monoton&display=swap" rel="stylesheet" defer /> */}

            <script async src="https://www.googletagmanager.com/gtag/js?id=G-WV85CLJKTF"></script>
            
            <Script id='ananlytics' dangerouslySetInnerHTML={{__html:`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-WV85CLJKTF');
            `}}/>
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <link rel="manifest" href="/manifest.json" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="crossorigin"/>
          <link href="https://fonts.googleapis.com/css2?family=Monoton&display=swap" rel="stylesheet"/> */}

        </body>
      </Html>
    )
}