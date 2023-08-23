import Input from '@/components/Input'
import React from 'react'
import { useCallback, useState } from 'react';



const Auth = () => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const [variant, setVariant] = useState('login')

    const togglevariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
    },[])

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-fixed bg-no-repeat bg-center bg-cover">
        <div className='bg-black w-full h-full lg:bg-opacity-50'>
            <nav className='px-12 py-5'>
            <img src='/images/logo.png' alt='logo' className='h-12' />
            </nav>
            <div className='flex justify-center'>
                <div className='bg-black bg-opacity-70 px-16 py-16 self-center 
                mt-2 lg:w-2/5 lg:w-md rounded-md w-full'>
                    <h2 className='text-white text-4xl mb-8 font-semibold'
                    >{variant === 'login' ? 'Sign in' : 'Register'}</h2>
                    <div className='flex flex-col gap-4'>
                    {variant === 'register' && (
                    <Input
                    id="Username"
                    type="Username"
                    label="Username"
                    value={name}
                    onChange={(e: any) => setEmail(e.target.value)} 
                    />
                    )}
                    <Input
                    id="email"
                    type="email"
                    label="Email address or phone number"
                    value={email}
                    onChange={(e: any) => setName(e.target.value)} 
                    />
                    <Input
                    id="Password"
                    type="Password"
                    label="Password"
                    value={password}
                    onChange={(e: any) => setPassword(e.target.value)} 
                    />
                    </div>
                    <button className='gap-4 bg-red-600 mt-3 py-3 text-white rounded-md w-full
                    hover:bg-red-800 transition'>
                        {variant === 'login' ? 'Login' : 'Sign up'}
                    </button>
                    <p className='text-neutral-500 mt-12 text-center'>
                    {variant === 'login' ? 'First time using Netflix?' : 'Already have an account?'}
                        <span 
                        onClick={togglevariant}
                        className="text-white ml-1 hover:underline cursor-pointer"
                        >{variant === 'login' ? 'Create an account' : 'Login'}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Auth;