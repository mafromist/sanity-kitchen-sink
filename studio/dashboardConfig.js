export default {
  widgets: [
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
                  buildHookId: '607b236721dae3a0abf5d9dd',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-vsetndkn',
                  apiId: '08f412d7-7a18-4d7c-ad03-14b078cf7d3e'
                },
                {
                  buildHookId: '607b23679d47469efaa22412',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-buqdb2ng',
                  apiId: 'ed38d3fd-b380-4c48-b3b7-ae0415f5c083'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mafromist/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-buqdb2ng.netlify.app', category: 'apps'}
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
