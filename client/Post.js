import axios from 'axios'
const url = 'http://localhost:9000/api'

class PostService {
    static getPosts() {
            axios
                .get('http://localhost:9000/api', {
                    oggetto: this.oggetto,
                    data: this.data,
                })
                .then((response) => {
                    console.log((this.posts = response.data))
                    return JSON.stringify((this.posts = response.data))
                })
                .catch((error) => {
                    console.log(error)
                })
    }

    static insertPost(oggetto) {
        return axios.post(url, {
            oggetto,
        })
    }

    static deletePost(id) {
        return axios.delete(`${url}${id}`)
    }
}

export default PostService
