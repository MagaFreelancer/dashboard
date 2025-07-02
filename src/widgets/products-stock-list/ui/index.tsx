import { type JSX } from "react";
import {
    type TypeProductStock,
    useGetProductStockQuery,
} from "@/entities/product-sotck-item";
import ProductStockDelete from "@/features/product-stock/delete/ui";
import { StockEditForm, useProductStock } from "@/features/product-stock/edit";
import Modal from "@/shared/ui/modal.tsx";
import ProductList from "@/widgets/products-stock-list/ui/product-list.tsx";

export const ProductsStockList = (): JSX.Element => {
    const { data, isLoading, isError } = useGetProductStockQuery();

    const {
        stockProduct,
        modalOpen,
        modalType,
        handlerEditStock,
        handlerDeleteStock,
        setModalOpen,
    } = useProductStock();

    return (
        <div className="bg-white rounded-lg border-[1px] border-[#D5D5D5]">
            <div className="grid grid-cols-5 py-6 px-8">
                <p className="text-[14px] font-bold">Image</p>
                <p className="text-[14px] font-bold">Product Name</p>
                <p className="text-[14px] font-bold">Category</p>
                <p className="text-[14px] font-bold">Price</p>
                <p className="text-[14px] font-bold">Action</p>
            </div>

            <ProductList
                list={data}
                isLoading={isLoading}
                isError={isError}
                onEdit={(item: TypeProductStock) => handlerEditStock(item)}
                onDelete={(id: number) => handlerDeleteStock(id)}
            />

            <Modal onOpen={modalOpen} onClose={() => setModalOpen(false)}>
                {modalType === "edit" && <StockEditForm data={stockProduct} />}
                {modalType === "delete" && (
                    <ProductStockDelete
                        id={stockProduct?.id}
                        onClose={() => setModalOpen(false)}
                    />
                )}
            </Modal>
        </div>
    );
};
