import { IStudent } from "@/types/studentTypes";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const studentApi = baseApi.injectEndpoints({
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


    }),

})

export const { useCreateStudentMutation } = studentApi;
