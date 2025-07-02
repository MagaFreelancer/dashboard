import { useState } from "react";
import {
    type TypeProductStock,
    useEditProductStockMutation,
} from "@/entities/product-sotck-item";
import type { TypeFormEdit } from "@/features/product-stock/edit/ui";

export const useProductStock = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [stockProduct, setStockProduct] = useState<TypeProductStock | null>(
        null
    );
    const [modalType, setModalType] = useState<"edit" | "delete" | null>(null);
    const [updateProduct, { isLoading }] = useEditProductStockMutation();

    const onSubmitEdit = (id: number | undefined, changeData: TypeFormEdit) => {
        updateProduct({ id, ...changeData });
    };

    const handlerEditStock = (itemStock: TypeProductStock) => {
        setStockProduct(itemStock);
        setModalType("edit");
        setModalOpen(true);
    };

    const onSubmitDelete = () => {
        console.log("delete");
    };

    const handlerDeleteStock = (id: number) => {
        setStockProduct({ id } as TypeProductStock);
        setModalType("delete");
        setModalOpen(true);
    };

    return {
        handlerEditStock,
        setModalOpen,
        onSubmitEdit,
        handlerDeleteStock,
        setModalType,
        onSubmitDelete,
        stockProduct,
        modalType,
        modalOpen,
        isLoading,
    };
};
