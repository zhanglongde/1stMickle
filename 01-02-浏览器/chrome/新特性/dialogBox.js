/**
 * Created by Administrator on 2017/11/17.
 */

import Person from'../person'

export function dialogBox() {
  this.open = function () {
    console.log('new box...')

    let p = new Person('xxx')
    console.log(p.name)
  }
}