import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export class DataService {
  constructor(private url: string, private http: HttpClient) {}

  getAll() {
    return this.http.get(this.url).pipe(map((response: any) => response));
  }

  create(resource: any) {
    return this.http
      .post(this.url, JSON.stringify(resource))
      .pipe(map((response: any) => response));
  }

  update(resource: any) {
    return this.http
      .patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
      .pipe(map((response: any) => response));
  }

  delete(id: any) {
    return this.http
      .delete(this.url + '/' + id)
      .pipe(map((response: any) => response));
  }
}
