import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../model/empleado';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { EmpleadoService } from '../empleado.service';



@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit {
  id: number;
  empleado:Empleado;
  myForm: FormGroup;
  constructor(public fb: FormBuilder,private empleadoService: EmpleadoService,
    private route: ActivatedRoute,private router: Router) {
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


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  saveData(){
    console.log(this.myForm.value);
    this.empleadoService.updateEmpleado(this.id,this.myForm.value)
    .subscribe(data=>{
      this.gotoList();
    });
  }
  gotoList(){
    this.router.navigate(['/consulta']);
  }

}
