import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class UserService {
    apiUrl: string;

    // Dependency Injection of HttpClient
    constructor(private httpClient: HttpClient) {
        this.apiUrl = 'https://fakestoreapi.com/users';
    }

    getUsers(): Observable<any> {
        return this.httpClient.get(this.apiUrl);
    }
}