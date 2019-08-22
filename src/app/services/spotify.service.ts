import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { 
    console.log('Servicio spoty listo');
  }
  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCsTSiXvs9FCQbCdhPU4QPrHT5BwCrFaCZFXXdjDlgSI8P9htmjmi7lzHDx-IQd92uIsvgUU4DB31g5bfc'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
        .pipe( map(data => {
          return data['albums'].items;
        }));
  }

  getArtista(termino: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCsTSiXvs9FCQbCdhPU4QPrHT5BwCrFaCZFXXdjDlgSI8P9htmjmi7lzHDx-IQd92uIsvgUU4DB31g5bfc'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers })
        .pipe ( map(data => {
            return data['artists'].items;
        }));
  }
  
}
