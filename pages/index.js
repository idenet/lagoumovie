import Swiper, { loadSwiper } from './../components/Swiper'
import Movie, { loadMovie } from '../components/Movie'
import Layout from '../components/Layout'

export default function Home({ swiper, movie }) {
  return (
    <Layout>
      <Swiper data={swiper}></Swiper>
      <Movie data={movie} title="电影"></Movie>
    </Layout>
  )
}

export async function getStaticProps() {
  let { data: swiper } = await loadSwiper()
  // 获取电影列表数据
  let { data: movie } = await loadMovie()
  return {
    props: {
      swiper,
      movie,
    },
  }
}
