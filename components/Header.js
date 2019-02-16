import Link from 'next/link';
import React from 'react';
import { withRouter } from 'next/router';

const Header = props => (
	<header>
		<nav>
			<div className='left-header'>
				<img
					src='../static/img/sf_avatar.png'
					alt='My Avatar'
					className='header-image'
				/>
				<div className='left-header-text'>
					<h1>Sean Fox</h1>
					<h4>Web Developer</h4>
				</div>
			</div>
			<div className='right-header'>
				<div className='menu-toggle'>
					<input type='checkbox' />
					<div className='hamburger'>
						<i />
						<i />
						<i />
					</div>
					<ul className='nav-links'>
						<li>
							<Link prefetch href='/'>
								<a
									className={`right-header-text ${
										props.router.asPath === '/' ? 'current-route' : null
									}`}
								>
									Home
								</a>
							</Link>
						</li>
						<li>
							<Link prefetch href='/about'>
								<a
									className={`right-header-text ${
										props.router.asPath === '/about' ? 'current-route' : null
									}`}
								>
									About
								</a>
							</Link>
						</li>
						<li>
              <Link prefetch href="/projects">
                <a className={`right-header-text ${props.router.asPath === '/projects' ? 'current-route': null}`}>Projects</a>
              </Link>
            </li>
						<li>
							<Link prefetch href='/blog'>
								<a
									className={`right-header-text ${
										/\/blog/.test(props.router.asPath) ? 'current-route' : null
									}`}
								>
									Blog
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		<hr />
	</header>
);

export default withRouter(Header);

// Header;
