import Link from 'next/link';

const Header = () => (
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
							<Link href='/'>
								<a className='right-header-text'>Home</a>
							</Link>
						</li>
						<li>
							<Link href='/about'>
								<a className='right-header-text'>About</a>
							</Link>
						</li>
						{/* <li>
              <Link href="/projects">
                <a className="right-header-text">Projects</a>
              </Link>
            </li> */}
						<li>
							<Link href='/blog'>
								<a className='right-header-text'>Blog</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		<hr />
	</header>
);

export default Header;
