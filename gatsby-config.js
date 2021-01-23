require("dotenv").config();
const config = require("./config");
const plugins = [
  'gatsby-plugin-sitemap',
  'gatsby-plugin-sharp',
  'gatsby-plugin-catch-links',
  {
    resolve: `gatsby-plugin-layout`,
    options: {
        component: require.resolve(`./src/templates/docs.js`)
    }
  },
  'gatsby-plugin-emotion',
  'gatsby-plugin-react-helmet',
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "docs",
      path: `${__dirname}/content/`
    }
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "docs",
      path: `${__dirname}/images/`
    }
  },
  {
    resolve: 'gatsby-plugin-mdx',
    options: {
      gatsbyRemarkPlugins: [
        {
          resolve: "gatsby-remark-images",
          options: {
            maxWidth: 1035,
          }
        },
        'gatsby-remark-copy-linked-files',
        'gatsby-remark-katex',
        'gatsby-remark-relative-images',
      ],
      extensions: [".mdx", ".md"]
    }
  },
  {
    resolve: `gatsby-plugin-gdpr-cookies`,
    options: {
      googleAnalytics: {
        trackingId: 'UA-187924281-1',
        cookieName: 'gatsby-gdpr-google-analytics', // default
        // Setting this parameter is optional
        anonymize: true
      },
      googleTagManager: {
        trackingId: '', // leave empty if you want to disable the tracker
        cookieName: 'gatsby-gdpr-google-tagmanager', // default
        dataLayerName: 'dataLayer', // default
      },
      facebookPixel: {
        pixelId: '', // leave empty if you want to disable the tracker
        cookieName: 'gatsby-gdpr-facebook-pixel', // default
      },
      // Defines the environments where the tracking should be available  - default is ["production"]
      environments: ['production', 'development']
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      icon: `images/favicon.png`,
      name: `Robotics Explained`,
      short_name: `RobExpl`,
      start_url: `/`,
      background_color: `#f7f0eb`,
      theme_color: `#a2466c`,
      display: `standalone`,
    }
  },
];

module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: 'Robotics Explained | Robot Course',
    description: 'A course about robotics',
    docsLocation: config.siteMetadata.docsLocation,
    ogImage: config.siteMetadata.ogImage,
    favicon: 'images/favicon.png',
    siteUrl: 'https://robotics-explained.com',
  },
  plugins: plugins
};
