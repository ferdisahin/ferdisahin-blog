import Head from "next/head";
import { GraphQLClient, gql } from "graphql-request";
import Link from "next/link";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const graphcms = new GraphQLClient(process.env.GRAPHCMS_CONTENT_API);

const QUERY = gql`
  query Post($slug: String!){
    post(where: {slug: $slug}){
        id,
        title,
        date_published,
        slug,
        content{
          html
        },
        author{
          name,
          avatar{
            url
          }
        },
        coverPhoto{
          url
        },
        categories{
          id,
          title,
          slug
        }        
    },
  }
`

const SLUGLIST = gql`
  {
    posts{
        slug
    }
  }
`

export async function getStaticPaths(){
    const {posts} = await graphcms.request(SLUGLIST);
    return{
        paths: posts.map((post) => ({params: {slug: post.slug}})),
        fallback: false
    }
}

export async function getServerSideProps({params}){
    const slug = params.slug;
  const data = await graphcms.request(QUERY, {slug});
  const post = data.post;
  return{
    props: {
      post,
    },
    revalidate: 10
  }
}

export default function Post({post}){
    return (
        <>

            <Head>
                <title>{`${post.title} - ${process.env.NEXT_PUBLIC_SITE_NAME}`}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />      
            </Head>

            <Header />

            <div className="my-24">
                <h1 className="font-bold text-xl md:text-3xl">{post.title}</h1>

                <ul className="flex -mx-1">
                {post.categories.map((category) => (
                    <li className="mx-1" key={category.id}>                  
                      <Link href={`${process.env.NEXT_PUBLIC_SITE_URL}/categories/${category.slug}`}>
                            <a className="bg-gray-100 rounded-md text-sm py-1 px-3 mr-1 my-2 block">
                                {category.title}
                            </a>                     
                      </Link>
                    </li>                       
                ))}                
                </ul>


                <div className="text-content text-gray-500 mt-2 md:mt-5" dangerouslySetInnerHTML={{__html: post.content.html}} />
            </div>

            <Footer />
        </>
    )
}
