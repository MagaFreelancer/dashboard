import { useState } from "react";

export const useEditProductStock = () => {
    const [test, setTest] = useState<boolean>(false);

    return {
        test,
        setTest,
    };
};
