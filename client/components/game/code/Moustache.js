import CodeGiver from './CodeGiver'

import {deleteItem} from '../../../actions/worldItems'


export default class Moustache extends CodeGiver {
  constructor(dispatch) {
    super(dispatch)
    this.name = 'moustache'
    this.code = 'images/function/full/closingBrace.png'
    this.img = 'images/items/Mo.png'
    this.activeStyle = {
      width: '58px',
      height: '14px',
      position: 'absolute',
      top: '36%',
      left: '36%',
      zIndex: 6
    }
    this.idleStyle =  {
      width: '52px',
      height: '14px',
      position: 'absolute',
      top: '46.7%',
      left: '10.7%',
      zIndex: 6
    }
  }

  mouseClick() {
    console.log('Mooooustache')
  }

  mouseOver() {

  }

  mouseOff() {

  }
}
