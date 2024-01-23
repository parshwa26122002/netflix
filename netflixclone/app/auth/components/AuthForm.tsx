'use client'

import React, { useState } from "react"
import Input from "./Input"

export default function AuthForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="flex flex-col gap-4">
            <Input label="Username" value={name} id="name" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}/>
            <Input label="Email" value={email} type="email" id="email" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
            <Input label="Password" value={password} type="password" id="password" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">Login</button>
            <p className="text-neutral-500 mt-1 text-sm">
                First time using Netflix?
                <span className="text-white hover:underline ml-1 cursor-pointer">
                    Create an account
                </span>
            </p>
        </div>
    )
}