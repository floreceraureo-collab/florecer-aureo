import React, { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import { LogIn, LogOut, Loader2 } from 'lucide-react'; // Importamos iconos

export default function AuthButtons() {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  const signInWithGoogle = async () => {
    setLoading(true)
    const { error } = await supabase.auth.signInWithOAuth({ provider: 'google' })
    if (error) {
      console.error('Error al iniciar sesión con Google:', error.message)
      alert('Error al iniciar sesión con Google. Por favor, inténtalo de nuevo.')
    }
    setLoading(false)
  }

  const signOut = async () => {
    setLoading(true)
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error('Error al cerrar sesión:', error.message)
      alert('Error al cerrar sesión. Por favor, inténtalo de nuevo.')
    } else {
      // Recargar la página para asegurar que el estado de la UI se actualice
      window.location.reload() 
    }
    setLoading(false)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center p-4">
        <Loader2 className="animate-spin text-gray-500" size={24} />
      </div>
    )
  }

  return (
    <div className="flex gap-4 p-4 bg-gray-50 rounded-xl shadow-sm border border-gray-100">
      {session ? (
        <button
          onClick={signOut}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 flex items-center gap-2"
        >
          <LogOut size={20} /> Cerrar sesión
        </button>
      ) : (
        <button
          onClick={signInWithGoogle}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 flex items-center gap-2"
        >
          <LogIn size={20} /> Iniciar sesión con Google
        </button>
      )}
    </div>
  )
}