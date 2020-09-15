//获取菜单列表！
import { getMenu }  from "@/request/menu"
export default {
    namespaced:true,
    state:{
        menulist:[]
    },
    getters:{
        menulist:state =>state.menulist
    },
    mutations:{
        SET_LIST(state,data){
            state.menulist = data;
        }
    },
    actions:{
        async get_menu_list({ commit }){
            let res = await getMenu();
            // console.log(res)
            commit('SET_LIST',res)
        }
    }

}