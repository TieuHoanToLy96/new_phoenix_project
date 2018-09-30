import BlogEdit from "../pages/blog/edit";

const HocAuthentication = (Component) => {
  class HigherOrderComponent extends React.Component {
    render() {BlogEdit
      return (
        <Component {...this.props} />
      )
    }
  }

  return HigherOrderComponent
}

export default HocAuthentication