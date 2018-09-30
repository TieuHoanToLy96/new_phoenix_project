import { renderRoutes } from 'react-router-config'
import HocAuthentication from '../hocs/HocAuthentication'

class App extends React.Component {
  render() {
    return (
      <div style={{ height: '100%' }}>
        {renderRoutes(this.props.route.routes)}
      </div>
    )
  }
}

export default HocAuthentication(App)