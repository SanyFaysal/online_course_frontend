import { IStudent } from "@/types/studentTypes";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (build: any) => ({
        createStudent: build.mutation({
            query: (data: IStudent) => {

                return ({
                    url: `/user/register/`,
                    method: "POST",
                    body: data
                })
            },
            invalidatesTags: [tagTypes.user]
        }),
        loginUser: build.mutation({
            query: (data: Partial<IStudent>) => {
                return ({
                    url: `/user/login/`,
                    method: "POST",
                    body: data
                })
            },
            invalidatesTags: [tagTypes.user]
        }),


    }),

})

export const { useCreateStudentMutation, useLoginUserMutation } = userApi;
