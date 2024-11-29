import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://mgebkksabfubxfiwuaww.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1nZWJra3NhYmZ1YnhmaXd1YXd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI4NjY1OTgsImV4cCI6MjA0ODQ0MjU5OH0.Psyzax8VI45D81byt89LWitopiR_4aV5sPbZrbEV8S0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
