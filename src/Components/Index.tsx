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

  useEffect(() => {
    if (!start) {
      setSearchParams({
        start: '0'
      })
    }
  }, [child])

  const products = useQuery(getProductsByCategorySlug, {
    variables: {
      slug: child,
      start: Number(start)
    }
  })

  const [filterList, setFilterlist] = useState<filterListType[]>([])
  const [filterSettings, setFilterSettings] = useState<filterSettingsType[]>([])

  type filterSettingsType = { name: string; options: { value: string; id: number }[]; choosen: string[]; open: boolean }
  type filterListType = {
    price: number
    name: string
    slug: string
    images: { url: string }[]
    variants: variant[]
  }
  type variant = {
    options: { value: string }[]
    name: string
  }

  useEffect(() => {
    if (!products.loading) {
      SetFiltersComponent(products.data.variants)

      setFilterlist(products.data.products)
    }
  }, [products.loading, child, start])

  // Filtre kalmamışsa eski ürünlere göster
  useEffect(() => {
    if (products.loading) return
    let isFiltered = false

    filterSettings.forEach((filter: filterSettingsType) => {
      if (filter.choosen.length !== 0) isFiltered = true
      filterTheList(filterSettings, filterList)
    })
    if (!isFiltered) setFilterlist(products.data.products)
  }, [filterSettings])

  // Backendden gelen veriyi filtrelemek için uygun hale getiren manipülasyon
  const SetFiltersComponent = (Data: any) => {
    let temp: any = []
    Data.forEach((data: any) => {
      temp.push({ name: data.name, options: data.options, open: false, choosen: [] })
    })
    setFilterSettings(temp)
  }

  const filterTheList = (filterData: filterSettingsType[], products: filterListType[]) => {
    let filteredList: filterListType[] = []

    // Her bir filtre objesi için
    filterData.forEach((filter: filterSettingsType) => {
      // Filtre listesi doluysa
      if (filter.choosen.length) {
        // Here bir filtre için
        filter.choosen.forEach((choose: string) => {
          // Her bir ürüne bakıyoruz
          products.forEach((product: filterListType) => {
            // Aradığımız filtre isminde variant listesine bakıyoruz
            let _variant = product.variants.find((variant: variant) => variant.name === filter.name)
            console.log(_variant)
            // Eğer aradığımız varyant var ise
            if (_variant) {
              // Eğer bu ürün eklenmemişse ekle
              let _option = _variant.options.find((option) => option.value === choose)
              if (_option && !filteredList.find((_product) => _product.slug === product.slug)) {
                filteredList.push(product)
              }
              // Ürünü listemize ekledik
            }
          })
        })
      }
    })

    setFilterlist(filteredList)
  }

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