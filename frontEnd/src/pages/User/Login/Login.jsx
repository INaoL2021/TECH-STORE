import React, { useState } from 'react';
import './Login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleInputChange = (e) => {
        if (e.target.name === 'username') {
            setUsername(e.target.value);
        } else if (e.target.name === 'password') {
            setPassword(e.target.value);
        }
    };

    return (
        <>
            <div className="login_container">
                <div className='formulario'>
                    <h1>Inicio de Sesión</h1>
                    <form method='post'>
                        <div className='username'>
                            <input
                                type="text"
                                name="username"
                                value={username}
                                onChange={handleInputChange}
                                required
                            />
                            <label htmlFor="username" className={username ? 'invisible' : ''}>Usuario</label>
                            <span></span>
                        </div>
                        <div className='username'>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={handleInputChange}
                                required
                            />
                            <label htmlFor="password" className={password ? 'invisible' : ''}>Contraseña</label>
                            <span></span>
                        </div>
                        <div className="recordar">¿Olvido su contraseña?</div>
                        <input type="submit" value='Iniciar' />
                        <div className='registrarse'>
                            Quiero hacer el <a href="#">registro</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;
