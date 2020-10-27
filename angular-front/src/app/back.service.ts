import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BackService {
    constructor(protected http: HttpClient) { }

    getOk(): Observable<responseOk> {

        return this.http.get<responseOk>("http://localhost:5000" + "/test");
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