import Link from "next/link"

export default function Post({item}){
    return (
        <div className="grid grid-cols-12 gap-x-5 items-center py-5 border-b border-gray-100 hover:bg-gray-50 px-5 -mx-5 transition-all text-sm md:text-base">
            <div className="col-span-3 sm:col-span-2">{item.date_published}</div>
            <Link href={`/posts/${item.slug}`}>
                <a className="col-span-9 sm:col-span-8 font-bold text-lg md:text-xl">{item.title}</a>
            </Link>
            <div className="col-span-2 hidden sm:flex items-center justify-end">
                {item.categories.map((category) => (
                    <Link key={category.id} href={`${process.env.NEXT_PUBLIC_SITE_URL}/categories/${category.slug}`}>
                        <a className="bg-gray-100 rounded-md text-sm py-1 px-3 mx-1">
                            {category.title}
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    )
}