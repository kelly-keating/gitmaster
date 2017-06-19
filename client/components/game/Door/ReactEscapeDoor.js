import Door from './Door'

import {updateLog} from '../../../actions/currentLog'
import {locChange} from '../../../actions/door'
import {jamDoor, countDown} from '../../../actions/reDoor'


export default class ReactEscapeDoor extends Door {
  constructor (dispatch) {
    super (dispatch)
    this.name = 'reactEscapeDoor'
    this.nextLoc = 'escapepod'
    this.img = 'images/items/ReactEscapeDoor.png'
    this.exitMsg = 'The Escape Pod! Relief surges through you. Now how does this thing work?'
    this.roomStyle = {
      width: '33.5px',
      height: '81px',
      position: 'absolute',
      top: '48.5%',
      left: '14%',
      zIndex: 5
    }
  }

  mouseClick (meltdown, doorJammed, activeItem, tries) {
    if(!meltdown || doorJammed) {
      super.mouseClick()
    } else if (activeItem == 'crowbar') {
      this.dispatch(jamDoor())
    } else if (tries > 0) {
      this.dispatch(countDown())
      this.dispatch(updateLog('The door looks like it\'s about to come down on you! Perhaps use something to jam it open.'))
    } else {
      // badEnding
    }

  }
}
