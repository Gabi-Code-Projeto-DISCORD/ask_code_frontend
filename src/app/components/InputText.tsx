"use client"

import InputTextType from "@/types/InputTextType"

export default function InputText({ 
    register,
    error,
    label,
    type = 'text',
    placeholder = ""
}: InputTextType): JSX.Element {
    return (
        <div>
            <label>{ label }</label>
            <input 
                placeholder={placeholder}
                className={(error) ? 'input-error' : ''}
                type={type} { ...register }
            />
            <samp>{ error || '' }</samp>
        </div>
    )
}
