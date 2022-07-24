import Link from "next/link";
import Image from "next/image";

import AvatarImg from "../public/avatar.svg"

export default function Hero(){
    return(
        <div className="grid grid-cols-12 gap-x-5 my-24 items-center">
            <div className="col-span-9">
                <div className="font-bold text-4xl">Merhaba, ben Ferdi.</div>
                <div className="text-2xl font-medium text-gray-500 my-3 leading-relaxed">Front-end Developer ve Wordpress Tema geliştiricisiyim. Tam zamanlı olarak NEXTKUBE'de çalışıyorum.</div>

                <ul className="flex font-semibold gap-x-5">
                    <li>
                        <Link href={'/'}>
                            <a className="text-purpleHeart hover:text-black transition-all">Instagram</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            <a className="text-dodgerBlue hover:text-black transition-all">Twitter</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            <a className="text-scienceBlue hover:text-black transition-all">Linkedin</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            <a className="text-red-500 hover:text-black transition-all">Youtube</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            <a className="text-jade hover:text-black transition-all">Medium</a>
                        </Link>
                    </li>
                </ul>                
            </div>
            <div className="col-span-3">
                <div className="relative bg-gray-100 rounded-full">
                    <div className="bg-blue-600 text-white rounded-full font-semibold text-sm py-2 px-4 absolute top-0 right-0 z-10 select-none">selam...</div>
                    <Image src={AvatarImg} alt={process.env.NEXT_PUBLIC_SITE_NAME} width={220} height={220} />
                </div>
            </div>
        </div>
    )
}