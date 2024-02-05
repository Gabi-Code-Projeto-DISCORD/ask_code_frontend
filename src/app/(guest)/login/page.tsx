"use client"
import ContainerGuest from '../ContainerGuest'
import FormLogin from './FormLogin'

export default function Login(): JSX.Element {
  return (
    <ContainerGuest>
      <div className='centralizer'>
      <img src="../../assets/img/logo.png" alt="Logo do Ask Code - ponto de interrogação com partes de uma engrenagens ao redor" />
        <FormLogin />
      </div>
    </ContainerGuest>
  )
}
