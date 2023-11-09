import {http, HttpHandler, HttpResponse} from 'msw';

const {get} = http

const URL = {
    getSchedule: '/schedule'
}

export const handlers: HttpHandler[] = [
    get(URL.getSchedule, () => {
        return HttpResponse.json({})
    })
]