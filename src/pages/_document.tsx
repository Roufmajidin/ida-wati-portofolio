import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <div>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@600&display=swap" rel="stylesheet" />
          <link href="css/bootstrap.css" rel="stylesheet" />
          <link href="css/fontawesome-all.css" rel="stylesheet" />
          <link href="css/styles.css" rel="stylesheet" />
        </div>

      </Head>
      <body>
        <Main />
        <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/jquery.easing.min.js"></script>
        <script src="js/scripts.js"></script>
        <NextScript />
      </body>
    </Html>
  )
}
