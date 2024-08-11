import { IStudent } from "@/types/studentTypes";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const instructorApi = baseApi.injectEndpoints({
    endpoints: (build: any) => ({
        createInstructorRequest: build.mutation({
            query: (data: any) => {
                return ({
                    url: `/instructor/create-request`,
                    method: "POST",
                    body: data
                })
            },
            invalidatesTags: [tagTypes.instructorRequests]
        }),
        // getTeacherCourses: build.query({
        //     query: ({ token, teacherId }: Record<string, string>) => {
        //         console.log({ token, teacherId })
        //         return ({
        //             url: `/user/teacher/${teacherId}/courses/`,
        //             method: "GET",
        //             headers: {
        //                 Authorization: `Bearer ${token}`,
        //             }
        //         })
        //     },
        //     providesTags: [tagTypes.teacherCourses]
        // }),
        getAllInstructorRequests: build.query({
            query: () => {
                return ({
                    url: `/instructor/all-request`,
                    method: "GET",
                })
            },
            providesTags: [tagTypes.instructorRequests]
        }),
        // getSingleTeacher: build.query({
        //     query: ({ token, userId }: Record<string, string>) => {
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
    useCreateInstructorRequestMutation,
    useGetAllInstructorRequestsQuery
} = instructorApi;
