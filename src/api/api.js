import {
    wxRequest,
    wxRequestNotLoading
  } from '../utils/wxRequest';

const getAudioList = (params) => {
    //wxRequest(params, apiMall + '/goods/list?cateidOne=1&cateidTwo=0&price=0&sales=2');
    return [
        {
          radioId: 'RI1000001',
          title:'“算了吧，放下吧，忘了吧”',
          playCount: '14.5万',
          playLength: '3分49秒',
          date: '2018-1-15',
          audioName: 'RI1000001.mp3',
          author: '李大山'
        },
        {
          radioId: 'RI1000002',
          title:'一辈子都看不见爱情怎么办',
          playCount: '20.9万',
          playLength: '2分42秒',
          date: '2017-12-23',
          audioName: 'RI1000002.mp3',
          author: '李大山'
        },
        {
          radioId: 'RI1000003',
          title:'写给渐渐老去的自己',
          playCount: '39.5万',
          playLength: '5分32秒',
          date: '2017-11-15',
          audioName: 'RI1000003.mp3',
          author: '李大山'
        },
        {
          radioId: 'RI1000004',
          title:'我不愿将就',
          playCount: '34.4万',
          playLength: '3分50秒',
          date: '2017-11-2',
          audioName: 'RI1000004.mp3',
          author: '李大山'
        },
        {
          radioId: 'RI1000005',
          title:'“你一个人过得好吗”',
          playCount: '50.3万',
          playLength: '3分21秒',
          date: '2017-10-25',
          audioName: 'RI1000005.mp3',
          author: '李大山'
        }
      ]
}

module.exports = {
    getAudioList
}