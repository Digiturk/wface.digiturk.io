class WSkeletonExample extends React.Component {
  renderMedia(loading) {
    const mediaStyle = { height: 190 };

    return (
      <WFace.WCard style={{ maxWidth: 345, margin: 8 }} elevation={1}>
        <WFace.WCardHeader
          avatar={
            loading ? (
              <WFace.WSkeleton variant="circle" width={40} height={40} />
            ) : (
                <WFace.WAvatar
                  alt="Ted talk"
                  src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
                />
              )
          }
          action={
            loading ? null : (
              <WFace.WIconButton aria-label="settings">
                <WFace.WIcon>more_vert</WFace.WIcon>
              </WFace.WIconButton>
            )
          }
          title={loading ? <WFace.WSkeleton height={6} width="80%" /> : 'Ted'}
          subheader={loading ? <WFace.WSkeleton height={6} width="40%" /> : '5 hours ago'}
        />
        {loading ? (
          <WFace.WSkeleton variant="rect" style={mediaStyle}/>
        ) : (
            <CardMedia
              style={mediaStyle}
              image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
              title="Ted talk"
            />
          )}

        <WFace.WCardContent>
          {loading ? (
            <>
              <WFace.WSkeleton height={6} />
              <WFace.WSkeleton height={6} width="80%" />
            </>
          ) : (
              <WFace.WTypography variant="body2" color="textSecondary" component="p">
                {
                  "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
                }
              </WFace.WTypography>
            )}
        </WFace.WCardContent>
      </WFace.WCard>
    );
  }

  render() {
    return (
      <div>
        {this.renderMedia(true)}
        {this.renderMedia(false)}
      </div>
    );
  }
}