import React from 'react'
import {connect} from 'react-redux'

import Button from './items/Button'
import ConsoleScreen from './items/ConsoleScreen'
import ReactEscapeDoor from './Door/ReactEscapeDoor'
import DeployBranch from './consoleinteractions/Deploy'
import DevelopBranch from './consoleinteractions/Dev'
import MasterBranch from './consoleinteractions/Master'
import SolutionBranch from './consoleinteractions/Solutions'
import TestBranch from './consoleinteractions/Test'
import CloseConsoleButton from './items/CloseConsoleButton'
import ConsolePopUp from './items/ConsolePopUp'



class ReactCore extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      func: this.props.func,
      branch: this.props.banch,
      consolePopUp: this.props.consolePopUp,
      loggedIn: this.props.loggedIn
    }
  }

  componentWillMount(props) {
    this.setState({
      button: new Button(this.props.dispatch),
      consolescreen: new ConsoleScreen(this.props.dispatch),
      reactescapedoor: new ReactEscapeDoor(this.props.dispatch),
      consolepopup:new ConsolePopUp(this.props.dispatch),
      branches:
      [
      new DeployBranch(this.props.dispatch),
      new DevelopBranch(this.props.dispatch),
      new MasterBranch(this.props.dispatch),
      new SolutionBranch(this.props.dispatch),
      new TestBranch(this.props.dispatch)
      ],
      closebutton: new CloseConsoleButton(this.props.dispatch)

    })
  }

  componentWillReceiveProps(nextprops) {
    this.setState({
      switchBranch: this.props.switchBranch,
      consolePopUp: this.props.consolePopUp,
      loggedIn: this.props.loggedIn,
      branch: this.props.branch

    })

  }

  renderButton(button) {
    return (<img
      src={button.img} style={button.roomStyle}
      onClick={() => button.mouseClick('click')}
      onMouseOver={() => button.mouseOver()}
      onMouseOut={() => button.mouseOff()}/>
    )
  }

  renderConsoleScreen(screen) {
    return (<img
      src={screen.img} style={screen.roomStyle}
      onClick={() => screen.mouseClick('click')}
      onMouseOver={() => screen.mouseOver()}
      onMouseOut={() => screen.mouseOff()}/>
    )
  }


  renderReactEscapeDoor(redoor) {
    return (<img
      src={redoor.img} style={redoor.roomStyle}
      onClick={() => redoor.mouseClick('click')}
      onMouseOver={() => redoor.mouseOver()}
      onMouseOut={() => redoor.mouseOff()}/>
    )
  }

  renderBranches(branches, i) {
    return(
      branches.map((branch) => {
        return(
          <img
            key={i}
            src={branch.img} style={branch.style}
            onClick={() =>popup.mouseClick('click')} />
        )
      })
    )
  }

  renderConsolePopUp(popup) {
    return ( <img
      src={this.props.loggedIn ?
      popup.openimg : popup.lockimg}
      style={popup.style}
      onClick={() =>
      popup.mouseClick(this.props.activeItem)}
      onMouseOver={() => popup.mouseOver()}
      onMouseOut={() => popup.mouseOff()}/>
    )
  }

  renderCloseConsoleButton(button){
    console.log("close console button getting hit")
    return ( <img
      src={button.img}
      style={button.style}
      onClick={() =>
      popup.mouseClick('click')}
      onMouseOver={() => button.mouseOver()}
      onMouseOut={() => button.mouseOff()}/>
    )
  }

  render () {
    return (
      <div className='window'>
        <img className='background-img' src='images/backgrounds/Reactcore.png'/>
        {this.renderButton(this.state.button)}
        {this.renderConsoleScreen(this.state.consolescreen)}
        {this.renderReactEscapeDoor(this.state.reactescapedoor)}
        {this.props.consolePopUp && this.renderConsolePopUp(this.state.consolepopup)}
        {this.props.consolePopUp && this.renderCloseConsoleButton(this.state.closebutton)}
        {this.props.loggedIn && this.renderBranches(this.state.branches)}
        {console.log(this.state)}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    location: state.location,
    inventory: state.inventory,
    activeItem: state.activeItem,
    worldItems: state.worldItems,
    func: state.func,
    loggedIn: state.loggedIn,
    consolePopUp: state.consolePopUp,
    branch: state.branch
  }
}

export default connect(mapStateToProps)(ReactCore)
