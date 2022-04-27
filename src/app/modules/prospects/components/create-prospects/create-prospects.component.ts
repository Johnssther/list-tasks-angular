import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProspectsService } from '../../services/prospects.service';

@Component({
  selector: 'app-create-prospects',
  templateUrl: './create-prospects.component.html',
  styleUrls: ['./create-prospects.component.scss']
})
export class CreateProspectsComponent implements OnInit {

  formProspect!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _prospectsService: ProspectsService,
  ) {
    this.formProspect = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      age: ['', Validators.required],
      direction: ['', Validators.required],
      phone: ['', Validators.required],
      company: ['', Validators.required],
      position: ['', Validators.required],
      observations: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this._prospectsService.addProspect(this.formProspect.value)
  }

}
