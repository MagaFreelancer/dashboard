import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { TypeProductStock } from "@/entities/product-sotck-item";

export const productsStockApi = createApi({
    reducerPath: "stock",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://e3c54ca11f575146.mokky.dev",
    }),
    tagTypes: ["ProductStock"],
    endpoints: (build) => ({
        getProductStock: build.query<TypeProductStock[], void>({
            query: () => `/products`,
            providesTags: ["ProductStock"],
        }),
        editProductStock: build.mutation({
            query: ({ id, ...patch }) => ({
                url: `/products/${id}`,
                method: "PATCH",
                body: patch,
            }),
            invalidatesTags: ["ProductStock"],
        }),
        deleteProductStock: build.mutation<void, number>({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["ProductStock"],
        }),
    }),
});

export const {
    useGetProductStockQuery,
    useEditProductStockMutation,
    useDeleteProductStockMutation,
} = productsStockApi;
