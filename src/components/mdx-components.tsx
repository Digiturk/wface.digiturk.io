import React from 'react'
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/jsx/jsx'
import * as WFace from '@wface/components'
import { Link } from 'react-router-dom';
import { Icon, IconButton, Paper, List, ListItem, ListItemIcon, ListItemText, Typography, Tooltip, withTheme } from '@material-ui/core';
import { LiveProvider, LiveEditor } from 'react-live';

const mdxComponents = {
  h1: (props: any) => <div>
    <WFace.WTypography
      variant="h4" {...props} />
    <div style={{
      width: 50,
      borderBottom: '4px solid #3f51b5',
      borderRadius: 4
    }}></div>
    <br />
    <br />
  </div>,
  h2: (props: any) => <div><WFace.WTypography variant="h5" {...props} /><br /></div>,
  p: (props: any) => <div><WFace.WTypography variant="subtitle1" {...props} style={{ color: '#65819D' }} /><br /></div>,
  ul: (props: any) => <WFace.WList>{props.children}</WFace.WList>,
  li: (props: any) => (
    <WFace.WListItem>
      <WFace.WListItemIcon style={{ marginRight: 0, alignSelf: 'flex-start' }}><WFace.WIcon style={{ color: '#65819D' }} iconSize="small">keyboard_arrow_right</WFace.WIcon></WFace.WListItemIcon>
      <WFace.WListItemText><WFace.WTypography variant="subtitle1" {...props} style={{ color: '#65819D' }} /></WFace.WListItemText>
    </WFace.WListItem>
  ),
  a: (props: any) => {
    if (props.href.startsWith("http")) {
      return (
        <a href={props.href}
          style={{
            color: '#3f51b5',
            textDecoration: 'none',
            fontWeight: 500
          }}>
          {props.children}
        </a>
      );
    }
    else {
      return (
        <Link to={props.href}
          style={{
            color: '#3f51b5',
            textDecoration: 'none',
            fontWeight: 500
          }}>
          {props.children}
        </Link>
      );
    }
  },
  blockquote: (props: any) => <div>
    <WFace.WPaper elevation={0}
      style={{
        padding: 15,
        color: 'rgb(132, 146, 166)',
        backgroundColor: 'rgb(239, 242, 247)',
        borderLeft: '4px solid #3f51b5',
        margin: '0px 3px'
      }}>
      {props.children.props.children}
    </WFace.WPaper>
    <br />
  </div>,
  table: (props: any) => <table
    style={{
      borderCollapse: 'collapse',
      border: '1px solid',
      borderColor: '#DEE5EE',
      borderRadius: 3
    }}>
    {props.children}
  </table>,
  thead: (props: any) => <thead
    style={{
      backgroundColor: '#F5F7FF',
      borderCollapse: 'collapse',
      border: '1px solid',
      borderColor: '#DEE5EE'
    }}>
    {props.children}
  </thead>,
  th: (props: any) => <th style={{ padding: '15px 30px 15px 30px' }}><WFace.WTypography variant="subtitle1" style={{ color: '#65819D' }}>{props.children}</WFace.WTypography></th>,
  tbody: (props: any) => <tbody >{props.children}</tbody>,
  tr: (props: any) => <tr style={{ padding: 20, borderTop: '1px solid #DEE5EE' }}>{props.children}</tr>,
  td: (props: any) => <td style={{ padding: 10, textAlign: 'left' }} ><WFace.WTypography variant="subtitle1" style={{ color: '#91A0B1' }}>{props.children}</WFace.WTypography></td>,
  inlineCode: (props: any) => <code
    style={{
      backgroundColor: 'rgb(239, 242, 247)',
      padding: '3px 5px',
      color: 'indianred',
      borderRadius: 3
    }}>
    {props.children}
  </code>,
  code: (props:any) => {
    if (props.className === "language-console") {
      return (
        <div>
          <Paper elevation={0}
            style={{
              padding: 10,
              color: '#DDD',
              backgroundColor: '#2b3e50',
              fontFamily: 'Inconsolata, Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
              fontSize: 16,
              whiteSpace: 'initial'
            }}>
            <div style={{ display: 'flex' }}>
              <div style={{ flex: 1 }}>
                {props.children}
              </div>
              <Tooltip title="Copy">
                <IconButton style={{ padding: 0 }} disableRipple onClick={() => navigator.clipboard.writeText(props.children)}>
                  <Icon style={{ color: '#FFFFFF99', fontSize: 16 }}>file_copy</Icon>
                </IconButton>
              </Tooltip>
            </div>
          </Paper>
          <br />
        </div>
      );
    }
    else {
      return (
        <LiveProvider code={props.children.trim()} disabled language={props.className.substr("language-".length)}>
          <LiveEditor
            code={props.children.trim()}
            style={{
              backgroundColor: '#2b3e50',
              borderRadius: 5,
              caretColor: 'white'
            }}
          />
        </LiveProvider>
      );
    }
  }
}

export default mdxComponents;
