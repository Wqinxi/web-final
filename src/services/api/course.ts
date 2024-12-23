// @ts-ignore
/* eslint-disable */
import request from "@/../config/axios.config";

/** 添加课程信息 POST /course/add */
export async function addCourse(
  body: API.Course,
  options?: { [key: string]: any }
) {
  return request<boolean>("/course/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** ai助手交流 POST /course/ai/query */
export async function ai(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.aiParams,
  options?: { [key: string]: any }
) {
  return request<string>("/course/ai/query", {
    method: "POST",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 删除指定课程信息 DELETE /course/delete/${param0} */
export async function deleteCourse(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteCourseParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/course/delete/${param0}`, {
    method: "DELETE",
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取指定课程信息信息 GET /course/info/${param0} */
export async function getCourse(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCourseParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<API.CourseVO>(`/course/info/${param0}`, {
    method: "GET",
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取课程信息列表 GET /course/list */
export async function getCourses(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCoursesParams,
  options?: { [key: string]: any }
) {
  return request<API.ListResultCourseVO>("/course/list", {
    method: "GET",
    params: {
      // current has a default value: 1
      current: "1",
      // pageSize has a default value: 10
      pageSize: "10",
      ...params,
      param: undefined,
      ...params["param"],
    },
    ...(options || {}),
  });
}

/** 获取课程信息列表，包含注册信息 GET /course/list-enroll */
export async function getCoursesWithEnroll(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCoursesWithEnrollParams,
  options?: { [key: string]: any }
) {
  return request<API.ListResultCourseWithEnrollVO>("/course/list-enroll", {
    method: "GET",
    params: {
      // current has a default value: 1
      current: "1",
      // pageSize has a default value: 10
      pageSize: "10",
      ...params,
      param: undefined,
      ...params["param"],
    },
    ...(options || {}),
  });
}

/** 获取我的课程信息列表，包含注册信息 GET /course/list-self-enroll */
export async function getMyCoursesWithEnroll(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMyCoursesWithEnrollParams,
  options?: { [key: string]: any }
) {
  return request<API.ListResultCourseWithEnrollVO>("/course/list-self-enroll", {
    method: "GET",
    params: {
      // current has a default value: 1
      current: "1",
      // pageSize has a default value: 10
      pageSize: "10",
      ...params,
      param: undefined,
      ...params["param"],
    },
    ...(options || {}),
  });
}

/** 对应课程下的所有学生账号 GET /course/list-student/${param0} */
export async function getCourseStudents(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCourseStudentsParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ListResultUserVO>(`/course/list-student/${param0}`, {
    method: "GET",
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 修改指定课程信息信息 PUT /course/update/${param0} */
export async function updateCourse(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateCourseParams,
  body: API.Course,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/course/update/${param0}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
