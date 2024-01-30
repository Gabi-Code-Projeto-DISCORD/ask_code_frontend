"use client"

import InputTextType from "@/types/InputTextType"

export default function InputText({ register, error, label, type = 'text'}: InputTextType): JSX.Element {
    return (
        <div>
            <label>{ label }</label>
            <input className={(error) ? 'input-error' : ''} type={type} { ...register } />
            <samp>{ error || '' }</samp>
        </div>
    )
}