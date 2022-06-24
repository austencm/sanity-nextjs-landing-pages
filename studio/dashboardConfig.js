export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62b6199488f8ff06860491e5',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-4xr6r8im',
                  apiId: 'c62d7895-0990-4b74-90e5-71f63ea08d5a'
                },
                {
                  buildHookId: '62b619956235f5062bd3feca',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-3e19qo5d',
                  apiId: '743538fd-2175-4d2f-9724-2c4d177845d4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/austencm/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-3e19qo5d.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
