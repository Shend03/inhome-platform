import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function HomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      const role = session.user.role;
      let path = '/';
      switch (role) {
        case 'SuperAdmin': path = '/superadmin'; break;
        case 'DESIGN': path = '/design'; break;
        case 'INXHINIERIA': path = '/inxhineria'; break;
        case 'PLANIFIKIMI': path = '/planifikimi'; break;
        case 'PRODHIMI': path = '/prodhimi'; break;
        case 'TERRENI': path = '/terreni'; break;
        case 'AFTER_SALES': path = '/after-sales'; break;
        case 'LOGJISTIKA': path = '/logjistika'; break;
        case 'FINANCAT': path = '/financat'; break;
        default: path = '/';
      }
      router.replace(path);
    }
  }, [status, session, router]);

  if (status === 'loading') return <p>Po ngarkohet…</p>;
  if (!session) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-2xl mb-4">Mirësevini në Platformë</h1>
        <button
          onClick={() => signIn('google')}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Kyçu me Google
        </button>
      </div>
    );
  }

  return <p>Po ridrejtohem…</p>;
}