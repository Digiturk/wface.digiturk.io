class WNestedPageLayoutExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      data: [
      ],
      nestedPageState: null
    }
  }

  Users(props) {
    return (
      <>
        <WFace.WTable
          columns={[
            { title: 'Name', field: 'name' },
            { title: 'Surname', field: 'surname' },
            { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
            {
              title: 'Birth Place',
              field: 'birthCity',
              lookup: { 53: 'Rize', 63: 'Şanlıurfa' },
            },
          ]}
          data={[
            { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
            { name: 'Bilal', surname: 'Hocaoğlu', birthYear: 1987, birthCity: 53 },
          ]}
          title="Custom Actions"
          actions={[
            {
              icon: 'map',
              tooltip: 'Adresler',
              onClick: (event, rowData) => {
                props.navigateTo("addresses", rowData)
              }
            },
          ]}
        />
      </>
    );
  }

  Addresses(props) {
    return (
      <div>
        <WFace.WTypography>
          Bu sayfada {props.payload.name} adresleri görüntülenecek
      </WFace.WTypography>
        <WFace.WButton onClick={() => props.goBack()}>Back</WFace.WButton>
      </div>
    );
  }

  render() {
    return (
      <>
        <WFace.WNestedPageLayout
          state={this.state.nestedPageState}
          onStateChanged={nestedPageState => this.setState({ nestedPageState })}
          root={{
            title: 'Kullanıcılar',
            name: "users",
            component: this.Users,
            subItems: [
              {
                title: (payload) => payload.name + ' Adresleri',
                name: 'addresses',
                component: this.Addresses,
              }
            ]
          }}
        />
      </>
    )
  }
}