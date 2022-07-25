import Link from "next/link";

import Post from "./Post";

export default function Posts({posts}){
    return (
        <div className="my-24">
            <div className="font-bold text-2xl mb-8">Yazılar</div>

            {
                posts.length > 0 ?
                posts.map((item) => (
                    <Post key={item.id} item={item} />
                )).sort().reverse()
                :
                (<p className="text-gray-500">Ne yazık ki hiç yazı yazılmamış!</p>)
            }
        </div>
    )
}