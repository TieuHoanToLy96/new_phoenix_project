const HocLayout = (Component, Layout) => {
  class HighOderComponent extends React.Component{
    render(){
      return(
        <Layout>
          <Component {...this.props}/>
        </Layout>
      )
    }
  }
  return HighOderComponent
}

export default HocLayout