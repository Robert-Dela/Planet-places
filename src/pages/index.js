import Head from 'next/head'
import CountriesTable from '../components/CountriesTable/CountriesTable'
import Layout from '../components/Layout/layout'
import SearchInput from '../components/SearchInput/SearchInput'
import styles from '../styles/Home.module.css'

export default function Home( {countries}) {

  const { counts,

  }= styles

  return (
    <Layout>
      <div className={counts}>
        Found {countries.length} countries
      </div>
      <SearchInput placeholder="Filter by Name, Region or Subregion"/>
      <CountriesTable countries = {countries}/>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all")
  const countries = await res.json()

  return {
    props: {
      countries,
    }
  }
}