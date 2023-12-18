import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private url = 'http://localhost:3001';
  private reservations: Reservation[] = []

  constructor(private http: HttpClient) {

   }

  //CRUD Operations:

  //CREATE
  addReservation(reservation: Reservation): Observable<void> {
    return this.http.post<void>(`${this.url}/reservation`, reservation);
  }

  //READ
  getAllReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.url}/reservations`);
  }

  getReservation(id: string): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.url}/reservation/${id}`);
  }

  //UPDATE
  updateReservation(id: string, updatedReservation: Reservation): Observable<void> {
    return this.http.put<void>(`${this.url}/reservation/${id}`, updatedReservation);
  }

  //DELETE
  deleteReservation(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/reservation/${id}`);
  }
}
