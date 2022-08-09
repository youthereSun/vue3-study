import request from './api.config.js'

export function GetMockData(callback) {
    request.get({
        url: './mock.json',
        callback
    })
}

export function GetMockArr(callback) {
    request.get({
        url: './mockArr.json',
        callback
    })
}