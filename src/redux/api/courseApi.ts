import { IStudent } from "@/types/studentTypes";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const courseApi = baseApi.injectEndpoints({
    endpoints: (build: any) => ({
        // createStudent: build.mutation({
        //     query: ({data, token}:{data:IStudent, token:string}) => {
        //         return ({
        //             url: `/user/register/`,
        //             method: "POST",
        //             headers: {
        //                 authorization: `Bearer ${token}`,
        //             }
        //             body: data
        //         })
        //     },
        //     invalidatesTags: [tagTypes.user]
        // }),
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


    }),

})

export const { useGetAllCoursesQuery } = courseApi;
