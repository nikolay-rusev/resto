import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css'],
})
export class AddRestoComponent implements OnInit {
  alert: boolean = false;
  addResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  });
  constructor(private resto: RestoService) {}
  ngOnInit() {}
  collectResto() {
    this.resto.saveResto(this.addResto.value).subscribe((data) => {
      this.alert = true;
      this.addResto.reset({});
    });
  }
  closeAlert() {
    this.alert = false;
  }
}
