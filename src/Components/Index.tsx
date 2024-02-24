import React, { useState, useEffect } from 'react'
import CatalogCollection from 'Pages/Catalog/CatalogCollection'
import Filters from 'Pages/Catalog/Filters'

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


  const [filterList, setFilterlist] = useState<any>([])

  useEffect(()=>{
    if (!products.loading){
      console.log(products)
      setFilterlist(products.data.category.products)
    }

  },[products.loading, child])

  return (
    <React.Fragment>
      <Filters setFilterlist={setFilterlist} filterList={filterList} name={name} filterOptions={!products.loading ? products.data : []} />
      <CatalogCollection filterList={filterList} cxxl={cxxl} clg={clg} cmd={cmd} cxl={cxl} />
    </React.Fragment>
  )
}

export default Index
