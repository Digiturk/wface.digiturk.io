import React, { Component } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Tooltip, Collapse, IconButton, Icon, Paper, Typography } from '@material-ui/core';
import { WTheme } from '@wface/components';
import { withStyles, createStyles } from '@material-ui/styles';
import * as WFace from '@wface/components';

export interface LiveCodeProps {
  classes?: any;
  expanded?: boolean;
  code: string;
  codeBlockOpen?: boolean;
  title: string;
  scope?: any;
}

class LiveCodeInner extends Component<LiveCodeProps, any> {
  static defaultProps: LiveCodeProps = {
    expanded: true,
    code: '',
    codeBlockOpen: true,
    title: '',
  }

  constructor(props: LiveCodeProps) {
    super(props);

    this.state = {
      expanded: this.props.expanded,
      code: this.props.code,
      codeBlockOpen: this.props.codeBlockOpen
    }
  }

  render() {
    return (
      <LiveProvider code={this.state.code} scope={{ WFace, ...this.props.scope }}>
        <Paper className={this.props.classes.root} elevation={0}>
          <div className={this.props.classes.topBar}>
            <div style={{ flex: 1, alignSelf: 'center', paddingLeft: 10 }}>
              <Typography variant="h6" className={this.props.classes.topBarTitle}>
                {this.props.title}
              </Typography>
            </div>
            <div className={this.props.classes.topBarActions}>
              <Tooltip title={this.state.codeBlockOpen ? "Hide the source code" : "Show the source code"}>
                <IconButton
                  onClick={() => this.setState((prev: any) => ({ codeBlockOpen: !prev.codeBlockOpen }))}
                >
                  <Icon>code</Icon>
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy the source code">
                <IconButton onClick={() => navigator.clipboard.writeText(this.state.code)}>
                  <Icon>file_copy</Icon>
                </IconButton>
              </Tooltip>
            </div>
          </div>
            <Collapse in={this.state.codeBlockOpen} timeout="auto">
              <div className={this.props.classes.codeBlock}>
                <LiveEditor className={this.props.classes.code} onChange={code => this.setState({ code })} />
                <LiveError className={this.props.classes.errorBlock} />
              </div>
            </Collapse>
            <div className={this.props.classes.preview}>
              <LivePreview className={this.props.classes.livePreview} />
            </div>
        </Paper>
      </LiveProvider>
    );
  }
}

const styles = (theme: WTheme) => createStyles({
  root: {
    marginTop: 10,
    display: 'grid',
    border: '1px solid rgb(222, 229, 238)',
    borderRadius: 0
  },
  topBar: {
    display: 'flex',
    padding: 8,
    borderBottom: '1px solid rgb(222, 229, 238)',
    backgroundColor: 'rgb(245, 247, 255)'
  },
  topBarTitle: {
    color: '#65819D',
    display: 'inline-block',
  },
  topBarActions: {
  },
  description: {
    color: '#65819D',
    padding: 5
  },
  codeBlock: {    
  },
  code: {    
    backgroundColor: '#2b3e50',
    caretColor: 'white'
  },
  errorBlock: {
    margin:0,    
    color: '#e53935',
    backgroundColor: '#ffcdd2',
    padding: 10
  },
  preview: {
    marginTop: 5,
    borderRadius: 5,
    padding: 5,
    display: 'grid'
  },
  livePreview: {
    maxWidth: '100%',
    overflow: 'auto'
  }
});


const LiveCode = withStyles(styles, { withTheme: true })(LiveCodeInner);
export default LiveCode;