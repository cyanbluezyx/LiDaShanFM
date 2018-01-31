import {
    wxRequest,
    wxRequestNotLoading
  } from '../utils/wxRequest';

const apiMall = 'https://api.isuuny.xyz/api'
//const apiMall = 'http://localhost:28080/api'

const wxCode2Session = (params) => wxRequest(params, apiMall + '/wechat/wxCode2Session')

const getAudioList = (params) => wxRequest(params, apiMall + '/audio/getAudioList')

const addPlayCount = (params) => wxRequestNotLoading(params, apiMall + '/audio/addPlayCount')

module.exports = {
  wxCode2Session,
  getAudioList,
  addPlayCount
}