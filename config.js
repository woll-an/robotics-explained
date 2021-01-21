const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://robotics-explained.com/',
    gaTrackingId: null,
    trailingSlash: false,
  },
  sidebar: {
    forcedNavOrder: [
      '/robotposes', // add trailing slash if enabled above
      '/transformation',
      '/forwardkinematics',
      '/impedancecontrol',
    ],
    // collapsedNav: [
    //   '/control', // add trailing slash if enabled above
    // ],
    links: [{ text: 'Github', link: 'https://github.com/woll-an/robotics-explained' }],
    frontline: true,
    ignoreIndex: true,
    title: '',
  },
  siteMetadata: {
    title: 'Robotics Explained | Robot Course',
    description: 'A course about robotics',
    ogImage: null,
    docsLocation: '',
    favicon: 'src/favicon.png',
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
          src: 'src/favicon.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
