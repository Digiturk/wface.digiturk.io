class WClickAwayListenerExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  render() {

    const fake = <div style={{backgroundColor: '#dedede', height: 4, margin: 8}} />;

    return (
      <div style={{ position: 'relative', margin: 100}}>
      <WFace.WClickAwayListener onClickAway={() => this.setState({open: false})}>
        <div>
          <WFace.WButton onClick={() => this.setState({open: true})}>Open menu</WFace.WButton>
          {this.state.open ? (
            <WFace.WPaper style={{position: 'absolute', top: 36, right: 0, left: 0, width: 90}} elevation={1}> 
              {fake}
              {fake}
              {fake}
              {fake}
              {fake}
            </WFace.WPaper>
          ) : null}
        </div>
      </WFace.WClickAwayListener>
    </div>
    );
  }
}