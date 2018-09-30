class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }
  render() {
    if (this.state.hasError) {
      return (<div>hasError</div>)
    }
    return (this.props.children)
  }
  componentDidCatch(error, info) {
    this.setState({
      hasError: true
    })
    logErrorToMyService(error, info);
  }
}

export default ErrorBoundary
