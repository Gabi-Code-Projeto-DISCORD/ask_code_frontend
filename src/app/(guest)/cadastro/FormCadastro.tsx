"use client"
import * as yup from "yup"
import LoginType from "@/types/LoginType"
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from "react-hook-form"
import InputText from "@/app/components/InputText"
import CadastroType from "@/types/CadastroType"

const schema: yup.ObjectSchema<any> = yup.object({
  name: yup.string().required(),
  login: yup.string().required(),
  password: yup.string().required(),
  confirm_password: yup.string().required()
}).required()

export default function FormCadastro(): JSX.Element {
  const onSubmit: SubmitHandler<LoginType> = data => console.log(data)
  const { register, handleSubmit, formState: { errors } } = useForm<CadastroType>({
    defaultValues: {
      name: '',
      login: '',
      password: '',
      confirm_password: ''
    },
    resolver: yupResolver(schema)
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <InputText
          label="Nome:"
          type="text"
          error={errors.name?.message}
          register={register("name")}
          placeholder="Digite aqui..."
        />
      </div>
      <div>
        <InputText
          label="E-mail:"
          type="mail"
          error={errors.login?.message}
          register={register("login")}
          placeholder="Digite aqui..."
        />
      </div>
      <div>
        <InputText
          label="Senha:"
          type="password"
          error={errors.password?.message}
          register={register("password")}
          placeholder="Digite aqui..."
        />
      </div>
      <div>
        <InputText
          label="Repita a senha:"
          type="password"
          error={errors.confirm_password?.message}
          register={register("confirm_password")}
          placeholder="Digite aqui..."
        />
      </div>
    </form>
  )
}

