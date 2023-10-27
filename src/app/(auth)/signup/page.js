import React from 'react'
import Link from "next/link";
import SignUpForm from './components/sigup';

export default function SignUpPage() {
  return (
    <>
      <main className="w-full bg-signin ">
        <SignUpForm />
      </main>
    </>
  );
}
