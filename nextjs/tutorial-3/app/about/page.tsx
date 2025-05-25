"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export default function About() {
  const router = useRouter();
  return (
    <div className="">
      <h1>About Us</h1>
      <button onClick={() => router.push('/')} className="bg-blue-500 text-white p-2 rounded-md">Go home</button>
    </div>
  )
}
