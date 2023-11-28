import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Countries Dashbard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

function Header(){
  return <header>header</header>
}

function Footer(){
  return <footer>footer</footer>
}