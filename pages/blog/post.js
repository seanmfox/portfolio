import React, { PureComponent } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import { format } from 'date-fns';
import Error from 'next/error';
import Link from 'next/link';
import Highlight from 'react-highlight';
import client from '../../client';
import CommaJoiner from '../../components/CommaJoiner';
import Layout from '../../components/Layout';

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
					_updatedAt,
					publishedAt,
					mainImage
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
			publishedAt = '',
			_updatedAt = '',
			mainImage = {}
		} = this.props.post;

		if (!_updatedAt) {
			return <Error statusCode={404} />;
		}
		return (
			<Layout>
				<main className='post-container'>
					<img className='main-post-image' src={urlFor(mainImage).url()} />
					<h1 className='post-title'>{title}</h1>
					<p className='post-date'>
						Posted {format(publishedAt, 'MMM Do, YYYY')}
					</p>
					<BlockContent
						className='post-body'
						blocks={body}
						imageOptions={{ w: 320, h: 240, fit: 'max' }}
						projectId={client.clientConfig.projectId}
						dataset={client.clientConfig.dataset}
						serializers={serializers}
						renderContainerOnSingleChild={true}
					/>
				</main>
			</Layout>
		);
	}
}
