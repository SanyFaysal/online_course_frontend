import { IEnrollStudent, IStudent } from "@/types/studentTypes";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const categoryApi = baseApi.injectEndpoints({
    endpoints: (build: any) => ({
        // enrollCourse: build.mutation({
        //     query: ({ data, token }: { data: IEnrollStudent, token: string }) => {
        //         return ({
        //             url: `/user/enroll-course/`,
        //             method: "POST",
        //             headers: {
        //                 authorization: `Bearer ${token}`,
        //             },
        //             body: data
        //         })
        //     },
        //     invalidatesTags: [tagTypes.student]
        // }),
        getAllCategories: build.query({
            query: (token: string) => {
                return ({
                    url: `/user/categories/`,
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
            },
            providesTags: [tagTypes.categories]
        }),

        // getStudentCourses: build.query({
        //     query: (token: string) => {
        //         return ({
        //             url: `/user/student-course/${55}`,
        //             method: "GET",
        //             headers: {
        //                 Authorization: `Bearer ${token}`,
        //             }
        //         })
        //     },
        //     providesTags: [tagTypes.courses]
        // }),



    }),

})

export const { useGetAllCategoriesQuery } = categoryApi;
