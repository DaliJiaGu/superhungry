import { request } from "./request"

export function getHomedata() {
    return request({
        url: '/superhungry/home'
    })
}