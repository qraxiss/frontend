import DeleteModal from 'Components/DeleteModal'
import { CommonTitle, ProductNoui } from 'Components/Homepage'
import HotDeals from 'Components/HotDeals'
import { MainModal } from 'Components/MainModal'
import React from 'react'
import { Alert } from 'react-bootstrap'

const Alpi = () => {
  return (
    <div>
      <div style={{ width: '60vw', margin: '0 auto', top: '100px', zIndex: '1200' }} className="alert alert-danger ">
        <strong>Danger!</strong> Indicates a dangerous or potentially negative action.
      </div>
    </div>
  )
}

export default Alpi
