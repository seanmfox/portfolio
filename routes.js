const routes = require('next-routes');

module.exports = routes()
  .add('index', '/', 'index')
  .add('about')
  .add('Blog', '/blog')
  .add('BlogPost', '/blog/:slug', 'Blog/Post');