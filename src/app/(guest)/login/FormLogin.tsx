"use client"
import * as yup from "yup"
import LoginType from "@/types/LoginType"
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from "react-hook-form"
import InputText from "@/app/components/InputText"

const schema: yup.ObjectSchema<any> = yup.object({
    login: yup.string().required(),
    password: yup.string().required()
}).required();

export default function FormLogin(): JSX.Element {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginType>({
        defaultValues: {
            login: '',
            password: ''
        },
        resolver: yupResolver(schema)
    });
    const onSubmit: SubmitHandler<LoginType> = data => console.log(data);

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <InputText
                    label="E-mail:"
                    error={errors.login?.message}
                    register={register("login")}
                />
            </div>
            <div>
                <InputText
                    label="Senha:"
                    error={errors.password?.message}
                    register={register("password")}
                    type="password"
                />
            </div>
            <div className="text-center" style={{marginTop: '67px', marginBottom: '64px'}}>
                <div>
                    <button type="submit">Entrar</button>
                </div>
                <a href="#">Ainda não tenho uma conta</a>
            </div>
        </form>
    )
}
