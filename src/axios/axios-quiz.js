import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-66160-default-rtdb.europe-west1.firebasedatabase.app/'
})