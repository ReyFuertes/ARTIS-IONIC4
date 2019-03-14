import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";

export abstract class BaseService {
  constructor(private http: HttpClient) {}

  protected getBaseUrl(route: string = ""): string {
    return environment.baseUrl + route;
  }

  private getToken(): string {
    return JSON.parse(localStorage.getItem('token'))
  }

  protected header(): HttpHeaders {
    return new HttpHeaders({
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${this.getToken()}`,
    });
  }

  protected get(route: string): Observable<any> {
    let url = this.getBaseUrl() + route;

    let headers = new HttpHeaders({
      Authorization: `Bearer ${this.getToken()}`,
      Accept: "application/json"
    });

    let options = { headers: headers };
    return this.http.get(url, options);
  }

  protected post(route: string, object: any): Observable<any> {
    return this.http.post(this.getBaseUrl(route), object, { headers: this.header()});
  }

  protected delete(route: string): Observable<any> {
    return this.http.delete(this.getBaseUrl(route), {
      headers: this.header()
    });
  }

  protected put(route: string, object: any): Observable<any> {
    return this.http.put(this.getBaseUrl(route), object, { headers: this.header() }
    );
  }

  public handleError = (error: any) => {};
}
