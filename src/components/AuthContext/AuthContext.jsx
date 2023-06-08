import React, { createContext, useState } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const login = (userData) => {
    // Aquí puedes realizar la lógica de autenticación, como verificar las credenciales en una base de datos
    // Si las credenciales son válidas, establece el usuario en el estado
    setUser(userData)
  }

  const logout = () => {
    // Limpiar el estado del usuario al cerrar sesión
    setUser(null)
  }

  const isAdmin = () => {
    // Verifica si el usuario tiene el rol de administrador
    return user && user.role === 'admin'
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
