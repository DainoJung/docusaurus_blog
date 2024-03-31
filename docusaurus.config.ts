import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: "Daino's Docs",
  tagline: '보고 듣고 배운것을 기록합니다.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://daino.studio',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Daino', // Usually your GitHub org/user name.
  projectName: "Daino's Docs", // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: '모든 포스트',
          blogSidebarCount: 'ALL',
          truncateMarker: /<!--*truncate*-->/,
          feedOptions: {
            type: 'all',
            createFeedItems: async (params) => {
              const {blogPosts, defaultCreateFeedItems, ...rest} = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 3),
                ...rest,
              });
            }
          }
          // editUrl: 'https://github.com/mitchell-up',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        /*
        구글 애널리틱스 설정
        gtag: {
          trackingID: 'G-QTCKXBPZ9B',
          anonymizeIP: true,
        },
        */
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/dain-social-card.png',
    navbar: {
      title: "Daino's Docs",
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'flutter',
          position: 'left',
          label: 'Flutter',
        },
        {
          type: 'docSidebar',
          sidebarId: 'python', 
          position: 'left',
          label: 'Python', 
        },
        {
          type: 'docSidebar',
          sidebarId: 'ai', 
          label: 'AI', 
          position: 'left'
        },
        {
          type: 'docSidebar',
          sidebarId: 'data', 
          label: 'Data', 
          position: 'left'
        },
        {
          type: 'docSidebar',
          sidebarId: 'etc', 
          label: 'etc', 
          position: 'left'
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://daino.tistory.com/',
          label: 'Blog',
          position: 'left',
        },
        {
          href: 'https://github.com/DainoJung',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Tutorial',
        //       to: '/docs/intro',
        //     },
        //   ],
        // },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: '/blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/docusaurus',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Daino. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
