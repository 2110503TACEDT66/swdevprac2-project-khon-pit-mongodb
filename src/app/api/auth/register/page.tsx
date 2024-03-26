import User from "@/db/models/User"
import { dbConnect } from "@/db/dbConnect"
import Image from "next/image"

export default async function registerPage(){

    const registerUser = async (registerUserForm:FormData) => {
        'use server'
        const name = registerUserForm.get("username")
        const tel = registerUserForm.get("tel")
        const email = registerUserForm.get("email")
        const password = registerUserForm.get("password")
        const role = registerUserForm.get("role")

        try {
            await dbConnect()
            const user = await User.create({
                "name" : name ,
                "tel" : tel ,
                "email" : email ,
                "password" : password ,
                "role" : role 
            })
        }catch(error){
            console.log(error)
        }
    }

    return (
        <div>
            <form action={registerUser} className="z-50">
                <input type="text" name="username"  placeholder="Username" /><br/>
                <input type='text' name="tel"  placeholder="Tel" /><br/>
                <input type="email" name="email"   placeholder="Email" /><br/>
                <input type="password" name="password"  placeholder="Password" /><br/>
                <input type='text' name="role"  placeholder="Role" /><br/>
                <button type="submit" className="bg-blue-500 text-white p-2">Create new account</button>
            </form>
            <div className="z-20">
                <Image
                    src="/img/cover.jpg"
                    alt="cover"
                    fill={true}
                    className="object-cover"
                /> 
            </div>
            
        </div>
    )
}