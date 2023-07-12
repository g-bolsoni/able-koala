import React from 'react';
import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
    render(){
        return(
            <Html lang="en">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
                    <meta name="language" content="en-US" />
                    <meta name="description" content="This book helps caregivers, family members, and friends (relatives) of the elderly and people with special needs to understand the need and importance of taking care of each other."/>
                    <meta name="robots" content="index, follow" />
                    <meta name="googlebot" content="index, follow" />
                    <meta name="geo.region" content="Au" />
                    <meta name="author" content="Able &amp; Koala" />
                    <meta name="generator" content="ABLE KOALA" />
                    <meta name="webmaster" content="ABLE KOALA" />
                    <meta name="copyright" content="ABLE KOALA" />
                    <link rel="icon" href="/logos/logo.png" sizes="any"/>
                    <title>Able Koala</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}