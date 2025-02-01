// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config



import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Reports',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/0_medium.png',

  // Set the production url of your site here
  url: 'https://reports.kunull.net/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Kunull', // Usually your GitHub org/user name.
  projectName: 'Reports', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          breadcrumbs: false,
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          sidebarCollapsed: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Writeups',
        logo: {
          alt: 'My Site Logo',
          src: 'img/0_medium.png',
        },

        items: [
        //   {
        //     type: 'dropdown',
        //     label: 'CNA accounts',
        //     position: 'right',
        //     items: [
        //       {
        //         label: 'VulDB',
        //         href: 'https://vuldb.com/?user.61233',
        //       },
        //     ],
        //   },

          {
            type: 'dropdown',
            label: 'Other sites',
            position: 'right',
            items: [
              {
                label: 'writeups.kunull.net',
                href: 'https://writeups.kunull.net/',
              },
              {
                label: 'blog.kunull.net',
                href: 'https://blog.kunull.net/',
              },
              {
                label: 'kunull.net',
                href: 'https://kunull.net/',
              },
            ],
          },

          {
            type: 'dropdown',
            label: 'Socials',
            position: 'right',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/kunull',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/kunull/',
              },  
            ],
          },

          {
            type: 'dropdown',
            label: 'Contact',
            position: 'right',
            items: [
              {
                label: 'Email',
                href: 'mailto:contact@kunull.net',
              },
              {
                label: 'Matrix',
                href: 'https://matrix.to/#/@kunull:matrix.org',
              },
            ],
          }, 
        ],
      },
      
      // footer: {
      //   style: 'light',
      //   links: [
      //     {
      //       title: 'Other collections',
      //       items: [
      //         {
      //           label: 'Blog',
      //           href: 'https://kunalwalavalkarblog.vercel.app',
      //         },
      //       ],
      //     },
          
      //     {
      //       title: 'Socials',
      //       items: [
      //         {
      //           label: 'Main site',
      //           href: 'https://kunalwalavalkar.vercel.app',
      //         },
      //         {
      //           label: 'Github',
      //           href: 'https://github.com/KuNull',
      //         },
      //         {
      //           href: 'https://www.linkedin.com/in/kunalwalavalkar/',
      //           label: 'LinkedIn',
      //         },
      //       ],
      //     },

      //     {
      //       title: 'CTF Accounts',
      //       items: [
      //         {
      //           label: 'TryHackMe',
      //           href: 'https://tryhackme.com/p/KuNull',
      //         },
      //         {
      //           label: 'Hack The Box',
      //           href: 'https://app.hackthebox.com/profile/1158503',
      //         },
      //       ],
      //     },
          
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} Kunal Walavalkar.`,
      // },
      prism: {
         theme: prismThemes.oneDark,
      },
      algolia: {
          // The application ID provided by Algolia
        appId: 'U8PJZMJE14',
          // Public API key: it is safe to commit it
        apiKey: '6172eeb915a8ca9a50425c0c229bfe78',
        indexName: 'reports-kunull',
        // contextualSearch: false,
        typoTolerance: false,
        maxResultsPerGroup: 9999,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
    }),
  
};

export default config;
