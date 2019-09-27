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
        <WFace.WBasicDialog 
          title="Başlık"
          open={this.state.isOpen}
          actions={[
            {text: 'Kapat', onClick: () => this.setState({isOpen: false})},
            {text: 'Tamam', onClick: () => alert('Tamam tıklandı')},
          ]}
        >
          <WFace.WTextField label="Dialog içeriği"/>
        </WFace.WBasicDialog>
      </div>
    );
  }
}