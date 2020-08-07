
import {Config} from './config.js';
class Base {
  constructor() {
    this.baseRequestUrl = ''
  }

  request(params) {
    var url = this.baseRequestUrl + params.url;
    if (!params.type) {
      params.type = 'GET';
    }
    wx.request({
      url: url,
      data: params.data,
      method: params.type,
      header: {
        'content-type': 'application/json',
        'token': wx.getStorageSync('token')
      },
      success: function (res) {
        params.sCallBack && params.sCallBack(res.data);
      },
      fail: function (err) {
        console.log(err);
      }
    })
  }
}

export {Base};