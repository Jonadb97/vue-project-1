import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://ioeyiezuthnrlvoqzcbq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlvZXlpZXp1dGhucmx2b3F6Y2JxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU3NjMzMDcsImV4cCI6MjAwMTMzOTMwN30.ZdeAD--FBEItnBrw_eVdvV8J1mwZ7S01_eHerKbNi38')