import request from '@/utils/request'

const api_name = '/edu/teacher'
export default {
  //多条件查询
  getPageList(page, limit, teacherQuery) {
    return request({
      url: `${api_name}/teacherQuery/${page}/${limit}`,
      method: 'post',
      data: teacherQuery
    })
  },
  //新增讲师
  add(teacher){
    return request({
      url: `${api_name}/add`,
      method: 'post',
      data: teacher
    })

  },
  //删除讲师
  removeById(id){
    return request({
      url: `${api_name}/${id}`,
      method: 'delete'
     
    })

  },
  //更新讲师回显
  getById(id) {
    return request({
        url: `${api_name}/${id}`,
        method: 'get'
    })
},
//更新讲师
updateById(teacher) {
  return request({
      url: `${api_name}/${teacher.id}`,
      method: 'put',
      data: teacher
  })
}
}