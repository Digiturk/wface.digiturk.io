class WCollapseExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    }
  }

  render() {
    return (
      <div>
        <WFace.WButton onClick={() => this.setState((prev) => ({isOpen: !prev.isOpen}))}>Kartı Kapa/Aç</WFace.WButton>
        <WFace.WCollapse in={this.state.isOpen} timeout="auto">
          <WFace.WCard elevation={1}>
            <WFace.WCardHeader 
              title="Card Title"
              subheader="Card Subheader"/>
            <WFace.WCardContent>
              Content
            </WFace.WCardContent>
            <WFace.WCardActions>
              <WFace.WButton variant="text" size="small">Card Action 1</WFace.WButton>
              <WFace.WButton variant="text" size="small">Card Action 2</WFace.WButton>
            </WFace.WCardActions>
          </WFace.WCard>
        </WFace.WCollapse>
      </div>
    );
  }
}