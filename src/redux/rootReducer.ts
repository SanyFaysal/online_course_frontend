import { baseApi } from "./api/baseApi";
import userSlice from "./slices/userSlice";

export const reducer = {
    auth: userSlice,
    [baseApi.reducerPath]: baseApi.reducer,
}

