import * as React from 'react'
import Mdx from './mdx'
import PageLayout from '../../components/page-layout';

export default class VersionsPage extends React.Component<any, any> {
  public render() {
    return (
      <PageLayout menuTree={menuTree} />
    );
  }
}

const menuTree = [
  {
    id: 'v0.19.0',
    text: 'v0.19.0',
    path: '0-19-0',
    mdx: Mdx.V0190Component
  },
  {
    id: 'v0.18.0',
    text: 'v0.18.0',
    path: '0-18-0',
    mdx: Mdx.V0180Component
  },
  {
    id: 'v0.17.0',
    text: 'v0.17.0',
    path: '0-17-0',
    mdx: Mdx.V0170Component
  },  
  {
    id: 'old-versions',
    text: 'Eski Versiyonlar',
    subNodes: [
      {
        id: 'v0.16.0',
        text: 'v0.16.0',
        path: '0-16-0',
        mdx: Mdx.V0160Component
      },
      {
        id: 'v0.15.0',
        text: 'v0.15.0',
        path: '0-15-0',
        mdx: Mdx.V0150Component
      },
      {
        id: 'v0.14.0',
        text: 'v0.14.0',
        path: '0-14-0',
        mdx: Mdx.V0140Component
      },
      {
        id: 'v0.13.0',
        text: 'v0.13.0',
        path: '0-13-0',
        mdx: Mdx.V0130Component
      },
      {
        id: 'v0.12.0',
        text: 'v0.12.0',
        path: '0-12-0',
        mdx: Mdx.V0120Component
      },
      {
        id: 'v0.11.0',
        text: 'v0.11.0',
        path: '0-11-0',
        mdx: Mdx.V0110Component
      },
      {
        id: 'v0.10.0',
        text: 'v0.10.0',
        path: '0-10-0',
        mdx: Mdx.V0100Component
      },
      {
        id: 'v0.9.0',
        text: 'v0.9.0',
        path: '0-9-0',
        mdx: Mdx.V090Component
      },
      {
        id: 'v0.8.0',
        text: 'v0.8.0',
        path: '0-8-0',
        mdx: Mdx.V080Component
      },
      {
        id: 'v0.7.0',
        text: 'v0.7.0',
        path: '0-7-0',
        mdx: Mdx.V070Component
      },
    ]
  }
]