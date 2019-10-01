class WSpeedDialExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      actions: [
        { icon: <WFace.WIcon>file_copy</WFace.WIcon>, name: 'Copy' },
        { icon: <WFace.WIcon>save</WFace.WIcon>, name: 'Save' },
        { icon: <WFace.WIcon>print</WFace.WIcon>, name: 'Print' },
        { icon: <WFace.WIcon>share</WFace.WIcon>, name: 'Share' },
        { icon: <WFace.WIcon>delete</WFace.WIcon>, name: 'Delete' },
      ]
    }
  }



  render() {
    return (
      <div style={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
        <div style={{ position: 'relative', marginTop: 12, height: 380 }}>
          <WFace.WSpeedDial
            ariaLabel="SpeedDial example"
            style={{position: 'absolute', bottom: 8, right: 8}}
            icon={<WFace.WSpeedDialIcon />}
            onClose={() => this.setState({ isOpen: false })}
            onOpen={() => this.setState({ isOpen: true })}
            open={this.state.isOpen}
            direction="up" // try left
          >
            {this.state.actions.map(action => (
              <WFace.WSpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={() => this.setState({ isOpen: false })}
              />
            ))}
          </WFace.WSpeedDial>
        </div>
      </div>
    );
  }
}