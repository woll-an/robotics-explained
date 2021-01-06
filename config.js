const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'http://localhost:8000/',
    gaTrackingId: null,
    trailingSlash: false,
  },
  sidebar: {
    forcedNavOrder: [
      '/robotposes', // add trailing slash if enabled above
      '/transformation',
      '/control',
    ],
    collapsedNav: [
      '/control', // add trailing slash if enabled above
    ],
    links: [{ text: 'Github', link: '' }],
    frontline: false,
    ignoreIndex: true,
    title: '',
  },
  siteMetadata: {
    title: 'Robotics Explained | Robot Course',
    description: 'A course about robotics',
    ogImage: null,
    docsLocation: '',
    favicon: '',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
