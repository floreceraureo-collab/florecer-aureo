import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabaseUrl = https://bbvlzxzpwkywuotsrihb.supabase.co
const supabaseKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJidmx6eHpwd2t5d3VvdHNyaWhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2MDE1MjcsImV4cCI6MjA3MDE3NzUyN30.BX-eUoz_0-cQwGpx7V5BDrIcj2xJ6ghWM9x2hYep4hc
export const supabase = createClient(supabaseUrl, supabaseKey)
