
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseUrl } from "../../../helpers/config/envConfig";
import { tagTypesList } from "../tag-types";

export const baseApi = createApi({
    reducerPath: "Api",
    baseQuery: fetchBaseQuery({ baseUrl: getBaseUrl() }),
    endpoints: () => ({}),
    tagTypes: tagTypesList,
});
