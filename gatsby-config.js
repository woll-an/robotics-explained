require("dotenv").config();
const config = require("./config");
const plugins = [
  'gatsby-plugin-sitemap',
  'gatsby-plugin-sharp',
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
        {
          resolve: 'gatsby-remark-copy-linked-files'
        },
        {
          resolve: 'gatsby-remark-katex'
        },
        {
          resolve: 'gatsby-remark-relative-images'
        }
      ],
      extensions: [".mdx", ".md"]
    }
  },
  {
    resolve: `gatsby-plugin-gdpr-cookies`,
    options: {
      googleAnalytics: {
        trackingId: 'G-M8QHGMRE4H',
        // Setting this parameter is optional
        anonymize: true
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
