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
      '/inversekinematics',
      '/jacobian',
      '/singularity',
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
};

module.exports = config;
