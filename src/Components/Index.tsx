import React, { useState, useEffect } from 'react'
import CatalogCollection from 'Pages/Catalog/CatalogCollection'
import Filters from 'Pages/Catalog/Filters'

import { useQuery } from 'lib/query-wrapper'

import { getProductsByCategorySlug } from 'lib/common-queries'
import { useParams,useSearchParams } from 'react-router-dom'
import { params } from 'lib/getQueryVariables'

const Index = ({ name, cxxl, clg, cmd, cxl }: any) => {
  let { child } = useParams()

  let [searchParams, setSearchParams] = useSearchParams()
  let { start } = params(searchParams)

  useEffect(()=>{
    if (!start){
      setSearchParams({
        start: "0"
      })
    }
  }, [child])


  const products = useQuery(getProductsByCategorySlug, {
    variables: {
      slug: child,
      start: Number(start)
    }
  })

  const [filterList, setFilterlist] = useState<any>([])
  const [filterOptions, setFilterOptions] = useState<any>([])

  useEffect(() => {
    if (!products.loading) {
      setFilterOptions(products.data.variants)
      setFilterlist(products.data.products)
    }
  }, [products.loading, child, start])

  return (
    <React.Fragment>
      <Filters setFilterlist={setFilterlist} filterList={filterList} name={name} filterOptions={filterOptions} setSearchParams={setSearchParams} />
      <CatalogCollection filterList={filterList} cxxl={cxxl} clg={clg} cmd={cmd} cxl={cxl} />
    </React.Fragment>
  )
}

export default Index
