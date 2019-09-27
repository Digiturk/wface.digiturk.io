import React from 'react'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/jsx/jsx'

import WFace from './pages/wface.mdx'
import AdditionalTools from './pages/additional-tools.mdx'
import Requirements from './pages/requirements.mdx'
import Setup from './pages/setup.mdx'
import SupportedPlatforms from './pages/supported-platforms.mdx'
import Usage from './pages/usage.mdx'
import Modules from './pages/modules.mdx'

const Mdx = {
  WFace: () => <WFace/>,
  AdditionalTools: () => <AdditionalTools/>,
  Architecture: () => <Architecture/>,
  Requirements: () => <Requirements/>,
  Setup: () => <Setup/>,
  SupportedPlatforms: () => <SupportedPlatforms/>,
  Usage: () => <Usage/>,
  Modules: () => <Modules/>,
}

export default Mdx
