import { Spinner, Container } from 'react-bootstrap';

function Loading() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
        <Spinner animation="border" variant="warning" style={{height: "6rem", width: "6rem"}}>
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    </div>
  )
}

export default Loading