import { createClient } from '@supabase/supabase-js'

// 📌 Usa tus credenciales de Supabase (las sacas del apartado API en tu dashboard)
const SUPABASE_URL = 'https://bblvzxzp...supabase.co'; // https://bbvlzxzpwkywuotsrihb.supabase.co
const SUPABASE_ANON_KEY =eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJidmx6eHpwd2t5d3VvdHNyaWhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2MDE1MjcsImV4cCI6MjA3MDE3NzUyN30.BX-eUoz_0-cQwGpx7V5BDrIcj2xJ6ghWM9x2hYep4hc
; // la clave anónima (anon key) que está en Supabase > Project Settings > API

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)