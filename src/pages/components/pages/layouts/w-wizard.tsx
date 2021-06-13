class WizardExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    }
  }

  Step1({ data, onDataChanged, onForward }) {
    return (
      <div>
        <WFace.WBox>
          <WFace.WSelect
            id="city"
            label="İl"
            options={[
              { label: 'Adana', value: '1' },
              { label: 'Gaziantep', value: '27' },
              { label: 'İstanbul', value: '34' },
              { label: 'Şanlıurfa', value: '63' }
            ]}
            value={data.city}
            onChange={city => onDataChanged({ ...data, city })}
          />
        </WFace.WBox>
        <WFace.WBox mt={1}>
          <WFace.WSelect
            id="town"
            label="İlçe"
            options={[
              { label: 'Maltepe', value: '1' },
              { label: 'Kadıköy', value: '27' },
              { label: 'Beşiktaş', value: '34' },
              { label: 'Pendik', value: '63' }
            ]}
            value={data.town}
            onChange={town => onDataChanged({ ...data, town })}

          />
        </WFace.WBox>
        <WFace.WBox mt={1}>
          <WFace.WSelect
            id="village"
            label="Bucak/Köy"
            options={[
              { label: 'Maltepe', value: '1' },
              { label: 'Kadıköy', value: '27' },
              { label: 'Beşiktaş', value: '34' },
              { label: 'Pendik', value: '63' }
            ]}
            value={data.village}
            onChange={village => onDataChanged({ ...data, village })}
          />
        </WFace.WBox>
        <WFace.WBox mt={1}>
          <WFace.WSelect
            id="strict"
            label="Mahalle"
            options={[
              { label: 'Mahalle 1', value: '1' },
              { label: 'Mahalle 2', value: '27' },
              { label: 'Mahalle 3', value: '34' },
              { label: 'Mahalle 4', value: '63' }
            ]}
            value={data.strict}
            onChange={strict => onDataChanged({ ...data, strict })}
          />
        </WFace.WBox>
        <WFace.WBox mt={1}>
          <WFace.WSelect
            id="street"
            label="Cadde/Sokak"
            options={[
              { label: 'Cadde 1', value: '1' },
              { label: 'Cadde 2', value: '27' },
              { label: 'Cadde 3', value: '34' },
              { label: 'Cadde 4', value: '63' }
            ]}
            value={data.street}
            onChange={street => onDataChanged({ ...data, street })}
          />
        </WFace.WBox>
        <WFace.WBox mt={1}>
          <WFace.WSelect
            id="building"
            label="Bina Kapı No"
            options={[
              { label: '1A', value: '1' },
              { label: '2A', value: '27' },
              { label: '3A', value: '34' },
              { label: '4A', value: '63' }
            ]}
            value={data.building}
            onChange={building => onDataChanged({ ...data, building })}
          />
        </WFace.WBox>
        <WFace.WBox mt={1}>
          <WFace.WSelect
            id="gate"
            label="Daire No"
            options={[
              { label: '1', value: '1' },
              { label: '2', value: '27' },
              { label: '3', value: '34' },
              { label: '4', value: '63' }
            ]}
            value={data.gate}
            onChange={gate => onDataChanged({ ...data, gate })}
          />
        </WFace.WBox>

        <WFace.WBox display="flex" justifyContent="flex-end" mt={2}>
          <WFace.WButton id="btnStep1" color="primary" variant="contained" onClick={onForward}>
            İleri
          </WFace.WButton>
        </WFace.WBox>
      </div>
    );
  }

  Step2({ data, onDataChanged, onBackward, onForward }) {
    return (
      <div>
        <WFace.WBox>
          <WFace.WTextField
            id="name"
            label="Adı"
            fullWidth
            value={data.name}
            onChange={e => onDataChanged({ ...data, name: e.target.value })}
          />
        </WFace.WBox>
        <WFace.WBox mt={1}>
          <WFace.WTextField
            id="lastname"
            label="Soyadı"
            fullWidth
            value={data.lastname}
            onChange={e => onDataChanged({ ...data, lastname: e.target.value })}
          />
        </WFace.WBox>

        <WFace.WBox display="flex" justifyContent="flex-end" mt={2}>
          <WFace.WBox mr={1}>
            <WFace.WButton id="btnStep1" color="primary" variant="contained" onClick={onBackward}>
              Geri
            </WFace.WButton>
          </WFace.WBox>
          <WFace.WButton id="btnStep1" color="primary" variant="contained" onClick={onForward}>
            İleri
          </WFace.WButton>
        </WFace.WBox>
      </div>
    )
  }

  StepX({ data, onDataChanged, onBackward, onForward, activeStep }) {
    return (
      <div>
        <WFace.WBox mb={2}>
          <WFace.WTypography variant="h6">
            Component {activeStep + 1}
          </WFace.WTypography>
        </WFace.WBox>
        <WFace.WBox display="flex" justifyContent="flex-end" mt={2}>
          <WFace.WBox mr={1}>
            <WFace.WButton id="btnStep1" color="primary" variant="contained" onClick={onBackward}>
              Geri
            </WFace.WButton>
          </WFace.WBox>
          <WFace.WButton id="btnStep1" color="primary" variant="contained" onClick={onForward}>
            İleri
          </WFace.WButton>
        </WFace.WBox>
      </div>
    )
  }

  Step7({ data, onDataChanged, onBackward, onForward, activeStep }) {
    return (
      <div>
        <WFace.WBox mb={2}>
          <WFace.WTypography variant="body2">
            <div>
              <pre>
                {JSON.stringify(data, null, 2)}
              </pre>
            </div>
          </WFace.WTypography>
        </WFace.WBox>
        <WFace.WBox display="flex" justifyContent="flex-end" mt={2}>
          <WFace.WBox mr={1}>
            <WFace.WButton id="btnStep1" color="primary" variant="contained" onClick={onBackward}>
              Geri
            </WFace.WButton>
          </WFace.WBox>
          <WFace.WButton id="btnStep1" color="primary" variant="contained" onClick={onForward}>
            İleri
          </WFace.WButton>
        </WFace.WBox>
      </div>
    )
  }

  render() {
    return (
      <WFace.WPaper style={{ margin: 8 }}>
        <WFace.WWizard
          onDataChanged={data => this.setState({ data })}
          steps={[
            { label: "Altyapı Sorgula", component: this.Step1 },
            { label: "Kişisel Bilgiler", component: this.Step2 },
            { label: "Fatura Tercihi", component: this.StepX },
            { label: "Ürün Tercihi", component: this.StepX },
            { label: "Kampanya Tercihi", component: this.StepX },
            { label: "Randevu", component: this.StepX },
            { label: "Özet/Onay", component: this.Step7 },
            { label: "Sonuç", component: this.StepX },
          ]}
        />
      </WFace.WPaper>
    )
  }
}
