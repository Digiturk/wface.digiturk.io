import React from 'react'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/jsx/jsx'

import CommandList from './pages/command-list.mdx'
import CreateCommand from './pages/create.mdx'
import VersionCommand from './pages/version.mdx'

const Mdx = {
  CommandList: () => <CommandList/>,
  CreateCommand: () => <CreateCommand/>,
  VersionCommand: () => <VersionCommand/>
}

export default Mdx
