import React from 'react'
import {connect} from 'react-redux'

import ReactSign from './Door/ReactSign'
import StaffRoom from './Door/StaffRoom'
import Authbot from './items/Authbot'


class Corridor extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  componentWillMount(props) {
    this.setState({
      reactSign: new ReactSign(this.props.dispatch),
      staffRoom: new StaffRoom(this.props.dispatch),
      authbot: new Authbot(this.props.dispatch)
    })
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //
  //   })
  // }

  renderReactSign(sign) {
    return (<img
      src={sign.img}
      style={sign.roomStyle}
      onClick={() => sign.mouseClick('click')}
      onMouseOver={() => sign.mouseOver()}
      onMouseOut={() => sign.mouseOff()}/>
    )
  }

  renderStaffRoom(sign) {
    return (<img
      src={sign.img}
      style={sign.roomStyle}
      onClick={() => sign.mouseClick('click')}
      onMouseOver={() => sign.mouseOver()}
      onMouseOut={() => sign.mouseOff()}/>
    )
  }

  renderAuthbot(bot) {
    return (<img
      src={bot.img}
      style={bot.activeStyle}
      onClick={() =>
      bot.mouseClick()}
      onMouseOver={() => bot.mouseOver()}
      onMouseOut={() => bot.mouseOff()}/>
    )
    console.log('authbot is here');
  }

  render() {
    return (
      <div className='window'>
        <img className='background-img' src='images/backgrounds/Corridor.png'/>
          {this.renderReactSign(this.state.reactSign)}
          {this.renderStaffRoom(this.state.staffRoom)}
          {this.renderAuthbot(this.state.authbot)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
return {
  location: state.location
  }
}

export default connect(mapStateToProps)(Corridor)
