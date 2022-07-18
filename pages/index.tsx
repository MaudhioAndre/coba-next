import type { NextPage } from 'next'

import Layout from '../components/Layouts'

const Home: NextPage = () => {
  return (
      <Layout titlePage={'HOMEPAGE'}>
      <h2 className='title'>Welcome!</h2>
      </Layout>
  )
}

export default Home
