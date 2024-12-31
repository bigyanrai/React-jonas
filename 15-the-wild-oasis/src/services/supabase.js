import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://hcpyzbkvrfncjkuazjwl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjcHl6Ymt2cmZuY2prdWF6andsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1NTQ4MDYsImV4cCI6MjA1MTEzMDgwNn0.uKOsR7CLv9gvtlPX7VVVCiYE7RqtVH6ojXNDYZ6jI8Q";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
