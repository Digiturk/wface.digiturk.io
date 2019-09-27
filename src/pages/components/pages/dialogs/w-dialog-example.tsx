class WDialogExample extends React.Component {
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
        <WFace.WDialog 
          open={this.state.isOpen}          
        >
          <WFace.WDialogTitle> 
            <WFace.WTypography color="primary">Başlık</WFace.WTypography>
          </WFace.WDialogTitle>
          <WFace.WDialogContent>            
              <WFace.WTextField label="dialog içeriği"/>
          </WFace.WDialogContent>
          <WFace.WDialogActions>
            <WFace.WButton onClick={() => this.setState({isOpen: false})} color="primary">KAPAT</WFace.WButton>
          </WFace.WDialogActions>
        </WFace.WDialog>
      </div>
    );
  }
}