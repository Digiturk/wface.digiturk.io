import React from 'react'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/jsx/jsx'

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
  HowToVersionUpgrade: () => <HowToVersionUpgrade/>,
  ProductionBuild: () => <ProductionBuild/>,
  GeneralVariableUsage: () => <GeneralVariableUsage/>,
  NewScreenDefinition: () => <NewScreenDefinition/>,
  OpenCloseScreen: () => <OpenCloseScreen/>,
  FormDataPersistency: () => <FormDataPersistency/>,
  ScreenModeUsage: () => <ScreenModeUsage/>,
  LocalstorageUsage: () => <LocalstorageUsage/>,  
  IAppHooks: () => <IAppHooks/>,  
  SearchProvider: () => <SearchProvider/>,    
  CefsharpContainerSetup: () => <CefsharpContainerSetup/>,      
}

export default Mdx
