import React, { PureComponent } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import { format } from 'date-fns';
import Error from 'next/error';
import Link from 'next/link';
import Highlight from 'react-highlight';
import client from '../../client';
import CommaJoiner from '../../components/CommaJoiner';
import '../../css/styles.css';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function urlFor(source) {
	return imageUrlBuilder(client).image(source);
}

const serializers = {
	types: {
		codeInput: props => (
			<Highlight language={props.node.language}>
				<pre>
					<code>{props.node.code}</code>
				</pre>
			</Highlight>
		)
	}
};

export default class BlogPost extends PureComponent {
	static getInitialProps = async ({ res, query: { slug } }) => {
		const post = slug
			? await client.fetch(
					`*[_type == "post" && slug.current == $slug][0]{
          title,
          "name": author->name,
          "categories": categories[]->title,
          "authorImage": author->image,
          body,
          _updatedAt
        }`,
					{ slug }
			  )
			: {};
		return { post };
	};

	render() {
		const {
			title = 'No title',
			name = 'No name',
			categories = [],
			authorImage = {},
			body = [],
			_updatedAt = ''
		} = this.props.post;

		if (!_updatedAt) {
			return <Error statusCode={404} />;
		}

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
					<link
						rel='stylesheet'
						href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/github.min.css'
					/>
					>
					<meta name='viewport' content='width=device-width, initial-scale=1' />
					<meta charSet='utf-8' />
				</Head>
				<Header />
				<main>
					<h1>{title}</h1>
					By {name}. Updated {format(_updatedAt, 'DD. MMMM, YYYY')}.{' '}
					{categories.length > 0 && (
						<span>
							Posted in <CommaJoiner list={categories} />
						</span>
					)}
					<div>
						<img
							src={urlFor(authorImage)
								.width(50)
								.url()}
						/>
					</div>
					<BlockContent
						blocks={body}
						imageOptions={{ w: 320, h: 240, fit: 'max' }}
						projectId={client.clientConfig.projectId}
						dataset={client.clientConfig.dataset}
						serializers={serializers}
					/>
					<Link href='/blog'>
						<a>Back to blog list</a>
					</Link>
				</main>
				<Footer />
			</div>
		);
	}
}
