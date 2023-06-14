import React, { useContext, useState } from 'react'
import { AuthContext } from '../AuthContext'

const Login = () => {
  const { login } = useContext(AuthContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    // Realiza la lógica de autenticación, como enviar las credenciales al servidor
    const userData = {
      username,
      role: 'admin', // Establece el rol del usuario, aquí se asume que el usuario es un administrador
    }

    login(userData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Nombre de usuario"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Contraseña"
      />
      <button type="submit">Iniciar sesión</button>
    </form>
  )
}

export default Login
