// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://qbesekkcfriszbgkmotp.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFiZXNla2tjZnJpc3piZ2ttb3RwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzMzQ3NTcsImV4cCI6MjA1MTkxMDc1N30.GF9jzm13bVPMmF1jLAntic-kiJoHRFLtOaeiEjGE1cs";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);