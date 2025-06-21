import { useState } from "react";
import { ProductStockItem } from "@/entities/product-sotck-item";
import Modal from "@/shared/ui/modal.tsx";

const dataProducts = [
    {
        id: 1,
        image: "https://asus-store.ru/assets/images/laptop/x-k-series/e410/305.jpg",
        title: "Apple Watch Series 4",
        category: "digital",
        price: 3000,
    },
    {
        id: 2,
        image: "https://asus-store.ru/assets/images/laptop/x-k-series/e410/305.jpg",
        title: "Apple Watch Series 4",
        category: "digital",
        price: 3000,
    },
    {
        id: 3,
        image: "https://asus-store.ru/assets/images/laptop/x-k-series/e410/305.jpg",
        title: "Apple Watch Series 4",
        category: "digital",
        price: 3000,
    },
];

export const ProductsStockList = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    return (
        <div className="bg-white rounded-lg border-[1px] border-[#D5D5D5]">
            <div className="grid grid-cols-5 py-6 px-8">
                <p className="text-[14px] font-bold">Image</p>
                <p className="text-[14px] font-bold">Product Name</p>
                <p className="text-[14px] font-bold">Category</p>
                <p className="text-[14px] font-bold">Price</p>
                <p className="text-[14px] font-bold">Action</p>
            </div>
            <ul>
                {dataProducts.map((item) => (
                    <ProductStockItem
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        category={item.category}
                        price={item.price}
                        onDelete={() => console.log("delete")}
                        onEdit={() => setModalOpen(true)}
                    />
                ))}
            </ul>

            <Modal onOpen={modalOpen} onClose={() => setModalOpen(false)}>
                test
            </Modal>
        </div>
    );
};
