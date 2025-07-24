import { useRole } from '@/lib/RoleContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { FormaInHomeData } from '@/components/FormaInHomeData';

export default function AfterSalesPage() {
  const role = useRole(); const router = useRouter();
  useEffect(() => { if (role !== 'AFTER_SALES') router.replace('/'); }, [role, router]);
  if (role !== 'AFTER_SALES') return <p>Po ngarkohet…</p>;
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl mb-4">Faqja AFTER SALES</h1>
      <FormaInHomeData />
    </div>
  );
}