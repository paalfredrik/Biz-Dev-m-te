export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5cdd229bdd0e5f5ee0ce2bee',
                  title: 'Sanity Studio',
                  name: 'Biz-Dev-m-te-studio',
                  apiId: '292bbc85-c3dd-4774-a314-66ef79030d0a'
                },
                {
                  buildHookId: '5cdd229c0bafe4d2e5fd1226',
                  title: 'Blog Website',
                  name: 'Biz-Dev-m-te',
                  apiId: '3dbb349f-1ba3-460a-856a-b3a6b8627997'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/paalfredrik/Biz-Dev-m-te',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://Biz-Dev-m-te.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
