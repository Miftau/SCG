const NextI18Next = require('next-i18next').default
const path = require('path')

module.exports = new NextI18Next({
  defaultLocale: 'en',
  locales: ['en', 'tr', 'ar', 'fr', 'de', 'es'],
  localePath: typeof window === 'undefined' 
    ? path.resolve('./public/locales') 
    : '/locales'
})