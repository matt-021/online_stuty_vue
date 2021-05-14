import request from '@/utils/request'

const api_name = '/vod/video'

export default {

deleteAliyunvod(id) {
    return request({
      url: `${api_name}/delete/${id}`,
      method: 'delete'
    })
  }
}