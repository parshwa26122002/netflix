import Image from "next/image"
import AuthForm from "./components/AuthForm"

export default function Auth() {

    return (
        <div className="relative bg-[url(/images/hero.jpg)] bg-no-repeat bg-center bg-fixed bg-cover w-full">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <Image src="/images/logo.png" height={80} width={150} alt="Netflix Logo"></Image>
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black p-16 bg-opacity-70 self-center mt-2 mb-12 lg:w-2/5 lg:max-w-md rounded-md w-full border border-red-600">
                        <h2 className="text-white text-4xl font-semibold mb-8">Sign in</h2>
                        <AuthForm />
                    </div>
                </div>
            </div>
        </div>
    )
}