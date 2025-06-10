export const AuthForm = (props: any) => {
    const { register, handleSubmit, errors, isLogin, onSubmit } = props;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {!isLogin && (
                <>
                    <input placeholder="Имя" {...register("name")} />
                    <p>{errors.name?.message}</p>
                </>
            )}

            <input placeholder="Email" {...register("email")} />
            <p>{errors.email?.message}</p>

            <input
                type="password"
                placeholder="Пароль"
                {...register("password")}
            />
            <p>{errors.password?.message}</p>

            {!isLogin && (
                <>
                    <input
                        type="password"
                        placeholder="Подтвердите пароль"
                        {...register("confirmPassword")}
                    />
                    <p>{errors.confirmPassword?.message}</p>
                </>
            )}

            <button type="submit">
                {isLogin ? "Войти" : "Зарегистрироваться"}
            </button>
        </form>
    );
};
