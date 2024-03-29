/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `ayala`,
    description: `ayala vinyasa yoga / yin yogaのレッスン予約`,
    lang: "ja",
    siteUrl: `https://ayalavinyasa.com/`,
    locale: `ja_JP`,
    fbappid: `XXXXXXXXXXXXXXXXXXXXX`,
    home: `Home`,
    about: `About`,
    blog: `Blog`,
    schedule: `Schedule`,
    instagram: `Instagram`,
    lesson: `レッスンご予約`,
    homeUrl: `/`,
    aboutUrl: `/about`,
    blogUrl: `/blog`,
    scheduleUrl: `/schedule`,
    instagramUrl: `https://www.instagram.com/ayazonyoga`,
    lessonUrl: `/reservation`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ayala YOGA`,
        short_name: `ayala`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#477294`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: "Noto Sans JP",
            variable: true,
            weights: [100, 300, 400, 500, 700, 900],
          },
          {
            family: "Allura",
            variable: true,
            weights: "400",
          },
        ],
      },
    }
  ],
}
