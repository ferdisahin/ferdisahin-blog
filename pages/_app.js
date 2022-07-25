import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="container mx-auto py-8 font-inter antialiased px-5 lg:px-0">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
