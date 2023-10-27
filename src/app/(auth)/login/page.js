
import React from 'react'
import Link from 'next/link';
import LoginForm from './components/form';

export default function LoginPage() {
  return (
    <>
    
      <main className="w-full bg-login">
        <LoginForm />
      </main>
    </>
  );
}
