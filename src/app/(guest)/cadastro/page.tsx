"use client"

import ContainerGuest from "../ContainerGuest"
import FormCadastro from "./FormCadastro"

export default function Cadastro(): JSX.Element {
  return (
    <ContainerGuest>
      <div className="logo">
        <img src="/assets/img/logo.svg" alt="askcode" />
      </div>
      <div>
        <FormCadastro />
      </div>
      <div className="text-center" style={{marginTop: '30px', marginBottom: '20px'}}>
        <div>
          <button type="submit">Registrar</button>
        </div>
        <a href="/login">Já tenho uma conta</a>
      </div>
    </ContainerGuest>
  )
}
