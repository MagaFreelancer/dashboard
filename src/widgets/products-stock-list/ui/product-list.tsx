import {
    ProductStockItem,
    SkeletonStock,
    type TypeProductStock,
} from "@/entities/product-sotck-item";
import ErrorProduct from "@/widgets/products-stock-list/ui/error-product.tsx";

interface IPropsProductList {
    list: TypeProductStock[] | undefined;
    isLoading: boolean;
    isError: boolean;
    onEdit: (id: number) => void;
}

const ProductList = (props: IPropsProductList) => {
    const { onEdit, list, isLoading, isError } = props;

    return (
        <ul>
            {list?.map((item) => (
                <ProductStockItem
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    category={item.category}
                    price={item.price}
                    onDelete={() => console.log("delete")}
                    onEdit={() => onEdit(item.id)}
                />
            ))}

            <ErrorProduct error={isError} />

            {isLoading && <SkeletonStock count={5} />}
        </ul>
    );
};

export default ProductList;
