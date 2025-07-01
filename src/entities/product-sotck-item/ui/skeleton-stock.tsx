import { Skeleton } from "@mui/material";

interface IPropsSkeletonStock {
    count: number;
}

export const SkeletonStock = ({ count }: IPropsSkeletonStock) => {
    return (
        <>
            {[...new Array(count)].map((_, i) => (
                <div
                    key={i}
                    className="grid py-6 px-8 grid-cols-5 items-center"
                >
                    <Skeleton variant="rounded" width={64} height={64} />
                    <Skeleton variant="rectangular" width={100} height={20} />
                    <Skeleton variant="rounded" width={100} height={20} />
                    <Skeleton variant="rounded" width={100} height={20} />
                    <Skeleton variant="rounded" width={100} height={35} />
                </div>
            ))}
        </>
    );
};
