class WPopperExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    }
  }

  render() {
    const open = Boolean(this.state.anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
      <>
      <div>
        <WFace.WButton aria-describedby={id} variant="contained" onClick={e => this.setState({ anchorEl: this.state.anchorEl ? null : e.currentTarget })}>
          Toggle Popper
        </WFace.WButton>
        <WFace.WPopper id={id} open={open} anchorEl={this.state.anchorEl} style={{zIndex: 100}}>
          <WFace.WPaper elevation={1}>
            <WFace.WTypography style={{ padding: 10 }}>The content of the Popper.</WFace.WTypography>
          </WFace.WPaper>
        </WFace.WPopper>
      </div>
      </>
    );
  }
}