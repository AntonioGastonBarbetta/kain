import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import firebase from './firebaseService.js';
import router from './router/index'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        registrations:[],
        passwords:[],
        token:""
    },
    getters:{
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
        inputToken(state, token){

            this.state.token = token;
            
        }

    },
    actions:{
        getPasswordsApi(context){
            
            axios.get('http://localhost:3000/passwords').then((response) => {
            context.commit('InputPasswords', response.data) 
            })
        },
        patchStore(context, password){
            axios.patch('http://localhost:3000/passwords/'+password.id, 
                    {
                        "tags": {
                            "username": password.tags.username,
                            "password": password.tags.password,
                            "description": password.tags.description,
                            "url": password.tags.url,
                        }
                    })
        },
        createStore(context, password){
            axios.post('http://localhost:3000/passwords/', 
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
        authenticate(context){
            const provider = new firebase.auth.GoogleAuthProvider();
      
              firebase.auth().signInWithPopup(provider).then(function(result) {
              const user = result.user;
              firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
                console.log(idToken);
                axios.post('http://localhost:3000/auth',{
                    "token": idToken
                }).then( 
                    router.push('/List')
                  )
                
              })
              
              .catch(function(error) {
                // Handle error
              });
              context.commit('inputToken', user.refreshToken);
              
               
            })
        
        }

    }

})