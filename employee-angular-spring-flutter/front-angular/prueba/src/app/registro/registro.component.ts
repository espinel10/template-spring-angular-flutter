import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Empleado } from '../model/empleado';
import { EmpleadoService } from '../empleado.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  myForm: FormGroup;
  empleado:Empleado;

  constructor(public fb: FormBuilder,private empleadoService: EmpleadoService
    ,private route: ActivatedRoute,private router: Router) { 
    this.myForm = this.fb.group({
      fLastName: ['', [Validators.required,
                       Validators.minLength(1),                  
                      Validators.maxLength(20),
                      Validators.pattern(/^[A-Za-z]{1,20}$/)
                      ]],
      sLastName: ['', [Validators.required,
                        Validators.minLength(1),                  
                        Validators.maxLength(20),
                        Validators.pattern(/^[A-Za-z]{1,20}$/)                                    
                       ]],
      fName: ['', [Validators.required,
                  Validators.minLength(1),                  
                  Validators.maxLength(20),
                  Validators.pattern(/^[A-Za-z]{1,20}$/)     
                  ]],
      sName: ['', [Validators.minLength(1),                  
                  Validators.maxLength(20),
                  Validators.pattern(/^[a-zA-z_]{1,50}/)   
                   ]],
      contry: ['', [Validators.required]],
      tipoI: ['', [Validators.required]],
      numI: ['', [Validators.required,
                  Validators.pattern(/^[a-zA-z0-9]{1,20}/)          
                  ]],
      email:['',[]],
      fechaIngreso:['', [Validators.required]],
      area: ['', [Validators.required]],
      estado:['activo',[]]
    });
    
  }
  saveData(){
    console.log(this.myForm.value);
    this.empleadoService.createEmpleado(this.myForm.value)
    .subscribe(data=>{
      this.gotoList();
    },
    error => console.log(error));


  }
 
  ngOnInit(): void {
  }

  gotoList() {
    this.router.navigate(['/consulta']);
  }
  

}
