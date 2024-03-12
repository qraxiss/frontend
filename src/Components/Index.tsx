import Filters from 'Pages/Catalog/Filters'
import { useQuery } from 'lib/query-wrapper'
import { params } from 'lib/getQueryVariables'
import React, { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { getProductsByCategorySlug } from 'lib/common-queries'
import CatalogCollection from 'Pages/Catalog/CatalogCollection'
import { filterSettingsType, productListType, productVariant } from 'models/ProductType'

const Index = ({ name, cxxl, clg, cmd, cxl }: any) => {
    let { category } = useParams()
    let [searchParams, setSearchParams] = useSearchParams()
    let { start } = params(searchParams)
    const [filterList, setFilterlist] = useState<productListType[]>([])
    const [filterSettings, setFilterSettings] = useState<filterSettingsType[]>([])

    const products = useQuery(getProductsByCategorySlug, {
        variables: {
            slug: category,
            start: Number(start)
        }
    })

    return (
        <React.Fragment>
            <Filters
                setFilterlist={setFilterlist}
                filterList={filterList}
                name={name}
                filterSettings={filterSettings}
                setFilterSettings={setFilterSettings}
                setSearchParams={setSearchParams}
            />
            <CatalogCollection filterList={filterList} cxxl={cxxl} clg={clg} cmd={cmd} cxl={cxl} />
        </React.Fragment>
    )
}

export default Index
