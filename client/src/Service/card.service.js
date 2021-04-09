import axios from 'axios'

class CardService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/card`,
            withCredentials: true
        })
    }

    getCards = () => this.api.get(`/`)
    getOne = userId => this.api.get(`/details/${userId}`)
    saveCard = cardDetails => this.api.post('/new', cardDetails)
    editCard = (cardId, cardDetails) => this.api.put(`/edit/${cardId}`, cardDetails)
    deleteCard = (cardId) => this.api.delete(`/delete/${cardId}`)
}

export default CardService