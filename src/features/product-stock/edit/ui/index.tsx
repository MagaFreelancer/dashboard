import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import clsx from "clsx";
import * as yup from "yup";
import { type SubmitHandler, useForm } from "react-hook-form";
import type { TypeProductStock } from "@/entities/product-sotck-item";
import { useProductStock } from "@/features/product-stock/edit";
import { Input } from "@/shared/ui/input.tsx";

export type TypeFormEdit = {
    title: string;
    category: string;
    price: string;
    image: string;
};

const schemaFormEdit = yup.object().shape({
    title: yup
        .string()
        .required("Title is required")
        .min(4, "Минимум 4 символов"),
    category: yup
        .string()
        .required("Category is required")
        .min(4, "Минимум 4 символов"),
    price: yup
        .string()
        .required("Price is required")
        .min(4, "Минимум 4 символов"),
    image: yup
        .string()
        .required("Image is required")
        .min(4, "Минимум 4 символов"),
});

interface IStockEditForm {
    data: TypeProductStock | null;
}

export const StockEditForm = ({ data }: IStockEditForm) => {
    const { onSubmitEdit, isLoading } = useProductStock();

    const {
        register,
        handleSubmit,
        formState: { errors, isDirty },
    } = useForm<TypeFormEdit>({
        resolver: yupResolver(schemaFormEdit),
        defaultValues: {
            title: data?.title ?? "",
            category: data?.category ?? "",
            price: data?.price ? String(data.price) : "",
            image: data?.image ?? "",
        },
    });

    const onSubmit: SubmitHandler<TypeFormEdit> = (changeData) => {
        onSubmitEdit(data?.id, changeData);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <p className="text-center text-[22px] font-bold mb-4">
                Редактирование
            </p>
            <p>Image</p>
            <Input
                className="p-2 mb-4 border"
                defaultValue={data?.image}
                {...register("image")}
            />
            {errors.image && (
                <span className="text-red-600">{errors.image.message}</span>
            )}

            <p>Product name</p>
            <Input
                className="p-2 mb-4"
                defaultValue={data?.title}
                {...register("title")}
            />
            {errors.title && (
                <span className="text-red-600">{errors.title.message}</span>
            )}

            <p>Category</p>
            <Input
                className={clsx(
                    "p-2 mb-4",
                    errors.category && "border-red-600"
                )}
                defaultValue={data?.category}
                {...register("category")}
            />
            {errors.category && (
                <span className="text-red-600">{errors.category.message}</span>
            )}

            <p>Price</p>
            <Input
                className="p-2 mb-4"
                type="number"
                defaultValue={String(data?.price)}
                {...register("price")}
            />
            {errors.price && (
                <span className="text-red-600">{errors.price.message}</span>
            )}

            <Button
                sx={{ mx: "auto", display: "block", width: 300 }}
                variant="contained"
                loading={isLoading}
                disabled={!isDirty}
                type="submit"
            >
                Contained
            </Button>
        </form>
    );
};
