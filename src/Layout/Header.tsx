import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Dropdown, Button, Row, Col, Card, Modal, Image, Navbar, Nav, Form } from 'react-bootstrap'

import { CardModal, SearchModal } from 'Components/MainModal'
import { withTranslation } from 'react-i18next'
import withRouter from 'Components/withRouter'

import { useQuery } from 'lib/query-wrapper'
import { gql } from '@apollo/client'
import config from 'config/config'
import { cartQuery } from 'lib/common-queries'

const query = gql`
  query {
    parentCategories {
      data {
        attributes {
          name
          slug
          childs {
            data {
              attributes {
                name
                slug
              }
            }
          }
        }
      }
    }
    logo {
      data {
        attributes {
          text {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }

    profilePicture {
      url
    }

    icon {
      data {
        attributes {
          account {
            data {
              attributes {
                url
              }
            }
          }
          cart {
            data {
              attributes {
                url
              }
            }
          }
          wishlist {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`
function ShoppingIcon(props: { handlecardShow: any; iconPath: string }) {
  let { data, loading, error } = useQuery(cartQuery)

  const [cartCount, setCartCount] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  useEffect(() => {
    if (error) {
      return
    }
    if (data && !loading && !error) {
      setCartCount(data.length)

      let subtotal = 0
      for (let i = 0; i < data.length; i++) {
        subtotal += data[i].product.price * data[i].count
      }
      setTotalPrice(subtotal)
    }
  }, [loading])

  return (
    <div className="topbar-head-dropdown ms-1 header-item">
      <Button
        type="button"
        className="btn btn-icon btn-topbar btn-ghost-dark rounded-circle text-muted"
        data-bs-toggle="offcanvas"
        data-bs-target="#ecommerceCart"
        aria-controls="ecommerceCart"
        onClick={props.handlecardShow}
      >
        {/* <i className="ph-shopping-cart fs-18"></i> */}
        <Image className="rounded-circle header-profile-user" src={props.iconPath} alt="Header Avatar" />
        <span className="position-absolute topbar-badge cartitem-badge fs-10 translate-middle badge rounded-pill bg-danger">{cartCount}</span>
      </Button>
      ${totalPrice}
    </div>
  )
}

function WishListIcon(props: { handlecardShow: any; iconPath: string }) {
  return (
    <div className="topbar-head-dropdown ms-1 header-item">
      <Button
        type="button"
        className="btn btn-icon btn-topbar btn-ghost-dark rounded-circle text-muted"
        data-bs-toggle="offcanvas"
        data-bs-target="#ecommerceCart"
        aria-controls="ecommerceCart"
        onClick={props.handlecardShow}
      >
        <Image className="rounded-circle header-profile-user" src={props.iconPath} alt="Header Avatar" />
        <span className="position-absolute topbar-badge cartitem-badge fs-10 translate-middle badge rounded-pill bg-danger">0</span>
      </Button>
    </div>
  )
}

function Account(props: { iconPath: string }) {
  let jwt = localStorage.getItem('jwt')

  return (
    <div className="dropdown header-item dropdown-hover-end">
      <Dropdown>
        <Dropdown.Toggle id="page-header-user-dropdown" bsPrefix="btn" className="btn btn-icon btn-topbar btn-link rounded-circle" as="a">
          <Image className="rounded-circle header-profile-user" src={props.iconPath} alt="Header Avatar" />
        </Dropdown.Toggle>

        {jwt ? (
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to="/shop/orders">
                <i className="bi bi-truck text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Track Orders</span>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/account">
                <span className="badge bg-success-subtle text-success mt-1 float-end">New</span>
                <i className="mdi mdi-cog-outline text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Settings</span>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/logout">
                <i className="bi bi-box-arrow-right text-muted fs-16 align-middle me-1"></i>{' '}
                <span className="align-middle" data-key="t-logout">
                  Logout
                </span>
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        ) : (
          <Dropdown.Menu>
            <Dropdown.Item href="/signin">
              <i className="bi bi-box-arrow-right text-muted fs-16 align-middle me-1"></i>{' '}
              <span className="align-middle" data-key="t-logout">
                Sign In
              </span>
            </Dropdown.Item>
            <Dropdown.Item href="/signup">
              <i className="bi bi-box-arrow-right text-muted fs-16 align-middle me-1"></i>{' '}
              <span className="align-middle" data-key="t-logout">
                Sign Up
              </span>
            </Dropdown.Item>
          </Dropdown.Menu>
        )}
      </Dropdown>
    </div>
  )
}

