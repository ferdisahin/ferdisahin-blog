import Link from "next/link"
import {RiSearch2Line} from "react-icons/ri"

export default function Header(){
    return(
        <>
            <div className="grid grid-cols-12 gap-x-5 items-center">
                <div className="col-span-2">
                    <Link href={'/'}>
                        <a className="font-bold text-2xl">
                            {process.env.NEXT_PUBLIC_SITE_NAME}
                        </a>
                    </Link>
                </div>
                <div className="col-span-4">
                    <form className="flex px-3 rounded-md bg-gray-100">
                        <input type="text" placeholder="Arama Yap..." className="outline-none bg-transparent flex-1 h-10 text-gray-600" />
                        <button className="shrink-0 text-gray-500">
                            <RiSearch2Line />
                        </button>
                    </form>
                </div>
                <div className="col-span-6">
                    <ul className="flex gap-x-5 text-sm justify-end font-semibold">
                        <li>
                            <Link href={'/'}><a className="text-gray-500 hover:text-black transition-all">anasayfa.</a></Link>
                        </li>
                        <li>
                            <Link href={'/about'}><a className="text-gray-500 hover:text-black transition-all">hakkımda.</a></Link>
                        </li>
                        <li>
                            <Link href="/"><a className="text-gray-500 hover:text-black transition-all">iletişim.</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}