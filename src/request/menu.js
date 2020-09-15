import $axios from "@/common/http"


// 获取菜单列表

export async function getMenu(){
    let res = await $axios.get("/menulist?istree=1")
    if(res.code==200 && res.list){
        return res.list
    }else{
        return [];
    }
}


//添加菜单

export async function addMenu(data){
   return  await $axios.post("/menuadd",data)
  
}


// 修改菜单


export async function editMenu(){
    let res = await $axios.post("/menuedit",data)
    console.log(res)
}


//删除菜单

export async function delMenu(id) {
   return $axios.post("/menudelete",{id})
    
}