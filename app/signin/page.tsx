'use client';
import Layout from '@/_components/Layout';
import Main from '@/_components/Main';
import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';

export const supabase = createClient(
  'https://frjarebqnyavrwbrujtl.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyamFyZWJxbnlhdnJ3YnJ1anRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc3ODQ1MzcsImV4cCI6MjAxMzM2MDUzN30.9XNWNqRT6I6KokeWTr0GxYCPz9qmOuOl94zW-0rfWYk',
);

export default async function Page() {
  return (
    <Layout>
      <Main>
        <Auth supabaseClient={supabase} />
      </Main>
    </Layout>
  );
}
