import { Button } from "@mui/material";
import { useDeleteProductStockMutation } from "@/entities/product-sotck-item";

interface IPropsProductStockDelete {
    id?: number;
    onClose: () => void;
}

const ProductStockDelete = ({ id, onClose }: IPropsProductStockDelete) => {
    const [deleteProduct, { isLoading }] = useDeleteProductStockMutation();

    const handleDelete = async () => {
        if (!id) return;
        try {
            await deleteProduct(id).unwrap();
            onClose();
        } catch (e) {
            console.error("Ошибка при удалении", e);
        }
    };

    return (
        <div>
            <p className="text-[22px] font-bold mb-8">
                Вы уверены что хотите удалить ?
            </p>
            <div className="flex gap-4">
                <Button
                    variant="outlined"
                    color="error"
                    onClick={handleDelete}
                    disabled={isLoading}
                >
                    Удалить
                </Button>
                <Button
                    variant="outlined"
                    onClick={onClose}
                    disabled={isLoading}
                >
                    Отмена
                </Button>
            </div>
        </div>
    );
};

export default ProductStockDelete;
