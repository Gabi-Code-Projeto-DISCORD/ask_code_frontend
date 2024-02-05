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
            email: '',
            password: ''
        },
        resolver: yupResolver(schema)
    });
    const onSubmit: SubmitHandler<LoginType> = data => console.log(data);

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputText 
                label="E-mail"
                error={errors.email?.message}
                register={register("email")}
                type="email"
                
            
            />
            <InputText 
                label="Senha"
                error={errors.password?.message}
                register={register("password")}
                type="password"
                
            
            />
            <div className="buttons-box">
                <button type="submit">Entrar</button>
                <a href="">Ainda não tenho uma conta</a>
            </div>
        </form>
    )
}
