// src/lib/RoleContext.tsx
import React, { createContext, useContext, ReactNode } from 'react';
import { useSession } from 'next-auth/react';

const RoleContext = createContext<string | null>(null);

export function RoleProvider({ children }: { children: ReactNode }) {
  const { data: session } = useSession();
  const role = (session as any)?.user?.role || null;
  return (
    <RoleContext.Provider value={role}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  const ctx = useContext(RoleContext);
  if (ctx === undefined) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return ctx;
}
