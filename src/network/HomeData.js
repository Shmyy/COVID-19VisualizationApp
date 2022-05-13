import {request} from "./request"


export function getHomemultidata(){
    return request({
        method:"get",
        params:{
            key:'db78d1b33f51962396653a6750cc3a5b'
        },
        url: '',
    })
}