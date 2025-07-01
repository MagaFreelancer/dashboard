import { productsStockApi } from "@/entities/product-sotck-item/api/get-prodcut-stock.ts";

export { ProductStockItem } from "./ui";
export type {
    TypeProductStock,
    IPropsProductStock,
} from "./model/product-types";

export const { useGetProductStockQuery } = productsStockApi;
export { productsStockApi } from "./api/get-prodcut-stock.ts";
export { SkeletonStock } from "./ui/skeleton-stock.tsx";
