'use client';

import { RedirectToSignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return <RedirectToSignIn redirectUrl="/" />;
}
