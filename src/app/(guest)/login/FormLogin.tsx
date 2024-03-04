"use client"
import * as yup from "yup"
import LoginType from "@/types/LoginType"
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from "react-hook-form"
import InputText from "@/app/components/InputText"

const schema: yup.ObjectSchema<any> = yup.object({
    login: yup.string().required(),
    password: yup.string().required()
}).required()

export default function FormLogin(): JSX.Element {
    const onSubmit: SubmitHandler<LoginType> = data => console.log(data)
    const { register, handleSubmit, formState: { errors } } = useForm<LoginType>({
        defaultValues: {
            login: '',
            password: ''
        },
        resolver: yupResolver(schema)
    })

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <InputText
                    label="E-mail:"
                    type="email"
                    error={errors.login?.message}
                    register={register("login")}
                    placeholder="Digite seu e-mail"
                />
            </div>
            <div>
                <InputText
                    label="Senha:"
                    error={errors.password?.message}
                    register={register("password")}
                    placeholder="Digite sua senha"
                    type="password"
                />
            </div>
            <div className="text-center" style={{marginTop: '70px', marginBottom: '45px'}}>
                <div>
                    <button type="submit">Entrar</button>
                </div>
                <a href="/cadastro">Ainda não tenho uma conta</a>
            </div>
        </form>
    )
}
