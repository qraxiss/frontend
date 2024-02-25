import Filters from 'Pages/Catalog/Filters'
import { useQuery } from 'lib/query-wrapper'
import { params } from 'lib/getQueryVariables'
import React, { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { getProductsByCategorySlug } from 'lib/common-queries'
import CatalogCollection from 'Pages/Catalog/CatalogCollection'
import { filterSettingsType, productListType, productVariant } from 'models/ProductType'

const Index = ({ name, cxxl, clg, cmd, cxl }: any) => {
  let { child } = useParams()
  let [searchParams, setSearchParams] = useSearchParams()
  let { start } = params(searchParams)
  const [filterList, setFilterlist] = useState<productListType[]>([])
  const [filterSettings, setFilterSettings] = useState<filterSettingsType[]>([])

  const products = useQuery(getProductsByCategorySlug, {
    variables: {
      slug: child,
      start: Number(start)
    }
  })

  useEffect(() => {
    if (!start) {
      setSearchParams({
        start: '0'
      })
    }
  }, [child])

  useEffect(() => {
    if (!products.loading) {
      SetFiltersComponent(products.data.variants)
      console.log(products.data.variants)
      console.log(products.data.products)

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
  const SetFiltersComponent = (Data: productVariant[]) => {
    let temp: any = []
    Data.forEach((data: any) => {
      temp.push({ name: data.name, options: data.options, open: false, choosen: [] })
    })
    setFilterSettings(temp)
  }

  const filterTheList = (filterData: filterSettingsType[], products: productListType[]) => {
    let filteredList: productListType[] = []

    // Her bir filtre objesi için
    filterData.forEach((filter: filterSettingsType) => {
      // Filtre listesi doluysa
      if (filter.choosen.length) {
        // Here bir filtre için
        filter.choosen.forEach((choose: string) => {
          // Her bir ürüne bakıyoruz
          products.forEach((product: productListType) => {
            // Aradığımız filtre isminde variant listesine bakıyoruz
            let _variant = product.variants.find((variant: productVariant) => variant.name === filter.name)
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
