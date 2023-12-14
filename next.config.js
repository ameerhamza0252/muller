/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        STORYBLOKTOKEN:"5CfG9JjJmhJDh4uvQIDN2wtt",
    },
    images:{
        domains:['a.storyblok.com'],
        
    },
    i18n:{
        locales: ['en', 'de'],
      defaultLocale: 'en',
    }
}

module.exports = nextConfig
