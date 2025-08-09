import React, { useEffect, useState } from 'react'
import { supabase } from '../utils/supabaseClient'
import { Send, Loader2 } from 'lucide-react'; // Importamos iconos para el botón

export default function TicketForm() {
  const [user, setUser] = useState(null)
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        setUser(user)
        // Llamar a saveUserProfile solo si el usuario es nuevo o necesita actualización
        // En un entorno real, esto se manejaría con un trigger de Supabase o una lógica más compleja
        await saveUserProfile(user) 
      }
    }
    getUser()
  }, [])

  const saveUserProfile = async (user) => {
    const { id, email, user_metadata } = user
    const name = user_metadata?.full_name || email // Usar email si no hay full_name
    const { error } = await supabase
      .from('profiles')
      .upsert([{ id, name, email }], { onConflict: 'id' })
    if (error) console.error('Error guardando perfil:', error)
  }

  const createTicket = async (e) => {
    e.preventDefault()
    if (!user) {
      alert('Debes iniciar sesión para enviar un ticket')
      return
    }
    setLoading(true)
    const { error } = await supabase
      .from('tickets')
      .insert([{ user_id: user.id, subject, message }])
    setLoading(false)
    if (error) {
      console.error('Error creando ticket:', error)
      alert('Error enviando ticket. Por favor, inténtalo de nuevo.')
    } else {
      alert('✅ Ticket enviado con éxito')
      setSubject('')
      setMessage('')
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Enviar Ticket de Soporte</h2>
      <form onSubmit={createTicket} className="space-y-4">
        <div>
          <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Asunto</label>
          <input
            type="text"
            id="subject"
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            placeholder="Ej: Problema con mi entrega de enero"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensaje</label>
          <textarea
            id="message"
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="Describe tu consulta o problema en detalle..."
          />
        </div>
        <button
          type="submit"
          disabled={loading || !user} // Deshabilitar si no hay usuario o está cargando
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={20} /> Enviando...
            </>
          ) : (
            <>
              <Send size={20} /> Enviar Ticket
            </>
          )}
        </button>
        {!user && (
          <p className="text-sm text-red-500 text-center mt-2">
            Por favor, inicia sesión para enviar un ticket.
          </p>
        )}
      </form>
    </div>
  )
}