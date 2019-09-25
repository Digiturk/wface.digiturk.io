import React from 'react'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/jsx/jsx'
import mdxComponents from '../../components/mdx-components';

import V070Component from './pages/old-versions/v0.7.0.mdx';
import V080Component from './pages/old-versions/v0.8.0.mdx';
import V090Component from './pages/old-versions/v0.9.0.mdx';
import V0100Component from './pages/old-versions/v0.10.0.mdx';
import V0110Component from './pages/old-versions/v0.11.0.mdx';
import V0120Component from './pages/old-versions/v0.12.0.mdx';
import V0130Component from './pages/old-versions/v0.13.0.mdx';
import V0140Component from './pages/old-versions/v0.14.0.mdx';
import V0150Component from './pages/old-versions/v0.15.0.mdx';
import V0160Component from './pages/old-versions/v0.16.0.mdx';
import V0170Component from './pages/old-versions/v0.17.0.mdx';
import V0180Component from './pages/old-versions/v0.18.0.mdx';
import V0190Component from './pages/old-versions/v0.19.0.mdx';
import V0200Component from './pages/v0.20.0.mdx';
import V0210Component from './pages/v0.21.0.mdx';
import V0220Component from './pages/v0.22.0.mdx';

const Mdx = {
  V070Component: () => <V070Component components={mdxComponents}/>,
  V080Component: () => <V080Component components={mdxComponents}/>,
  V090Component: () => <V090Component components={mdxComponents}/>,
  V0100Component: () => <V0100Component components={mdxComponents}/>,
  V0110Component: () => <V0110Component components={mdxComponents}/>,
  V0120Component: () => <V0120Component components={mdxComponents}/>,
  V0130Component: () => <V0130Component components={mdxComponents}/>,
  V0140Component: () => <V0140Component components={mdxComponents}/>,
  V0150Component: () => <V0150Component components={mdxComponents}/>,
  V0160Component: () => <V0160Component components={mdxComponents}/>,
  V0170Component: () => <V0170Component components={mdxComponents}/>,
  V0180Component: () => <V0180Component components={mdxComponents}/>,
  V0190Component: () => <V0190Component components={mdxComponents}/>,
  V0200Component: () => <V0200Component components={mdxComponents}/>,
  V0210Component: () => <V0210Component components={mdxComponents}/>,
  V0220Component: () => <V0220Component components={mdxComponents}/>,
}

export default Mdx
