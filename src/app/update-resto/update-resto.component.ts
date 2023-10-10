import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css'],
})
export class UpdateRestoComponent implements OnInit {
  alert = false;
  editResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  });
  constructor(
    private router: ActivatedRoute,
    private resto: RestoService,
  ) {}
  ngOnInit() {
    let id = this.router.snapshot.params['id'];
    console.warn('restaurant id: ', id);
    this.resto.getCurrentResto(id).subscribe((data: any) => {
      this.editResto = new FormGroup({
        name: new FormControl(data['name']),
        email: new FormControl(data['email']),
        address: new FormControl(data['address']),
      });
    });
  }
  collection() {
    let id = this.router.snapshot.params['id'];
    this.resto.updateResto(id, this.editResto.value).subscribe((data) => {
      this.alert = true;
    });
  }

  closeAlert() {
    this.alert = false;
  }
}
