interface IErrorProduct {
    error: boolean;
}

const ErrorProduct = ({ error }: IErrorProduct) => {
    return <div>{error && <h1>Ошибка</h1>}</div>;
};

export default ErrorProduct;
