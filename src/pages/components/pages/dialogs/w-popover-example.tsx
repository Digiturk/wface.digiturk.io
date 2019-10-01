class WPopoverExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    }
  }

  render() {
    const open = Boolean(this.state.anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
      <div>
        <WFace.WButton aria-describedby={id} variant="contained" onClick={e => this.setState({anchorEl: e.currentTarget})}>
          Open Popover
        </WFace.WButton>
        <WFace.WPopover
          id={id}
          open={open}
          anchorEl={this.state.anchorEl}
          onClose={() => this.setState({anchorEl: null})}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <WFace.WTypography style={{padding: 10}}>The content of the Popover.</WFace.WTypography>
        </WFace.WPopover>
      </div>
    );
  }
}