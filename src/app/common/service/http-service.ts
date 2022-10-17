import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class HttpService {

    private _urlUser = 'https://ngong-3826.herokuapp.com/login';
    private _urlNews = 'http://103.175.147.224:1234/news/list';
    private _urlMocky = 'https://run.mocky.io/v3/56b571d2-7c8c-45ea-9459-7d30dfdc6275';
    constructor(private _httpClient: HttpClient) {
    }

    getHeader() {
        // const token = localStorage.getItem('token');
        const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyX25nb25nQGdtYWlsLmNvbSIsImV4cCI6MTY2NTk0OTE4NSwiaWF0IjoxNjY1OTMxMTg1fQ.w0Y3ovR_zsuUwq_8p0Uw4t6kKf9UCJgImwRZxXWDCZXAC91QhLHemhbZDIe9tEWL3EEsDTanw50T7mP2mVMc1A';
        return token ? new HttpHeaders().set('Authorization', 'Bearer' + token) : null;
    }

    reqeustApiPost(api: string, params: any) {
        let url = '';

        if (api === 'user') {
            url = this._urlUser;
        }
        return this._httpClient.get('https://ngong-3826.herokuapp.com/health')
        let header = new HttpHeaders({
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJleHAiOjE1OTU0NzE5MjMsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzQxIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDQzNDEifQ'
        });
        if (header instanceof HttpHeaders) {
            return this._httpClient.post('https://ngong-3826.herokuapp.com/login', {
                "username": "user_ngong@gmail.com",
                "password": "1234"
            }, { headers: header });
        }
        return this._httpClient.post(url, {
            params: params, Headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }

    reqeustApiget(api: string, params: any = null) {
        let url = '';
        if (api === 'news') {
            url = this._urlNews;
        }
        if (api === 'test') {
            url = this._urlMocky;
        }
        return this._httpClient.get(url, { params: params });
    }


}