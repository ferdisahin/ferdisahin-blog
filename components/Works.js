import Image from "next/image"

export default function Works({works}){
    return (
        works.length > 0 ? (
        <div className="my-24">
            <div className="font-bold text-2xl mb-8">Referanslar</div>

            <div className="grid md:grid-cols-2 gap-x-5">
                    {works.map((item) => (
                        <div key={item.id} className="mb-5 md:mb-0">
                            <div className="relative">
                                <Image
                                    className="w-full h-80 object-cover"
                                    src={item.thumbnail.url}
                                    alt={item.title}
                                    width={600}
                                    height={320}
                                />
                            </div>
                            <div className="mt-5">
                                <div className="font-bold text-xl">{item.title}</div>
                                <div className="mt-2 text-gray-400">{item.description}</div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
        ) : ""
    )
}