import request from '@/utils/request'

const api_name = '/edu/chapter'

export default {

  getNestedTreeList(courseId) {
    return request({
      url: `${api_name}/nested-list/${courseId}`,
      method: 'get'
    })
  },
   //添加章节
   addChapter(chapter) {
    return request({
        url: api_name,
        method: 'post',
        data: chapter
      })
},
//根据id查询章节
getChapter(chapterId) {
    return request({
        url: `${api_name}/${chapterId}`,
        method: 'get'
      })
},
//修改章节
updateChapter(chapter) {
    return request({
        url: `${api_name}/${chapter.id}`,
        method: 'put',
        data: chapter
      })
},
//删除章节
deleteChapter(chapterId) {
    return request({
        url: `${api_name}/${chapterId}`,
        method: 'delete'
      })
}
}