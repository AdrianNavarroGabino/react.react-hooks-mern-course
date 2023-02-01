import { useEffect, useState } from "react"
import { Message } from "./Message";
import { useForm } from "./useForm";

export const FormWithCustomHook = () => {
    const { username, email, password, onInputChange, onResetForm } = useForm({
        username: '',
        email: '',
        password: '',
    });

    return (
        <>
            <h1>Formulario con custom hook</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="adrian@google.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />

            <input
                type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={ password }
                onChange={ onInputChange }
            />

            <button className="btn btn-primary mt-2" onClick={ onResetForm }>Borrar</button>

            {
                username === 'strider2' &&
                <Message />
            }
        </>
    )
}
