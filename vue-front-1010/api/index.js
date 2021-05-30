import request from '@/utils/request'
export default {
    getIndexData() {
    return request({
      url: `/edu/index/index`,
      method: 'get'
    })
  }
}