import React, { useState } from 'react'
import CatalogCollection from 'Pages/Catalog/CatalogCollection'
import Filters from 'Pages/Catalog/Filters'
import { filterProduct } from 'Common/data'

import { useQuery } from 'lib/query-wrapper'

import { getProductsByCategorySlug } from 'lib/common-queries'

import { useParams } from 'react-router-dom'

const Index = ({ name, cxxl, clg, cmd, cxl }: any) => {
    let { child } = useParams()
  
    const products = useQuery(getProductsByCategorySlug, {
      variables: {
        slug: child
      }
    })

    if (!products.loading){
        console.log(products.data)
    }

  const [filterList, setFilterlist] = useState<any>(filterProduct)
  return (
    <React.Fragment>
      <Filters setFilterlist={setFilterlist} filterList={filterList} name={name} filterOptions={!products.loading ? products.data : []} />
      <CatalogCollection filterList={filterList} cxxl={cxxl} clg={clg} cmd={cmd} cxl={cxl} />
    </React.Fragment>
  )
}

export default Index
