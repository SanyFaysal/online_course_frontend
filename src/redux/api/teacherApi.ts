import { IStudent } from "@/types/studentTypes";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const teacherApi = baseApi.injectEndpoints({
    endpoints: (build: any) => ({
        createTeacherRequest: build.mutation({
            query: (data: any) => {
                return ({
                    url: `/user/teachers/`,
                    method: "POST",
                    body: data
                })
            },
            invalidatesTags: [tagTypes.teacher]
        }),
        getTeacherCourses: build.query({
            query: ({ token, teacherId }: Record<string, string>) => {
                console.log({ token, teacherId })
                return ({
                    url: `/user/teacher/${teacherId}/courses/`,
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
            },
            providesTags: [tagTypes.teacherCourses]
        }),
        getAllTeacherRequests: build.query({
            query: () => {
                return ({
                    url: `/user/teachers/`,
                    method: "GET",
                })
            },
            providesTags: [tagTypes.teacherRequests]
        }),
        getSingleTeacher: build.query({
            query: ({ token, userId }: Record<string, string>) => {
                return ({
                    url: `/user/teacher/${userId}/`,
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
            },
            providesTags: [tagTypes.teacher]
        }),
        // approveTeacherRequest: build.query({
        //     query: ({  }: Record<string, string>) => {
        //         return ({
        //             url: `/user/teacher/${userId}/`,
        //             method: "GET",
        //             headers: {
        //                 Authorization: `Bearer ${token}`,
        //             }
        //         })
        //     },
        //     providesTags: [tagTypes.teacher]
        // }),
    }),
    overrideExisting: true
})

export const {
    useCreateTeacherRequestMutation,
    useGetTeacherCoursesQuery,
    useGetSingleTeacherQuery,
    useGetAllTeacherRequestsQuery } = teacherApi;
