'use client';
import Layout from '@/_components/Layout';
import Main from '@/_components/Main';
import { supabase } from '@/signin/page';
import { useRouter } from 'next/navigation';

export default async function Page() {
  const router = useRouter();
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };
  return (
    <Layout>
      <Main>
        <button onClick={handleSignOut}>Sign out</button>
      </Main>
    </Layout>
  );
}
