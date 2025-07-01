import { SquarePen, Trash2 } from "lucide-react";
import type { IPropsProductStock } from "@/entities/product-sotck-item";

interface IProductStock extends IPropsProductStock {
    onEdit: () => void;
    onDelete: () => void;
}

export const ProductStockItem = (props: IProductStock) => {
    const { image, title, category, price, onEdit, onDelete } = props;

    return (
        <li className="grid py-6 px-8 grid-cols-5 border-t-[1px] border-[#D5D5D5] items-center">
            <img className="w-16 h-16" src={image} alt={title} />
            <p className="font-semibold break-words">{title}</p>
            <p className="font-semibold">{category}</p>
            <p className="font-semibold">{price}</p>

            <div className="flex w-[96px] rounded-[8px] bg-[#FAFBFD] border border-[#D5D5D5]">
                <button
                    onClick={onEdit}
                    className="p-2 cursor-pointer flex items-center justify-center border-r border-[#D5D5D5] w-1/2"
                >
                    <SquarePen size="16" className="text-[#4B4B4B]" />
                </button>
                <button
                    onClick={onDelete}
                    className="p-2 cursor-pointer flex items-center justify-center w-1/2"
                >
                    <Trash2 size="16" className="text-[#EF4444]" />
                </button>
            </div>
        </li>
    );
};
