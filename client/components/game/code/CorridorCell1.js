import CodeGiver from './CodeGiver'

import {updateLog} from '../../../actions/currentLog'
import {sendToFunc} from '../../../actions/sendToFunction'

export default class CorridorCell1 extends CodeGiver {
  constructor(dispatch) {
    super(dispatch)
    this.img = 'images/items/CorridorCell1.png'
    this.code = 'images/function/full/line2.png'
    this.lockmsg = 'The door is locked...maybe there is a key somewhere?'
    this.name = 'corridorCell1'
    this.roomStyle = {
      width: '75px',
      height: '216px',
      position: 'absolute',
      top: '50%',
      left: '84%',
      zIndex: 5
    }
  }


  mouseClick() {
      this.dispatch(updateLog(this.lockmsg))
  }

  mouseOver() {

  }

  mouseOff(){

  }
}
