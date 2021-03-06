import { withStyles } from '@material-ui/core';
import * as WFace from '@wface/components';
import * as React from 'react';
import { Redirect, Route, withRouter, Link, Switch } from 'react-router-dom';
import GetStartedPage from './pages/get-started';
import MainPage from './pages/main-page';
import ComponentsPage from './pages/components';
import CliPage from './pages/cli';
import TrainingPage from './pages/training';
import VersionsPage from './pages/versions';
import BlogPage from './pages/blog';
// @ts-ignore
import { Scrollbars } from 'react-custom-scrollbars';
import { AppContextActions } from './store';
import { connect } from 'react-redux';
import Text from './components/text';
// @ts-ignore
import { MDXProvider } from '@mdx-js/react';
import mdxComponents from './components/mdx-components';

class AppInner extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      userMenuAnchor: null
    }
  }

  renderMenuLink = (href: string, text: string | React.ReactElement<any>): React.ReactNode => (
    <Link to={"/" + href} style={{ textDecoration: 'none' }}>
      <WFace.WButton
        id={"menu-btn-" + href}
        className={this.props.classes.linkButton}
        style={{
          opacity: (href === "" ?
            this.props.location.pathname === "/"
            :
            this.props.location.pathname.startsWith("/" + href)) ? 1 : 0.5
        }}
        variant="text"
      >
        {text}
      </WFace.WButton>
    </Link>
  )

  changeLang = (lang: string) => {
    this.props.changeLang(lang);
    this.setState({ userMenuAnchor: null })
  }

  public render() {
    const { classes } = this.props;
    const lang = (this.props.appContext.lang || "tr").toUpperCase();


    return (
      <div className={classes.root}>
        <WFace.WAppBar id="app-bar" position="absolute" className={classes.appBar} elevation={0}>
          <WFace.WToolBar id="tool-bar">
            <WFace.WTypography variant="h5" color="inherit" noWrap className={classes.flex} style={{ marginLeft: 20, fontWeight: 500 }}>
              WFace
            </WFace.WTypography>

            {this.renderMenuLink("", <Text tr="Ana Sayfa" en="Home" />)}
            {this.renderMenuLink("get-started", <Text tr="Başlangıç" en="Get Started" />)}
            {this.renderMenuLink("components", <Text tr="Bileşenler" en="Components" />)}
            {this.renderMenuLink("cli", "WFace CLI")}
            {this.renderMenuLink("blog", "Blog")}
            {this.renderMenuLink("versions", <Text tr="Versiyonlar" en="Versions" />)}
            {this.renderMenuLink("training", <Text tr="Eğitim" en="Training" />)}
            <a href="https://github.com/Digiturk/wface" style={{ color: '#FFFFFFCC' }}>
              <WFace.WIcon style={{ fontSize: 25 }} iconSource="fontawesome" icon="fab fa-github" />
            </a>
            <div>
              <WFace.WButton
                id="btn-lang"
                aria-owns={Boolean(this.state.userMenuAnchor) ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={(event) => this.setState({ userMenuAnchor: event.currentTarget })}
                color="inherit"
              >
                {lang}
              </WFace.WButton>
              <WFace.WMenu
                id="menu-appbar"
                anchorEl={this.state.userMenuAnchor}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(this.state.userMenuAnchor)}
                onClose={() => this.setState({ userMenuAnchor: null })}
              >
                {["en", "tr"].map(lang => (
                  <WFace.WMenuItem id={lang} key={lang} dense onClick={() => this.changeLang(lang)} selected={this.props.appContext.lang === lang}>
                    <WFace.WListItemText primary={lang.toUpperCase()} />
                  </WFace.WMenuItem>
                ))}
              </WFace.WMenu>
            </div>
          </WFace.WToolBar>
        </WFace.WAppBar>

        <main className={classes.content}>
          <MDXProvider components={mdxComponents}>
            <Scrollbars style={{ width: '100%', height: '100%' }}>
              <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path="/get-started" component={GetStartedPage} />
                <Route path="/components" component={ComponentsPage} />
                <Route path="/cli" component={CliPage} />
                <Route path="/blog" component={BlogPage} />
                <Route path="/versions" component={VersionsPage} />
                <Route path="/training" component={TrainingPage} />
              </Switch>
            </Scrollbars>
          </MDXProvider>
        </main>
      </div>
    )
  }
}

const styles: any = (theme: any) => ({
  root: {
    flexGrow: 1,
    height: '%100',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  flex: {
    flex: 1,
  },
  linkButton: {
    textTransform: 'none',
    color: '#FFF',
  },
  content: {
    flexGrow: 1,
    backgroundColor: '#e8eaf5',
    padding: 0, // theme.spacing.unit * 3
    minWidth: 0, // So the Typography noWrap works
    marginTop: 64,
    marginBottom: 0,
    maxHeight: '100%',
    overflow: 'auto'
  }
});

// const App = withRouter(withStyles(styles)(AppInner) as any)

const mapStateToProps = (state: any) => ({
  appContext: state.appContext
});

const mapDispatchToProps = (dispatch: any) => ({
  changeLang: (lang: 'en' | 'tr', value: any) => dispatch(AppContextActions.changeLang(lang)),
});

const App = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AppInner))


export default withRouter(App as any);