import React, { Component } from 'react'

export default class Post extends Component {

  state = {
    posts: []
  }

  async componentDidMount() {
    const blogPosts = await fetch('http://public-api.wordpress.com/rest/v1/sites/seanmfox.home.blog/posts').then(res => res.json())
    this.setState({ posts: blogPosts.posts })
  }
  

  render() {
    const { posts } = this.state
    console.log(posts)
    return (
      <div>
        {posts.map(p => p.content)}
      </div>
    )
  }
}
