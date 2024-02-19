import { IEnrollStudent, IStudent } from "@/types/studentTypes";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const categoryApi = baseApi.injectEndpoints({
    endpoints: (build: any) => ({
        createCategory: build.mutation({
            query: ({ data, token }: { data: IEnrollStudent, token: string }) => {
                return ({
                    url: `/user/categories/`,
                    method: "POST",
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                    body: data
                })
            },
            invalidatesTags: [tagTypes.categories]
        }),
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





    }),

})

export const { useGetAllCategoriesQuery, useCreateCategoryMutation } = categoryApi;
