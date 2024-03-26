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
            <Image
                src="/img/cover.jpg"
                alt="cover"
                fill={true}
                className="object-cover"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            />
            <div className="flex justify-center items-center h-screen">
                <div className="absolute">
                    <form action={registerUser} >
                        <input type="text" name="username" placeholder="Username" className="rounded-2xl m-3 p-2 "/><br/>
                        <input type='text' name="tel" placeholder="Tel" className="rounded-2xl m-3 p-2 " /><br/>
                        <input type="email" name="email" placeholder="Email" className="rounded-2xl m-3 p-2 "/><br/>
                        <input type="password" name="password" placeholder="Password" className="rounded-2xl m-3 p-2 " /><br/>
                        <input type='text' name="role" placeholder="Role" className="rounded-2xl m-3 p-2 "/><br/>
                    </form>
                    <button type="submit" className="bg-blue-500 text-white p-2 m-3 rounded-lg ">Create new account</button>
                </div>
            </div>
        </div>
    );
}