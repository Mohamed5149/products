import { Modal } from 'react-bootstrap';

export const ModalView = ({ show, handleClose, product }) => {
    return (
        <Modal show={show} onHide={() => handleClose()}>
            <Modal.Header closeButton>
                <Modal.Title>{product.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img className="card-img-top" src={product.image} alt={product.title} />
                <div className="card-body-text">
                    <p className="card-text">{product.title}</p>
                    <p className="card-text">{product.category}</p>
                    <p className="card-text">{product.description}</p>
                </div>
            </Modal.Body>
        </Modal>
    )
}
export default ModalView;