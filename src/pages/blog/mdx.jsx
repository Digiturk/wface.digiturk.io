import React from 'react'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/jsx/jsx'
import mdxComponents from '../../components/mdx-components';

import HowToVersionUpgrade from './pages/how-to-version-upgrade.mdx';
import ProductionBuild from './pages/production-build.mdx';
import GeneralVariableUsage from './pages/general-variable-usage.mdx';
import NewScreenDefinition from './pages/new-screen-definition.mdx';
import OpenCloseScreen from './pages/open-close-screen.mdx';
import FormDataPersistency from './pages/form-data-persistency.mdx';
import ScreenModeUsage from './pages/screen-mode-usage.mdx';
import LocalstorageUsage from './pages/localstorage-usage.mdx';
import IAppHooks from './pages/i-app-hooks.mdx';
import SearchProvider from './pages/search-provider.mdx';
import CefsharpContainerSetup from './pages/cefsharp-container-setup.mdx';



const Mdx = {
  HowToVersionUpgrade: () => <HowToVersionUpgrade components={mdxComponents}/>,
  ProductionBuild: () => <ProductionBuild components={mdxComponents}/>,
  GeneralVariableUsage: () => <GeneralVariableUsage components={mdxComponents}/>,
  NewScreenDefinition: () => <NewScreenDefinition components={mdxComponents}/>,
  OpenCloseScreen: () => <OpenCloseScreen components={mdxComponents}/>,
  FormDataPersistency: () => <FormDataPersistency components={mdxComponents}/>,
  ScreenModeUsage: () => <ScreenModeUsage components={mdxComponents}/>,
  LocalstorageUsage: () => <LocalstorageUsage components={mdxComponents}/>,  
  IAppHooks: () => <IAppHooks components={mdxComponents}/>,  
  SearchProvider: () => <SearchProvider components={mdxComponents}/>,    
  CefsharpContainerSetup: () => <CefsharpContainerSetup components={mdxComponents}/>,      
}

export default Mdx
