module.exports = {
  host: process.env.NODE_HOST || 'localhost', // Define your host from 'package.json'
  port: process.env.PORT,
  app: {
    htmlAttributes: { lang: 'en' },
    title: 'React Webpack Boilerplate',
    titleTemplate: 'Site - %s',
    meta: [
      {
        name: 'description',
        content: 'React webpack Boilerplate'
      }
    ]
  }
};
