import { useRole } from '@/lib/RoleContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { FormaInHomeData } from '@/components/FormaInHomeData';

export default function PlanifikimiPage() {
  const role = useRole(); const router = useRouter();
  useEffect(() => { if (role !== 'PLANIFIKIMI') router.replace('/'); }, [role, router]);
  if (role !== 'PLANIFIKIMI') return <p>Po ngarkohet…</p>;
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl mb-4">Faqja PLANIFIKIMI</h1>
      <FormaInHomeData />
    </div>
  );
}