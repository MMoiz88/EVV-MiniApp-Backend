'use strict'



export default {
  /*Log message*/
  logMsg(msg: any) {
    return {
      timestamp: new Date().getTime(),
      msg
    }
  },
}
