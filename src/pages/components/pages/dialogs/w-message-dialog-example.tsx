class WBasicDialogExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  render() {
    return (
      <div>
        <WFace.WButton onClick={() => this.setState({isOpen: true})}>Dialogu Aç</WFace.WButton>
        <WFace.WMessageDialog 
          title="Başlık"
          open={this.state.isOpen}
          buttons="YesNo"
          onButtonClick={(event, button) => { 
            alert(button + " tıklandı");
            this.setState({isOpen: false});
          }}
          text="WMessageDialog içeriği"
        />
      </div>
    );
  }
}