function Pages(props: { categories: any; menuShow: any; showMenu: any; t: any }) {
  let pages = props.categories.map((item: any) => {
    return (
      <li className="dropdown nav-item dropdown-hover" key={item.slug}>
        <Link
          className="dropdown-toggle nav-link"
          data-key="t-home"
          to={`/${item.slug}`}
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={(e) => {
            e.preventDefault()
            props.menuShow(item.name)
          }}
        >
          {(item.name as string).toUpperCase()}
        </Link>

        <ul
          className={
            props.showMenu === item.name
              ? 'dropdown-menu dropdown-menu-md dropdown-menu-center dropdown-menu-list submenu show'
              : 'dropdown-menu dropdown-menu-md dropdown-menu-center dropdown-menu-list submenu'
          }
        >
          {item.childs.map((child: any) => {
            return (
              <li className="nav-item" key={`${item.slug}-${child.slug}`}>
                <Link to={`/category/${item.slug}/${child.slug}`} className="nav-link" data-key={child.slug}>
                  {props.t(child.name)}
                </Link>
              </li>
            )
          })}
        </ul>
      </li>
    )
  })
  return pages
}

function Search(props: { handleShow: any }) {
  return (
    <Button
      type="button"
      className="btn btn-icon btn-topbar btn-ghost-dark rounded-circle text-muted"
      data-bs-toggle="modal"
      data-bs-target="#searchModal"
      onClick={props.handleShow}
    >
      <i className="bx bx-search fs-22"></i>
    </Button>
  )
}

function Logo(props: { logo: any }) {
  return (
    <Navbar.Brand className="d-none d-lg-block">
      <Link to="/">
        <div className="logo-dark">
          <Image src={props.logo.text.url} alt="" height="50" />
        </div>
        <div className="logo-light">
          <Image src={props.logo.text.url} alt="" height="50" />
        </div>
      </Link>
    </Navbar.Brand>
  )
}

function MoreButton(props: { handleShowColl: any }) {
  return (
    <Button className="btn btn-soft-primary btn-icon d-lg-none collapsed" aria-controls="navbarSupportedContent" onClick={props.handleShowColl}>
      <i className="bi bi-list fs-20"></i>
    </Button>
  )
}

function SideLogo(props: { logo: any }) {
  return (
    <li className="nav-item d-block d-lg-none">
      <Link to="/" className="d-block p-3 h-auto text-center">
        <Image src={props.logo.text.url} alt="" height="25" className="card-logo-dark mx-auto" />
      </Link>
      <Link to="/" className="d-block p-3 h-auto text-center">
        <Image src={props.logo.text.url} alt="" height="25" className="card-logo-light mx-auto" />
      </Link>
    </li>
  )
}

