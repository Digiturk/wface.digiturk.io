class WMenuExample extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick (event) {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose () {
    this.setState({ anchorEl: null });
  };

  render() {
    return (
      <div>
        <WFace.WButton onClick={this.handleClick}>Menüyü Aç/Kapa</WFace.WButton>
        <WFace.WMenu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleClose}>
          <WFace.WMenuItem onClick={this.handleClose}>Profile</WFace.WMenuItem>
          <WFace.WMenuItem onClick={this.handleClose}>My account</WFace.WMenuItem>
          <WFace.WMenuItem onClick={this.handleClose}>Logout</WFace.WMenuItem>
        </WFace.WMenu>
      </div>
    );
  }
}