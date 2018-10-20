const HocAuthentication = (Component) => {
  class HigherOrderComponent extends React.Component {
    render() {
      return (
        <Component {...this.props} />
      )
    }
  }

  return HigherOrderComponent
}

export default HocAuthentication