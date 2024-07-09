import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppaHBxZWdpaWRuY2N6dWZ4YWpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk2MDAzMTksImV4cCI6MjAzNTE3NjMxOX0.dY--X76L7s3eKyDKnwq620HenLfjZUDT4WxV1YHKIPI";
const supabaseUrl = "https://jihpqegiidncczufxajp.supabase.co";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
