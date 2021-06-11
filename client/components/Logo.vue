<template>
    <!--eslint-disable-->
    <div class="container-fluid row-12 backpage">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous" />
        <div class="container-fluid back col-4">
            <form method="post" @submit.prevent="postData">
                <div class="col-12">
                    <div>
                        <input v-model="oggetto" type="text" class="form-control input-lg" name="oggetto" placeholder="oggetto" />
                    </div>
                    <br />
                    <div>
                        <input v-model="data" type="text" class="form-control input-lg" name="data" placeholder="data" />
                    </div>
                    <br />
                    <div>
                        <input type="submit" class="form-control input-lg link" placeholder="invio" />
                    </div>
                </div>
            </form>
        </div>
        <div class="container-fluid back col-4" style="overflow-x: auto">
            <table v-for="post in posts" v-bind:key="post._id" class="table">
                <tr>
                    <td class="col-4" style="color: white">{{ post.oggetto }}</td>
                    <td class="col-4" style="color: white">{{ post.data }}</td>
                    <td class="col-2">
                        <button v-on:click="deleteData(post._id)" class="form-control input-lg link submit">Delete</button>
                    </td>
                    <td class="col-2">
                        <button v-on:click="editData(post._id)" class="form-control input-lg link submit">Edit</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$axios = window.axios
export default {
    name: 'Logo',
    data() {
        return {
            posts: [],
            data: '',
            oggetto: '',
        }
    },
    methods: {
        postData() {
            axios
                .post('http://localhost:9000/api', {
                    oggetto: this.oggetto,
                    data: this.data,
                })
                .then((response) => {
                    console.log(response)
                    this.getData()
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        deleteData(_id) {
            axios
                .delete('http://localhost:9000/api/' + _id)
                .then(() => {
                    this.getData()
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        editData(_id) {
            axios
                .put('http://localhost:9000/api/' + _id, {
                    oggetto: this.oggetto,
                    data: this.data,
                })
                .then(() => {
                    this.getData()
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        getData() {
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
        },
    },
    mounted() {
        this.getData()
    },
}
</script>

<style>
table {
    border-collapse: collapse;
    width: 100%;
}
.back {
    align-items: center;
    justify-content: center;
    min-height: 1vh;
    max-width: 600px;
    padding: 50px 30px;
    background-image: linear-gradient(to bottom, #00bc7e, #106f87);
    box-shadow: 0 0 30px rgba(49, 49, 51, 0.15);
    border-radius: 10px;
}

.backpage {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1300px;
    padding: 40px 30px;
    background-image: linear-gradient(to bottom, #0d8a60, #10687e);
    box-shadow: 0 0 30px rgba(0, 4, 255, 0.15);
    border-radius: 5px;
}
</style>
