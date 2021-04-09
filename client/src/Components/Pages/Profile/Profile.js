import { Component } from 'react'
import { Container, Row, Col, Button, ButtonGroup, Modal, Form } from 'react-bootstrap'
import './Profile.css'
import MyCard from '../Card/MyCard'
import CardService from '../../../Service/card.service'


class Profile extends Component {
    constructor() {
        super()
        this.state = {
            card: undefined,
            showForm: false,
            new: {
                phone: 0,
                email: '',
                job: '',
                company: '',
                address: '',
                image: ''
            }
        }

        this.cardServive = new CardService()
    }

    componentDidMount() {
        this.loadCard()
    }

    loadCard() {
        this.cardServive
            .getOne(this.props.loggedUser._id)
            .then(response => {
                console.log(response.data)
                this.setState({ card: response.data })
            })
    }

    togglemodalForm(value) {
        this.setState({ showForm: value })
    }

    deleteAccount() {
        this.profileService
            .cancelAccount(this.props.loggedUser._id)
            .then((response) => console.log(response))
            .catch(err => console.log(err))
    }

    handleInputChange(e) {
        e.preventDefault()
        const { name, value } = e.target
        this.setState((prevState) => ({
            new: { ...prevState.new, [name]: value }
        }))
    }

    handleSubmit(e) {

        e.preventDefault()
        this.cardServive
            .saveCard(this.state.new)
            .then(() => this.setState({ showForm: false }, () => console.log(this.props.loggedUser)))
            .catch(err => console.log(err))
    }

    render() {

        return (
            <>
                <section className="profile-head">

                    <Container >
                        <h1>Profile</h1>
                    </Container>
                </section>
                <Container style={{ marginTop: 100 }}>
                    <Row>
                        <Col md={5}>
                            <div className='user-box' >
                                <img src={this.props.loggedUser.avatar} alt="avatar" />
                                <h3>{this.props.loggedUser.username}</h3>
                                <ButtonGroup>
                                    <Button variant="outline-dark" onClick={() => this.togglemodalForm(true)}>Edit your profile</Button>
                                    <Button variant="dark" onClick={() => this.togglemodalForm(true)}>Edit your Card</Button>
                                </ButtonGroup>

                            </div>
                        </Col>
                        {this.state.card?.map(elm => <MyCard key={elm._id} {...elm} />
                        )}
                    </Row>
                </Container>

                <Modal show={this.state.showForm} onHide={() => this.togglemodalForm(false)} size='xl'>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit card</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form closeModal={() => this.togglemodalForm(false)} onSubmit={e => this.handleSubmit(e)} style={{ position: "relative" }}>

                            <Form.Group>
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" name="phone" value={this.state.phone} onChange={e => this.handleInputChange(e)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" name="email" value={this.state.email} onChange={e => this.handleInputChange(e)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Job</Form.Label>
                                <Form.Control type="text" name="job" value={this.state.job} onChange={e => this.handleInputChange(e)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Company</Form.Label>
                                <Form.Control type="text" name="company" value={this.state.company} onChange={e => this.handleInputChange(e)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" name="address" value={this.state.address} onChange={e => this.handleInputChange(e)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="text" name="image" value={this.state.image} onChange={e => this.handleInputChange(e)} />
                            </Form.Group>
                            <Button variant="dark" block type="submit" > Save avatar</Button>

                        </Form>
                        {/* <WaveForm closeModal={() => this.togglemodalForm(false)} refreshList={() => this.loadWaves()} /> */}
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}
export default Profile
