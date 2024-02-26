import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { changeLayoutMood, changeThemeMood } from 'slices/thunk'
import Footer from './Footer'
import Header from './Header'
import { MainModal } from 'Components/MainModal'
import { createSelector } from 'reselect'

const Layout = (props: any) => {
  let location = useLocation()
  const dispatch: any = useDispatch()

  const selectProperties = createSelector(
    (state: any) => state.Layout,
    (layout) => ({
      footerModeType: layout.footerModeType,
      layoutThemeMode: layout.layoutThemeMode
    })
  )

  const { footerModeType, layoutThemeMode } = useSelector(selectProperties)

  //change footer theme on review page
  const footertheme = props.isLight ? 'light' : 'dark'

  //change them mode
  const handleThemeMood = (value: any) => {
    if (changeThemeMood) {
      dispatch(changeThemeMood(value))
    }
  }
  window.onscroll = function () {
    scrollFunction()
  }

  const scrollFunction = () => {
    const element = document.getElementById('back-to-top')
    if (element) {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        element.style.display = 'block'
      } else {
        element.style.display = 'none'
      }
    }
  }
  //top arrow icone function
  const ScrollbarTop = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  useEffect(() => {
    if (footerModeType || layoutThemeMode) {
      dispatch(changeLayoutMood(footertheme))
      dispatch(changeThemeMood(layoutThemeMode))
    }
  }, [layoutThemeMode, dispatch, footertheme, footerModeType])

  // const temp = ['a', 'b', 'c', 'd']

  // const _category: any = {
  //   a: ['a', 'a', 'a', 'a'],
  //   b: ['b', 'b', 'b', 'b'],
  //   c: ['c', 'c', 'c', 'c'],
  //   d: ['d', 'd', 'd', 'd']
  // }
  // const [hoverSidebars, setHoverSidebar] = useState({ is: false, for: '' })
  // const [hoverHover, setHoverHover] = useState(false)
  return (
    <React.Fragment>
      {/* <TopBar></TopBar> */}
      {location.pathname && <MainModal location={location.pathname} />}

      <Header handleMood={handleThemeMood} />

      {props.children}
      <Footer />

      <Button onClick={() => ScrollbarTop()} variant="info" className="btn-icon" style={{ bottom: '50px' }} id="back-to-top">
        <i className="ri-arrow-up-line"></i>
      </Button>
    </React.Fragment>
  )
}

export default Layout

// {/* <div className="different-layout">
//   <div
//     onMouseEnter={() => {
//       setHoverSidebar({ is: true, for: hoverSidebars.for })
//     }}
//     onMouseLeave={() => {
//       setHoverSidebar({ is: false, for: '' })
//     }}
//     className={` different-sidebar-origin`}
//     style={{
//       width: hoverSidebars.is ? (hoverSidebars.for.length !== 0 ? '500px' : '300px') : '60px'
//       //   width: hoverSidebars.for.length !== 0 ? '500px' : '300px'
//     }}
//   >
//     <div
//       onMouseEnter={() => {
//         setHoverSidebar({ is: true, for: '' })
//       }}
//       //   onMouseLeave={() => {
//       //     setHoverSidebar({ is: false, for: '' })
//       //   }}
//       className={` different-sidebar`}
//     >
//       {temp.map((e: any) => {
//         return (
//           <div className="different-sidebar-logo-container">
//             <img
//               src="https://media.istockphoto.com/id/1000987308/tr/vekt%C3%B6r/kare-simge-vekt%C3%B6r-i%C5%9Fareti-ve-beyaz-arka-plan-%C3%BCzerinde-kare-logo-kavram%C4%B1-izole-sembol%C3%BC.jpg?s=1024x1024&w=is&k=20&c=XMKdEYIwB8H1iRMsZeaeejiOpIJe42k_mBz-jfpiVCI="
//               className="different-sidebar-main-logo"
//             />
//             {hoverSidebars.is && (
//               <div style={{ width: '300px', display: 'flex' }}>
//                 <label
//                   className="differen-sidebar-main-title"
//                   onMouseEnter={() => {
//                     setHoverSidebar({ is: true, for: e })
//                   }}
//                   onMouseLeave={() => {
//                     if (!hoverHover) setHoverSidebar({ is: true, for: '' })
//                   }}
//                 >
//                   {e}
//                 </label>
//               </div>
//             )}
//           </div>
//         )
//       })}
//       <div style={{ marginLeft: '320px' }}>
//         {hoverSidebars.for.length !== 0 && (
//           <div
//             onMouseEnter={() => {
//               setHoverSidebar({ is: true, for: hoverSidebars.for })
//             }}
//             onMouseLeave={() => {
//               setHoverSidebar({ is: false, for: '' })
//             }}
//             // className="different-sidebars-sidebar"
//           >
//             {_category[hoverSidebars.for].map((_cat: any) => {
//               return <h6>{_cat}</h6>
//             })}
//           </div>
//         )}
//       </div>
//     </div>
//   </div>

//   <div className="different-layout-main"> */}
//       {/* </div>
// </div> */}
