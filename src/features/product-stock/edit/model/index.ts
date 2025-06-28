import { useState } from "react";
import type { TypeProductStock } from "@/entities/product-sotck-item";

export const useProductStock = () => {
    const [stockProduct, setStockProduct] = useState<TypeProductStock | null>(
        null
    );

    const handlerEditStock = (itemStock: TypeProductStock) => {
        setStockProduct(itemStock);
    };

    return {
        handlerEditStock,
        stockProduct,
    };
};
