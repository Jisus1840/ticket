import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // nombreCompleto: any;
  registerForm !: FormGroup;
  title = 'ticket';
  validacionCurp = '/^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/'
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nombreCompleto: ['', [Validators.required, Validators.minLength(3)]],
      curp: ['', [Validators.required], Validators.pattern(this.validacionCurp)],
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      paterno: ['', [Validators.required, Validators.minLength(3)]],
      materno: ['', [Validators.required, Validators.minLength(3)]],
      nivel: ['', [Validators.required]],
      municipio: ['', [Validators.required]],
      asunto: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.submitted = true;
    // stop the process if form is invalid
    if (this.registerForm.invalid) {
      return;
    } else {
      Swal.fire('Registro exitoso...', 'Ticket generado', 'success');
    }
  }
}
