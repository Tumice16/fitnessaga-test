'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white py-10 border-t">
      <div className="container mx-auto px-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-sm text-gray-500">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/assets/images/fitness-saga.jpg"
              alt="Fitness Saga logo"
              width={100}
              height={40}
              priority
              unoptimized
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-2 md:gap-6 flex-wrap  md:justify-end text-sm">
          <li>
            <Link href="/privacy-policy" className="hover:text-[#0052cc]">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/terms" className="hover:text-[#0052cc]">
              Terms of Service
            </Link>
          </li>
          <li>
            <a href="mailto:support@fitnessaga.com" className="hover:text-[#0052cc]">
              Support
            </a>
          </li>
        </ul>

        {/* Ownership Info */}
        <div className="md:text-right w-full md:w-auto">
          <p className="mb-1">
            Fitness Saga is owned and operated by   <a
              href="https://theslimprep.com"
              target="_blank"
              className="text-blue-600 hover:underline font-medium"
            >
              TheSlimPrep
            </a>, based in Canada.
          </p>
          <p>© {new Date().getFullYear()} Fitness Saga. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
