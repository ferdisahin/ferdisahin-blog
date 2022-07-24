import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="container mx-auto py-8 font-inter antialiased">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
