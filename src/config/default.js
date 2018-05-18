module.exports = {
  host: process.env.NODE_HOST || 'localhost', // Define your host from 'package.json'
  port: process.env.PORT,
  app: {
    htmlAttributes: { lang: 'en' },
    title: 'TP Caravan - Dérick Paradis',
    titleTemplate: 'TP Caravan - %s',
    meta: [
      {
        name: 'description',
        content: 'Caravan.coop TP by Dérick Paradis'
      }
    ]
  }
};
