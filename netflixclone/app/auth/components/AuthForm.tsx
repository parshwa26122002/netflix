'use client'

import React, { useState, useCallback } from "react"
import Input from "./Input"

export default function AuthForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [variant, setVariant] = useState('login')

    const toggleVariant = useCallback(() => {
        setVariant(variant => variant === 'login' ? 'register' : 'login')
    }, [])

    return (
        <>
            <h2 className="text-white text-4xl font-semibold mb-8">{variant === 'login' ? 'Sign in' : 'Register'}</h2>
            <div className="flex flex-col gap-4">
                {variant === 'register' && (
                    <Input label="Username" value={name} id="name" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}/>
                )}
                <Input label="Email" value={email} type="email" id="email" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
                <Input label="Password" value={password} type="password" id="password" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
                <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">{variant === 'login' ? 'Login' : 'Sign up'}</button>
                <p className="text-neutral-500 mt-1 text-sm">
                    {variant === 'login' ? 'First time using Netflix?' : 'Already have an account?'}
                    <span onClick={toggleVariant} className="text-white hover:underline ml-1 cursor-pointer">
                    {variant === 'login' ? 'Create an account' : 'Login'}      
                    </span>
                </p>
            </div>
        </>
    )
}