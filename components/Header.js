import Link from "next/link"

export default function Header(){
    return(
        <>
            <div className="grid grid-cols-12 gap-x-5 items-center">
                <div className="col-span-12 sm:col-span-4 lg:col-span-2 text-center sm:text-left mb-5 sm:mb-0">
                    <Link href={'/'}>
                        <a className="font-bold text-2xl">
                            {process.env.NEXT_PUBLIC_SITE_NAME}
                        </a>
                    </Link>
                </div>
                <div className="col-span-12 sm:col-span-8 lg:col-span-10">
                    <ul className="flex gap-x-5 text-sm justify-center sm:justify-end font-semibold">
                        <li>
                            <Link href={'/'}><a className="text-gray-500 hover:text-black transition-all">anasayfa.</a></Link>
                        </li>
                        <li>
                            <Link href={`${process.env.NEXT_PUBLIC_SITE_URL}/pages/hakkimda`}><a className="text-gray-500 hover:text-black transition-all">hakkımda.</a></Link>
                        </li>
                        <li>
                            <Link href={`${process.env.NEXT_PUBLIC_SITE_URL}/pages/iletisim`}><a className="text-gray-500 hover:text-black transition-all">iletişim.</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}