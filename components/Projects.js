import Image from "next/image"

export default function Projects({projects}){
    return (
        <div className="my-24">
            <div className="font-bold text-2xl mb-8">Projeler</div>

            {projects.map((item) => (
                <a href={item.link} target="_blank" rel="noreferrer" className="flex items-center" key={item.id}>
                    <div className="shrink-0 bg-gray-100 rounded-md p-5 mr-5">
                        <div className="w-14 h-14">
                            <Image
                                src={item.image.url}
                                alt={item.title}
                                width={52}
                                height={52}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-xl">{item.title}</div>
                        <div className="mt-3 text-gray-400 text-sm">{item.description}</div>
                    </div>
                </a>
            ))}
        </div>
    )
}