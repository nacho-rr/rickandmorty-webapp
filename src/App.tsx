import { useEffect, useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import Layout from "./components/Layout"
import List from "./components/List"

const App = () => {
  const [selector, setSelector] = useState('characters')
  const [query, setQuery] = useState('rick')
  
  const querySearch = gql`
  query {
    characters(filter: {name: "${query}"}) {
      results {
        name
      }
    }
  }
  `
  const { loading, error, data } = useQuery(querySearch)
  
  return(
    <Layout selector={selector} onChange={setSelector} >
      <List loading={loading} data={data} />
    </Layout>
  )
}

export default App
