import { Button } from "@mui/material";
import { type SubmitHandler, useForm } from "react-hook-form";
import type { TypeProductStock } from "@/entities/product-sotck-item";
import { Input } from "@/shared/ui/input.tsx";

type Inputs = {
    example: string;
    exampleRequired: string;
};

interface IStockEditForm {
    data: TypeProductStock | null;
}

export const StockEditForm = ({ data }: IStockEditForm) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    console.log(watch("example"));

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <p>Image</p>
            <Input className="p-2 mb-4" type="file" {...register("example")} />

            <p>Product name</p>
            <Input
                className="p-2 mb-4"
                defaultValue={data?.title}
                {...register("exampleRequired", { required: true })}
            />

            <p>Category</p>
            <Input
                className="p-2 mb-4"
                {...register("exampleRequired", { required: true })}
            />

            <p>Price</p>
            <Input
                className="p-2 mb-4"
                {...register("exampleRequired", { required: true })}
            />

            {errors.exampleRequired && <span>This field is required</span>}

            <Button
                sx={{ mx: "auto", display: "block", width: 300 }}
                variant="contained"
                type="submit"
            >
                Contained
            </Button>
        </form>
    );
};
