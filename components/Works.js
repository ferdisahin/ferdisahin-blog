import Image from "next/image"

export default function Works({works}){
    return (
        <div className="my-24">
            <div className="font-bold text-2xl mb-8">Referanslar</div>

            <div className="grid grid-cols-2 gap-x-5">
                    {works.map((item) => (
                        <div key={item.id}>
                            <div className="w-full h-80 relative">
                                <Image
                                    src={item.thumbnail.url}
                                    alt={item.title}
                                    layout="fill"
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
    )
}