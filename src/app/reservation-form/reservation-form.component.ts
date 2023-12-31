import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, HomeComponent, RouterModule],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({});
  
  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  
  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required]
    })

    let id = this.activatedRoute.snapshot.paramMap.get("id");
    if (id) {
      this.reservationService.getReservation(id).subscribe(reservation => {
        if (reservation) {
          this.reservationForm.patchValue(reservation);
        }
      });
    }
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      let reservation: Reservation = this.reservationForm.value
      let id = this.activatedRoute.snapshot.paramMap.get("id");
     
      if (id) {
        // Update
        this.reservationService.updateReservation(id, reservation).subscribe(() => {
          console.log(`Update request processed`);
        })
      } else {
        //Create new
        this.reservationService.addReservation(reservation).subscribe(() => {
          console.log(`Create request processed`);
        })
      }

      this.router.navigate(['/list'])
    }
  }
 }
