import { Button, Modal } from 'react-bootstrap'

export const DeleteModal = ({ modalShow, hideModal, deleteData }: any) => {
  const handleDelete = () => {
    deleteData()
    hideModal()
  }

  return (
    <Modal show={modalShow} onHide={hideModal} centered id="removeItemModal" className="zoomIn">
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="mt-2 text-center">
          <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
            <h4>Emin misin ?</h4>
            <p className="text-muted mx-4 mb-0">Bu ürünü sepetinden çıkartmak istediğinden emin misin ?</p>
          </div>
        </div>
        <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
          <Button className="btn w-sm btn-light" data-bs-dismiss="modal" onClick={hideModal}>
            İptal et
          </Button>
          <Button className="btn w-sm btn-danger" id="remove-product" onClick={handleDelete}>
            Evet, Sil !
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  )
}
