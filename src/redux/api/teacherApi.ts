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


    }),

})

export const { useCreateTeacherRequestMutation } = teacherApi;
