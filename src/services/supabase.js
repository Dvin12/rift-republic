import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://skjugsldgwilcmtpzrfm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNranVnc2xkZ3dpbGNtdHB6cmZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk5MTAyNDMsImV4cCI6MjAxNTQ4NjI0M30.AE06gdS0my8PA3wOIVHSA_TMEwxBkz43EqUZhg8YJ6o";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
