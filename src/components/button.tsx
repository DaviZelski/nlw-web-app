import { ComponentProps, ReactNode } from "react"

interface Buttonprops extends ComponentProps<'button'>{}

export function Button(props: Buttonprops){
    return (
        <button className="flex justify-between items-center px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900 "
        {...props}
        />
    )
}