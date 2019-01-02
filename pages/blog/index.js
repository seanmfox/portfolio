import React, { PureComponent } from 'react';
import { format } from 'date-fns';
import Link from 'next/link';
import client from '../../client';
import "../../css/styles.css";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default class Index extends PureComponent {
	static getInitialProps = async () => ({
		posts: await client.fetch(`*[_type == "post"]`)
	});

	render() {
		const { posts = [] } = this.props;
		return (
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
						href='https://fonts.googleapis.com/css?family=Cinzel+Decorative:400,700'
						rel='stylesheet'
					/>
					<link
						href='https://fonts.googleapis.com/css?family=Julius+Sans+One'
						rel='stylesheet'
					/>
					<link
						rel='stylesheet'
						href='https://use.fontawesome.com/releases/v5.5.0/css/all.css'
						integrity='sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU'
						crossOrigin='anonymous'
					/>
					<meta name='viewport' content='width=device-width, initial-scale=1' />
					<meta charSet='utf-8' />
				</Head>
				<Header />
				<main>
					<h1>Blog archive</h1>
					{posts.map(
						({ _id, title = '', slug = '', _updatedAt = '' }) =>
							slug && (
								<li key={_id}>
									<Link
										as={`/blog/${slug.current}`}
										href={`/blog/post?slug=${slug.current}`}
									>
										<a>{title}</a>
									</Link>{' '}
									({format(_updatedAt, 'DD. MMMM, YYYY')})
								</li>
							)
					)}
				</main>
				<Footer />
			</div>
		);
	}
}
