import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <p>Hello NextJS</p>
    </div>
  )
}

export default Home

export async function getServerSideProps() {
  return {
    redirect: {
      permanent: true,
      destination: "https://www.swifty.sg"
    }
  }
}