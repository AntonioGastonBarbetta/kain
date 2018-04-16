import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import firebase from './firebaseService.js';
import router from './router/index'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        Url: "https://kain5.martincastroalvarez.com:8000",
        registrations:[],
        passwords:[],
        token:""
    },
    getters:{
        getUrl(state){
            return state.Url;
        },
        getPasswords(state){
            return state.passwords;
        },

        getAPassword: (state) => (id) =>{
            return state.passwords.find(password => password.id === id)
        },
        getToken(state){
            return state.token;
        }
    },
    mutations:{
        InputPasswords(state, passwords){
         
            this.state.passwords = passwords;
        },
        editStore(state, password){
            this.state.passwords.push(password);
        },

    },
    actions:{
        getPasswordsApi(context, getters){
            
            axios.get(getters.getUrl+'/v1/passwords?page=2&limit=10').then((response) => {
            context.commit('InputPasswords', response.data) 
            })
        },
        patchStore(context, password, getters){
            axios.patch(getters.getUrl+'/v1/passwords/'+password.id, 
                    {
                        "tags": {
                            "username": password.tags.username,
                            "password": password.tags.password,
                            "description": password.tags.description,
                            "url": password.tags.url,
                        }
                    })
        },
        createStore(context, password, getters){
            axios.post(getters.getUrl+'/v1/passwords', 
                    {
                        "tags": {
                            "username": password.tags.username,
                            "password": password.tags.password,
                            "description": password.tags.description,
                            "url": password.tags.url,
                        }
                    }).then(
                        context.commit('editStore', password)
                       
                    )
        },
        authenticate(context, getters){
            const provider = new firebase.auth.GoogleAuthProvider();
      
              firebase.auth().signInWithPopup(provider).then(function(result) {
              const user = result.user;
              firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
                console.log(idToken);
                axios.post(getters.getUrl+'/v1/auth',{
                    "token": idToken
                }).then( 
                    this.$router.push('/List')
                  )
                
              })
              
              .catch(function(error) {
                // Handle error
              });
              
              
               
            })
        
        }

    }

})