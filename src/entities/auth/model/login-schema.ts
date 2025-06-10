import * as yup from "yup";

export const loginSchema = yup.object({
    email: yup
        .string()
        .email("Некорректный email")
        .required("Обязательное поле"),
    password: yup
        .string()
        .min(6, "Минимум 6 символов")
        .required("Обязательное поле"),
});
