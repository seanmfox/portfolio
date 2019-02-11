import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/styles.css';

export default ({ children }) => (
	<div id='app'>
		<Head>
			<script
				async
				src='https://www.googletagmanager.com/gtag/js?id=UA-129696464-1'
			/>
			<script
				dangerouslySetInnerHTML={{
					__html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', 'UA-129696464-1');`
				}}
			/>
			<title>Sean Fox - Web Developer</title>
			<link
				rel='stylesheet'
				href='https://use.fontawesome.com/releases/v5.5.0/css/all.css'
				integrity='sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU'
				crossOrigin='anonymous'
			/>
			<link
				rel='stylesheet'
				href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/github.min.css'
			/>
			<link
				href='https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz|Thasadith|Open+Sans|Roboto|Julius+Sans+One|Cinzel+Decorative:400,700'
				rel='stylesheet'
			/>
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<meta charSet='utf-8' />
		</Head>
		<Header />
		{children}
		<Footer />
	</div>
);
