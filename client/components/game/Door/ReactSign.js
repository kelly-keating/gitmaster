import Door from './Door'

import {updateLog} from '../../../actions/currentLog'

export default class ReactSign extends Door {
  constructor (dispatch) {
    super (dispatch)
    this.img = 'images/items/ReactSign.png'
    this.exitMsg = "You've reached the React Core! Hurry!"
    this.error = 'AuthBot: "You are not AUTHORISED to pass."'
    this.name = 'reactSign'
    this.nextLoc = 'reactcore'
    this.roomStyle = {
      width: '145px',
      height: '130px',
      position: 'absolute',
      top: '12%',
      left: '10%',
      zIndex: 5
  }
}

  mouseClick(authBot) {
    if(authBot) {
      super.mouseClick()
    }else {
      this.dispatch(updateLog(this.error))
    }
  }
}
