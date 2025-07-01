import { type JSX, useState } from "react";
import { useGetProductStockQuery } from "@/entities/product-sotck-item";
import { StockEditForm, useProductStock } from "@/features/product-stock/edit";
import Modal from "@/shared/ui/modal.tsx";
import ProductList from "@/widgets/products-stock-list/ui/product-list.tsx";

export const ProductsStockList = (): JSX.Element => {
    const { data, isLoading, isError } = useGetProductStockQuery();
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const { stockProduct } = useProductStock();

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
                onEdit={() => setModalOpen(true)}
            />

            <Modal onOpen={modalOpen} onClose={() => setModalOpen(false)}>
                <p className="text-center text-[22px] font-bold mb-4">
                    Редактирование
                </p>
                <StockEditForm data={stockProduct} />
            </Modal>
        </div>
    );
};
