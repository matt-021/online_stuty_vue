import request from '@/utils/request'
const api_name = '/edu/course'
export default {
    //1 添加课程信息
    addCourseInfo(courseInfo) {
        return request({
            url: '/edu/course/saveCourseInfo',
            method: 'post',
            data:courseInfo
          })
    },
    //2 查询所有讲师
    getListTeacher() {
        return request({
            url: '/edu/teacher/findAll',
            method: 'get'
          })
    },
    //回显
    getCourseInfoId(id) {
        return request({
            url: `${api_name}/course-info/${id}`,
            method: 'get'
        })
    },
    //修改课程信息
    updateCourseInfo(courseInfo) {
        return request({
            url: '/edu/course/updateCourseInfo',
            method: 'post',
            data: courseInfo
          })
    },
    //课程确认信息显示
    getPublihCourseInfo(id) {
        return request({
            url: '/edu/course/course-publish-info/'+id,
            method: 'get'
          })
    },
    //课程最终发布
    publihCourse(id) {
        return request({
            url: '/edu/course/publishCourse/'+id,
            method: 'post'
          })
    }

}
