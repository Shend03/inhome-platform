import Link from 'next/link';
import { useRole } from '@/lib/RoleContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function SuperAdminPage() {
  const role = useRole();
  const router = useRouter();

  useEffect(() => {
    if (role !== 'SuperAdmin') router.replace('/');
  }, [role, router]);

  if (role !== 'SuperAdmin') return <p>Po ngarkohet…</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl mb-4">Dashboard SuperAdmin</h1>
      <ul className="space-y-2">
        <li><Link href="/design">Faqja DESIGN</Link></li>
        <li><Link href="/inxhineria">Faqja INXHINIERIA</Link></li>
        <li><Link href="/planifikimi">Faqja PLANIFIKIMI</Link></li>
        <li><Link href="/prodhimi">Faqja PRODHIMI</Link></li>
        <li><Link href="/terreni">Faqja TERRENI</Link></li>
        <li><Link href="/after-sales">Faqja AFTER SALES</Link></li>
        <li><Link href="/logjistika">Faqja LOGJISTIKA</Link></li>
        <li><Link href="/financat">Faqja FINANCAT</Link></li>
      </ul>
    </div>
  );
}