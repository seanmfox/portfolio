import React, { PureComponent } from 'react';
import { format } from 'date-fns';
import Link from 'next/link';
import client from '../../client';
import Layout from '../../components/Layout';
import imageUrlBuilder from '@sanity/image-url';

function urlFor(source) {
	return imageUrlBuilder(client).image(source);
}

export default class Index extends PureComponent {
	static getInitialProps = async () => ({
		posts: await client.fetch(`*[_type == "post"] | order(publishedAt desc)`)
	});

	render() {
		const { posts = [] } = this.props;
		return (
			<Layout>
				<main className='postlist-container'>
					{posts.map(
						({
							_id,
							title = '',
							slug = '',
							publishedAt = '',
							mainImage,
							postSummary = ''
						}) =>
							slug && (
								<li className='post-list' key={_id}>
									<img
										className='post-preview-image'
										src={urlFor(mainImage).url()}
									/>
									<Link prefetch
										as={`/blog/${slug.current}`}
										href={`/blog/post?slug=${slug.current}`}
									>
										<a className='post-title-link'>{title}</a>
									</Link>{' '}
									<div className='post-date'>
										{format(publishedAt, 'MMMM Do YYYY')}
									</div>
									<p className='post-summary'>{postSummary}</p>
								</li>
							)
					)}
				</main>
			</Layout>
		);
	}
}
