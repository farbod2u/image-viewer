import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseModel} from "../model/response/response-model";

@Injectable({
  providedIn: 'root'
})
export class InsuranceDocumentService {
  private baseUrl = "http://172.16.11.116:9090/erecords/api/documents/getimages/";

  constructor(private httpCilent: HttpClient) {
  }

  getImages(filter: string, id: string): Observable<ResponseModel> {
    console.log("service : " + filter);
    return this.httpCilent.get<ResponseModel>(`${this.baseUrl}` + filter + "/" + id);
  }
}
