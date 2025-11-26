import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '495'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '23a'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '7ff'),
            routes: [
              {
                path: '/docs/category/swarm-publications',
                component: ComponentCreator('/docs/category/swarm-publications', '5e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Swarm_pub/icra',
                component: ComponentCreator('/docs/Swarm_pub/icra', '525'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Swarm_pub/tase',
                component: ComponentCreator('/docs/Swarm_pub/tase', 'a41'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'fd5'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
