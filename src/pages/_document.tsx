import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return(
            <Html>
                <Head>
                    <meta property="og:title" content="Podcastr" key="Podcastr" />
                    <meta property="og:description" content="Aplicação que exibe os episódios dos podcasts da Rocketseat onde cada um tem uma pagina interna dando mais detalhes do episódio." />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://podcastnextjs.vercel.app" />
                    <meta property="og:image" content="https://podcastnextjs.vercel.app/app-preview.png" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap" rel="stylesheet" />
                    <link rel="shortcut icon" href="/favicon.png" type="image/png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}