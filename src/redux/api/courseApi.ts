import { IEnrollStudent, IStudent } from "@/types/studentTypes";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const courseApi = baseApi.injectEndpoints({
    endpoints: (build: any) => ({
        enrollCourse: build.mutation({
            query: ({ data, token }: { data: IEnrollStudent, token: string }) => {
                return ({
                    url: `/user/enroll-course/`,
                    method: "POST",
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                    body: data
                })
            },
            invalidatesTags: [tagTypes.studentCourses]
        }),
        createCourse: build.mutation({
            query: ({ data, token }: any) => {
                return ({
                    url: `/user/courses/`,
                    method: "POST",
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                    body: data
                })
            },
            // invalidatesTags: [tagTypes?.teacherCourses, tagTypes.courses]
        }),
        getAllCourses: build.query({
            query: (token: string) => {
                return ({
                    url: `/user/courses/`,
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
            },
            providesTags: [tagTypes.courses]
        }),

        getStudentCourses: build.query({
            query: ({ token, studentId }: any) => {
                return ({
                    url: `/user/student-courses/${studentId}/`,
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
            },
            providesTags: [tagTypes.studentCourses]
        }),
    }),

})

export const {
    useGetAllCoursesQuery,
    useEnrollCourseMutation,
    useGetStudentCoursesQuery,
    useCreateCourseMutation
} = courseApi;
