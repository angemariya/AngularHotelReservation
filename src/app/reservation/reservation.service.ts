import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservations: Reservation[] = []

  //CRUD Operations:

  //CREATE
  addReservation(reservation: Reservation): void {
    this.reservations.push(reservation)
  }

  //READ
  getAllReservations(): Reservation[] {
    return this.reservations
  }

  getReservation(id: string): Reservation | undefined {
    return this.reservations.find(el => el.id === id)
  }

  //UPDATE
  updateReservation(reservation: Reservation): void {
    let index = this.reservations.findIndex(el => el.id === reservation.id);
    this.reservations[index] = reservation
  }

  //DELETE
  deleteReservation(id: string): void {
    //this.reservations = this.reservations.filter(el=> el.id !== id)
    let index = this.reservations.findIndex(el => el.id === id)
    this.reservations.splice(index, 1)
  }

}
