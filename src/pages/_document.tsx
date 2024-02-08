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
                    <meta name="keywords" content="STA,SIL,Disabled, Short term accomodation, Disability Holiday, Able koala, Koala care, Care service 24/7, 24/7 high level care, Personal care, Community service, Wheelchair accessible car, Transport, Electric Wheelchair transport, Domestic assistance, Yard maintenance, Support coordinator, Plan Manage, Lovely cares, Care with love, High qualified support worker, Short term accomodation disabled holiday, Sta holiday, Sta disabled holiday, Gold Coast disability/disabled holiday, Sydney disability /disable holiday, Able Koala, Able koala, able koala, able koala, ablekoala" />
                    <meta name="robots" content="index, follow" />
                    <meta name="googlebot" content="index, follow" />
                    <meta name="geo.region" content="Au" />
                    <meta name="author" content="Able &amp; Koala" />
                    <meta name="generator" content="ABLE KOALA" />
                    <meta name="webmaster" content="ABLE KOALA" />
                    <meta name="copyright" content="ABLE KOALA" />
                    <link rel="icon" href="/logos/ab_logo.png" sizes="144x144" type="image/x-icon"/>
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