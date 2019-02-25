import { connect } from "react-redux"
import { getNavigations } from "actions"
class Video extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    const {isLoadedNav} = this.props.navigation
    if(!isLoadedNav){
      this.props.getNavigations()
    }
  }

  render(){
    const {navigations} = this.props.navigation
    return( <div className="video-list">
    <div className="video-list--wrapper">
      {
         navigations.length && navigations.filter(el => el.name == "video").map(el => el.settings)[0].map((video, index) => {
           return(
            <div className="video-item" >
              <div className="video-item--link" dangerouslySetInnerHTML={{__html: video.url}}>
              </div>
              <div className="video-item--title">
                {video.title}
              </div>
              
            </div>
           )
         })
        
      }
    </div>
  </div>)
   
  }

}
const mapStateToProps = state => {
  return{
    navigation: state.navigation
  }
}

const mapDispatchToProps = dispatch => {
  return{
    getNavigations: () => dispatch(getNavigations())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Video)