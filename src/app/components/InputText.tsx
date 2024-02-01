"use client"

import InputTextType from "@/types/InputTextType"
import "@css/inputText.css"

export default function InputText({ register, error, label, type = 'text'}: InputTextType): JSX.Element {
    return (
        <div className="input-style" id="first-input">
                <label>{ label }</label>
                <input placeholder={"Digite aqui..."} className={(error) ? 'input-error' : ''} type={type} { ...register } />
                <samp>{ error || '' }</samp>
        
        </div>
    )
}