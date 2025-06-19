import { ProductsStockList } from "@/widgets/products-stock-list";

export const ProductStock = () => {
    return (
        <div>
            <div className="mb-7">
                <h2 className="text-[32px] font-bold">Product Stock</h2>
            </div>
            <ProductsStockList />
        </div>
    );
};