const Header = (props: any) => {
  let { data, loading, error } = useQuery(query)
  const [categories, setCategories] = useState([])
  const [logo, setLogo] = useState({
    text: {
      url: ''
    }
  })
  const [icon, setIcon] = useState({
    account: {
      url: ''
    },
    cart: {
      url: ''
    },
    wishlist: {
      url: ''
    }
  })
  useEffect(() => {
    if (!!data && !loading && !error) {
      Object.keys(data.icon).map((key) => {
        data.icon[key] = {
          url: config.serverUrl + data.icon[key].url
        }
      })
      setIcon(data.icon)

      setCategories(data.parentCategories)
      setLogo({
        text: {
          url: config.serverUrl + data.logo.text.url
        }
      })
    }
  }, [loading])

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  //card modal
  const [card, setCard] = useState(false)

  const handlecardClose = () => setCard(false)
  const handlecardShow = () => setCard(true)

  const [showMenu, setShowMenu] = useState<any>('')
  const menuShow = (item: any) => {
    var windowSize = document.documentElement.clientWidth
    if (windowSize < 992 && showMenu !== item) {
      setShowMenu(item)
    } else {
      setShowMenu('')
    }
  }

  const path = props.router.location.pathname
  useEffect(() => {
    const initMenu = () => {
      const pathName = process.env.PUBLIC_URL + path
      const ul = document.getElementById('navigation-menu') as HTMLElement
      const items: any = ul.getElementsByTagName('a')
      let itemsArray: any = Array.from(items)
      console.log(itemsArray)
      removeActivation(itemsArray)
      let matchingMenuItem = itemsArray.find((x: HTMLAnchorElement) => x.pathname === pathName)
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem)
      }
    }

    const removeActivation = (items: HTMLAnchorElement[]) => {
      items.forEach((item: HTMLAnchorElement) => {
        item.classList.remove('active')
      })
    }

    const activateParentDropdown = (item: HTMLAnchorElement) => {
      item.classList.add('active')
      let parentDrop: any = item.closest('.dropdown')
      if (parentDrop) {
        parentDrop.classList.add('active')
        parentDrop.querySelector('.dropdown-toggle').classList.add('active')
        let parentDropdown = parentDrop.parentElement.closest('.dropdown')

        if (parentDropdown) {
          parentDropdown.querySelector('.dropdown-toggle').classList.add('active')
          let parentEleDropdown = parentDropdown.parentElement.closest('.dropdown')
          if (parentEleDropdown) {
            parentEleDropdown.querySelector('.dropdown-toggle').classList.add('active')
          }
        }
      }
    }

    initMenu()
    let collapse = document.getElementById('navbarSupportedContent') as HTMLElement
    if (collapse && collapse.classList.contains('show')) {
      collapse.classList.remove('show')
    }
  }, [path])

  const windowScroll = () => {
    let navbar = document.getElementById('navbar')
    if (navbar) {
      if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
        navbar.classList.add('is-sticky')
      } else {
        navbar.classList.remove('is-sticky')
      }
    }
  }
  window.addEventListener('scroll', function (ev) {
    ev.preventDefault()
    windowScroll()
  })

  const handleShowColl = () => {
    let navbar = document.getElementById('navbar')
    let collapse = document.getElementById('navbarSupportedContent') as HTMLElement
    navbar && navbar.classList.remove('navbar-expand')
    if (collapse && collapse.classList.contains('show')) {
      collapse.addEventListener('shown.bs.collapse', (event) => {
        collapse.classList.remove('show')
      })
    } else {
      collapse.classList.add('show')
    }
  }

  const windowResizeHover = () => {
    var windowSize = document.documentElement.clientWidth
    if (windowSize > 992) {
      let collapse = document.getElementById('navbarSupportedContent') as HTMLElement
      if (collapse && collapse.classList.contains('show')) {
        collapse.classList.remove('show')
      }
      setShowMenu('')
    }
  }

  useEffect(() => {
    window.addEventListener('resize', windowResizeHover)
    return () => {
      window.removeEventListener('resize', windowResizeHover)
    }
  }, [])

  return (
    <React.Fragment>
      <Navbar className="navbar-expand-lg ecommerce-navbar" id="navbar" expanded={false}>
        <Container>
          <Logo logo={logo} />
          <MoreButton handleShowColl={handleShowColl} />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav as="ul" className="mx-lg-auto mb-2 mb-lg-0" id="navigation-menu">
              <SideLogo logo={logo} />
              <Form.Control size="lg" type="text" onClick={handleShow} />
              <SearchModal show={show} handleClose={handleClose} />
            </Nav>
          </Navbar.Collapse>

          <div className="bg-overlay navbar-overlay" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent.show"></div>
          <div className="d-flex align-items-center">
            <Account iconPath={icon.account.url}></Account>
            <WishListIcon iconPath={icon.wishlist.url} handlecardShow={handlecardShow}></WishListIcon>
            <ShoppingIcon iconPath={icon.cart.url} handlecardShow={handlecardShow} />
          </div>
        </Container>
      </Navbar>
      <CardModal show={card} handleClose={handlecardClose} />

      <Navbar className="navbar-expand-lg ecommerce-navbar bottom-navbar" id="navbar" expanded={false}>
        <Container>
          COLLECTIONS
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav as="ul" className="mx-lg-auto mb-2 mb-lg-0" id="navigation-menu">
              <Pages categories={categories} menuShow={menuShow} showMenu={showMenu} t={props.t} />
            </Nav>
          </Navbar.Collapse>
          <div className="bg-overlay navbar-overlay" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent.show"></div>
          <div className="d-flex align-items-center">
            WORLDWIDE <br></br> SHIPPING
          </div>
        </Container>
      </Navbar>
    </React.Fragment>
  )
}

export default withRouter(withTranslation()(Header))
