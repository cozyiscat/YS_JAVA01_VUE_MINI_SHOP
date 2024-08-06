import {createStore} from 'vuex';
// import presistedstate from 'vuex-persistedstate';

const store = createStore({
    state : {
        user:null,
        hardcodeUser:{
            username:'admin',
            password:'1234',
        }
        },
    mutations:{
        setUser(state,user){
            state.user = user;
        },
        clearUser(state){
            state.user = null;
        },
        loginUser(state,{username,password}){
            if(username === 'admin' && password === '1234'){
                state.user = {username: username}
            }
            else{state.user = null;

                console.error('아이디나 비밀번호가 올바르지 않습니다.');
            }
        }
    }
    }
)
export default store;