"use client"
import ContainerGuest from '../ContainerGuest'
import FormLogin from './FormLogin'

export default function Login(): JSX.Element {
  return (
    <ContainerGuest>
      <div className="logo">
        <img src="/assets/img/logo.svg" alt="askcode" />
      </div>
      <div>
        <FormLogin />
      </div>
    </ContainerGuest>
  )
}
