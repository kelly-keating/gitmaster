import React from 'react'
import {connect} from 'react-redux'

import Skull from './items/Skull'
import Bucket from './items/Bucket'
import Brick from './items/Brick'


class Cell extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      worldItems: this.props.worldItems,
      cellLocked: this.props.cellLocked
    }
  }

  componentWillMount(props) {
    this.setState({
      roomItems: this.populateRoom()
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      worldItems: nextProps.worldItems
    })
  }

  populateRoom () {

    return [new Skull (this.props.dispatch), new Brick (this.props.dispatch), new Bucket (this.props.dispatch)]
  }

  renderItem(item, i) {
    if (this.state.worldItems.indexOf(item.name) > -1) {
      return  (
        <img key={i}
          src={item.img}
          style={item.roomStyle}
          onClick={() => item.mouseClick()}
          onMouseOver={() => item.mouseOver()}
          onMouseOut={() => item.mouseOff()}
        />
      )
    }
  }

renderDoor() {
  if(this.state.cellLocked){
    return (
      <img
        src={item.img}
        style={item.roomStyle}
        onClick={()=> item.mouseClick()}
        onMouseOver={()=> item.mouseOver()}
        onMouseOut={()=> item.mouseOff()}
        />
    )

  }
}

  render() {
    return (
      <div className='window'>
        <img className='background-img'src='images/backgrounds/Cell.png'/>
        <div>
          {this.state.roomItems.map((item) => {
            return this.renderItem(item)
          })}
        </div>
        {this.state.cellLocked && this.renderDoor()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    worldItems: state.worldItems,
    cellLocked: state.cellLocked
    inventory: state.inventory
  }
}

export default connect(mapStateToProps)(Cell)
