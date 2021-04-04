import { Component } from 'react'
import AuthService from '../../../Service/auth.service'
import { Form, Button, Container, Row, Col, Jumbotron } from 'react-bootstrap'
import './Signup.css'
import Alert from '../../Shared/Alert/Alert'
import logo from '../../layout/Navigation/logo.png'
import { Link } from 'react-router-dom'

class Signup extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            alert: {
                show: false,
                title: '',
                text: ''

            }
        }
        this.authService = new AuthService()
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit(e) {

        e.preventDefault()

        this.authService
            .signup(this.state)
            .then(response => {
                console.log(response.data)
                // this.props.storeUser(response.data)
                this.props.history.push('/')
            })
            .catch(err => console.log(err))
    }
    handleAlert = (show, title, text) => this.setState({ alert: { show, title, text } })

    render() {
        return (
            <>
                <section className="signup">
                    <img src={logo} alt="logo" />
                    <Form className="form-signup" onSubmit={e => this.handleSubmit(e)}>
                        <Form.Group>
                            <Form.Label className="label-signup">Username</Form.Label>
                            <Form.Control type="text" name="username" value={this.state.username} onChange={e => this.handleInputChange(e)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="label-signup">Password</Form.Label>
                            <Form.Control type="password" name="password" value={this.state.password} onChange={e => this.handleInputChange(e)} />
                        </Form.Group>

                        <Button variant="outline-dark" block type="submit" className="sign-button">Create an account</Button>
                    </Form>
                    <small>Already have an account? <Link to='/login' style={{ color: '#60b62f' }}>Log in</Link> </small>

                    <Alert handleAlert={this.handleAlert} show={this.state.alert.show} title={this.state.alert.title} text={this.state.alert.text} />

                </section>
            </>
        )
    }
}

export default Signup



