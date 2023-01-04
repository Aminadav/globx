/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'react-easy-shared-state',
  tagline: 'A developer friendly state management for busy people. 90% less code to write in compare to Redux. 100% automatically auto-complete for your state.',
  url: 'https://react-easy-shared-state.js.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'aminadav', // Usually your GitHub org/user name.
  projectName: 'react-easy-shared-state', // Usually your repo name.
  themeConfig: {
    algolia: {
      apiKey: '859997df67660e4ebcaf6a940e2d2a46',
      indexName: 'react-easy-shared-state',

      // Optional: see doc section bellow
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
    navbar: {
      title: 'react-easy-shared-state',
      logo: {
        alt: 'react-easy-shared-state',
        src: 'img/favicon.ico',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/aminadav/react-easy-shared-state',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },            
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/react-easy-shared-state',
            },
            {
              label: 'GitHub Issues',
              href: 'https://github.com/aminadav/react-easy-shared-state/issues',
            },
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Reddit post',
            //   to: 'blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/aminadav/react-easy-shared-state',
            },
            {
              label: 'Reddit post',
              href: 'https://www.reddit.com/r/reactjs/comments/m27hqm/globux_a_global_state_manager_that_let_you_read/?sort=new',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Aminadav Glickshtein and the react-easy-shared-state documentation authors.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/aminadav/react-easy-shared-state/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/aminadav/react-easy-shared-state/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
