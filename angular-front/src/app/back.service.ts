import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BackService {
    constructor(protected http: HttpClient) { }

    getOk(): Observable<responseOk> {
        return this.http.get<responseOk>('http://python-example-service' + "/test");
    }

}
class responseOk {
    public status: String;
    constructor(
        status: String
    ) {
        this.status = status;
    }
}