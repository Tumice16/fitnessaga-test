"use client";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

import { CheckCircle, XCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function EmailVerification() {
    
  const searchParams = useSearchParams();
  const token = searchParams.get("token");


  useEffect(() => {
    console.log('Current URL:', window.location.href);
    console.log('Token from searchParams:', token);
    console.log('All search params:', Object.fromEntries(searchParams.entries()));
  }, [searchParams, token]);

  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) {
        setStatus("error");
        setMessage("Invalid or missing verification token.");
        return;
      }

      try {
        const response = await fetch(
          `https://node.api.fitnessaga.com/api/users/verify-email`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ token }),
          }
        );

        const data = await response.json();

        if (response.ok && data.emailVerified) {
          setStatus("success");
          setMessage(data.message || "Email verified successfully.");
        } else {
          setStatus("error");
          setMessage(data.message || "Failed to verify email.");
        }
      } catch (error) {
        setStatus("error");
        setMessage("An unexpected error occurred. Please try again later.");
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <>
      <Header />

      <section className="bg-gradient-to-br from-[#f0f7ff] to-[#e6f3ff] py-20 text-center min-h-[50vh] flex-col justify-center">
        <div className="container mx-auto px-5 max-w-4xl">
          {status === "loading" && (
            <h1 className="text-lg text-gray-600">Verifying your email...</h1>
          )}

          {status === "success" && (
            <>
              <div className="mb-5 text-[#0052cc] flex flex-col md:flex-row items-center justify-center gap-2">
                <CheckCircle color="#0052cc" className="h-10 w-10" />

                <h1 className="text-xl md:text-4xl font-bold text-[#0052cc] leading-tight">
                  Email verified successfully!
                </h1>
              </div>
              <p className=" md:text-xl text-gray-500 max-w-xl mx-auto mb-10">
                {message}
              </p>
            </>
          )}

          {status === "error" && (
            <>
              <div className="mb-5 text-red-600 flex flex-col md:flex-row items-center justify-center gap-2">
                <XCircle className="h-10 w-10" />

                <h1 className="text-xl md:text-4xl font-bold text-red-600 leading-tight">
                  {message}
                </h1>
              </div>
              <p className=" md:text-xl text-gray-500 max-w-xl mx-auto mb-10">
                Email verification failed, try again
              </p>
            </>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
