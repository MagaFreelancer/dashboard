import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { TypeProductStock } from "@/entities/product-sotck-item";

export const productsStockApi = createApi({
    reducerPath: "stock",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://e3c54ca11f575146.mokky.dev/",
    }),
    endpoints: (build) => ({
        getProductStock: build.query<TypeProductStock[], void>({
            query: () => `products`,
        }),
    }),
});

export const { useGetProductStockQuery } = productsStockApi;
