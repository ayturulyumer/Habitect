import { useState } from "react";
import { Link } from "react-router";

import GoogleIcon from "../../svg/google-icon.svg";
import LoginIcon from "../../svg/login-icon.svg";
import Button from "../Button/Button.jsx";

import { useForm } from "../../hooks/useForm.jsx";

import * as authApi from "../../api/authApi.js"


export default function LoginForm() {
    const [errors, setErrors] = useState({})

    const handleLoginSubmit = async (values) => {
        const newErrors = {}
        if (!values.email) {
            newErrors.email = "Email is required !"
        }

        if (!values.password) {
            newErrors.password = "Password is required !"
        }

        setErrors(newErrors)

        if (Object.keys(newErrors).length === 0) {
            try {
                const user = await authApi.login(values.email, values.password)
                console.log("User successfully logged in", user)
            } catch (err) {
                console.error("Login failed:", err.message || err.message)
            }
            setErrors({})
        } else {
            console.log(errors)
        }
    }
    const { values, changeHandler, onSubmit } = useForm({ email: "", password: "" }, handleLoginSubmit)

    return (
        <div className="max-w-screen-xl w-[300px]  rounded-box shadow-2xl  flex justify-center sm:w-auto ">
            <div className="h-full p-6">
                <div className="mt-6 flex flex-col items-center">
                    <div className="w-full flex-1 ">
                        <div className="flex flex-col items-center">
                            <Button isBlock iconLeft={GoogleIcon} iconAlt="Google Icon" variant="btn-outline" className="btn-primary-content">Login with google</Button>
                        </div>
                        <div className="my-12 border-b  border-gray-900 text-center">
                            <div className="leading-none px-2 inline-block text-sm   uppercase  tracking-wide font-medium  transform translate-y-1/2">
                                Or
                            </div>
                        </div>
                        <form onSubmit={onSubmit} className="mx-auto max-w-xs">
                            <label htmlFor="email" className="block  mb-2 text-sm font-medium ">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                className="w-full px-4 py-4 rounded-lg  font-medium bg-inherit border border-gray-200  focus:placeholder-gray-700 focus:text-gray-700 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                type="email"
                                value={values.email}
                                onChange={changeHandler}
                                placeholder="habi@tect.com"
                            />
                            {errors.email && <p className="text-red-600 tracking-wider text-sm mt-1">{errors.email}</p>}

                            <label htmlFor="password" className="block mt-5 mb-2 text-sm font-medium ">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                className="w-full px-4 py-4 rounded-lg  bg-inherit font-medium border border-gray-200 text-sm focus:outline-none focus:text-gray-700 focus:border-gray-400 focus:bg-white"
                                type="password"
                                value={values.passowrd}
                                onChange={changeHandler}
                            />
                            {errors.password && <p className="text-red-600 tracking-wider text-sm mt-1">{errors.password}</p>}
                            <Button isBlock iconRight={LoginIcon} iconAlt="Login Icon" className="btn-secondary  mt-8">Login</Button>
                        </form>

                    </div>
                </div>
                <p className="text-center mt-4">Not a member ? <Link to="/signup" className="link mx-1">Create an account</Link></p>
            </div>
        </div>


    )
}
