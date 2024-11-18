import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = '2d12452790602fc6c1c4dda7ae6bf3f6'; // Reemplaza con tu clave API de TMDb

  constructor(private http: HttpClient) { }

  // Obtener películas populares
  getPopularMovies(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/movie/popular?api_key=${this.apiKey}&language=es-ES&page=1`);
  }

  // Obtener detalles de una película
  getMovieDetails(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/movie/${id}?api_key=${this.apiKey}&language=es-ES`);
  }
}
