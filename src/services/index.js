'use strict'

import { polyfill } from 'es6-promise'
polyfill();
import axios from 'axios'

export default function (path, data = {}, method = 'GET', localURL = true) {
    let rootUrl = (localURL) ? `http://pokeapi.salestock.net/api/v2/${path}` : path

    const url = `${rootUrl}${setQueryString(data, method)}`

    return axios({ method, url, data })
        .then((res) => {
            return Promise.resolve(res)
        })
        .catch((error) => {
            return Promise.reject(error)
        })
    
    function setQueryString(data, method) {
        if (method === 'GET') {
            let queryString = '';
            let firstKeyProp = Object.keys(data)[0];

            for (let prop in data) {
                queryString += `${(prop === firstKeyProp) ? '?' : '&'}${prop}=${data[prop]}`
            }

            return queryString
        }

        return ''
    }
}