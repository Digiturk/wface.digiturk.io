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
import V0140Component from './pages/v0.14.0.mdx';
import V0150Component from './pages/v0.15.0.mdx';
import V0160Component from './pages/v0.16.0.mdx';

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
}

export default Mdx
