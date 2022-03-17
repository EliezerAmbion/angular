import { HttpClient } from '@angular/common/http';

export class DataService {
  constructor(private url: string, private http: HttpClient) {}

  get() {
    return this.http.get(this.url);
  }

  create(resource: any) {
    return this.http.post(this.url, JSON.stringify(resource));
  }

  update(resource: any) {
    return this.http.patch(
      this.url + '/' + resource.id,
      JSON.stringify({ isRead: true })
    );
  }

  delete(id: any) {
    return this.http.delete(this.url + '/' + id);
  }
}
