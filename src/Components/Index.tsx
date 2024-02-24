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
  const [filterOptions, setFilterOptions] = useState<any>([])

  useEffect(() => {
    if (!products.loading) {
      setFilterOptions(products.data.variants)
      setFilterlist(products.data.products)
    }
  }, [products.loading, child])

  return (
    <React.Fragment>
      <Filters setFilterlist={setFilterlist} filterList={filterList} name={name} filterOptions={filterOptions} />
      <CatalogCollection filterList={filterList} cxxl={cxxl} clg={clg} cmd={cmd} cxl={cxl} />
    </React.Fragment>
  )
}

export default Index
