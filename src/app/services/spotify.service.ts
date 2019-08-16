import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { 
    console.log('Servicio spoty listo');
  }
  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCjWip6l15fJ_h7zf1FnIQVMFeln5S98arHLvh0aHt88E52YoDQahlNRmQZlV6CSvAs4oAdrq4VBy2tLD4'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}
