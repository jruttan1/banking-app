import AuthForm from '@/components/AuthForm'
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'
import { redirect } from 'next/navigation';

const SignIn = async () => {
  const loggedInUser = await getLoggedInUser();
  if (loggedInUser) {
    redirect('/')
  }
    console.log(loggedInUser)
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-in" />
    </section>
  )
}

export default SignIn
