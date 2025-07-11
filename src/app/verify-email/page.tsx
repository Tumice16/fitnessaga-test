"use client";
import { Suspense } from "react";
import EmailVerification from "@/components/EmailVerification";

export default function verifyEmail() {
  return (
    <>

      <Suspense fallback={<p className="text-center mt-10">Loading...</p>}>
        <EmailVerification />
      </Suspense>

    </>
  );
}
