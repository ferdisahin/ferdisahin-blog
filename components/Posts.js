import Link from "next/link";

import Post from "./Post";

export default function Posts({posts}){
    return (
        <div className="my-24">
            <div className="font-bold text-2xl mb-8">Yazılar</div>

            {posts.map((item) => (
                <Post key={item.id} item={item} />
            )).sort().reverse()}
        </div>
    )
}