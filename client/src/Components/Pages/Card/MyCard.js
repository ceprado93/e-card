import { Col } from 'react-bootstrap'

const MyCard = ({ address, image, job, company, phone, email }) => {

    return (
        <Col md={7} className="mycard">
            <img src={image} alt="cardImage" />
            <div className="cardInfo">
                <h3>{job}</h3>
                <p>{address}</p>
                <p>{company}</p>
                <p>{phone}</p>
                <p>{email}</p>
            </div>
        </Col >
    )
}

export default MyCard