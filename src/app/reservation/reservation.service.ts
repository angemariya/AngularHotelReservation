import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservations: Reservation[] = []

  constructor() {
  //using the constuctor here because need to read information from LS before onInit
    let savedReservations = localStorage.getItem("reservations");
    this.reservations = savedReservations ? JSON.parse(savedReservations) : [];
  }

  //CRUD Operations:

  //CREATE
  addReservation(reservation: Reservation): void {
    reservation.id = Date.now().toString()
    this.reservations.push(reservation);
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }

  //READ
  getAllReservations(): Reservation[] {
    return this.reservations;
  }

  getReservation(id: string): Reservation | undefined {
    return this.reservations.find(el => el.id === id);
  }

  //UPDATE
  updateReservation(reservation: Reservation): void {
    let index = this.reservations.findIndex(el => el.id === reservation.id);
    this.reservations[index] = reservation;
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }

  //DELETE
  deleteReservation(id: string): void {
    //this.reservations = this.reservations.filter(el=> el.id !== id)
    let index = this.reservations.findIndex(el => el.id === id);
    this.reservations.splice(index, 1);
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }

}
