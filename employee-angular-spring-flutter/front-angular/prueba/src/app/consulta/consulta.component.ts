import { Component, OnInit, ViewChild , AfterViewInit } from '@angular/core';
import { Empleado } from  '../model/empleado';
import { MaterialModule } from '../material/material.module';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from '../empleado.service';


@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})

export class ConsultaComponent implements AfterViewInit,OnInit {
  displayedColumns: string[] = ['nombres','pais','documento','email','estado','acciones'];
  dataSource: MatTableDataSource<Empleado>;
  empleados: Empleado[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route: ActivatedRoute,private router: Router,private empleadoService: EmpleadoService) { }


  ngOnInit(){
    
    this.empleadoService.getEmpleadoList()
    .subscribe(data =>{
        this.empleados = data;
        this.dataSource = new MatTableDataSource(this.empleados);
        this.dataSource.paginator = this.paginator;
      }
    );
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  editEmployee(id:number){
    this.router.navigate(['edicion',id]);;
  }

  deleteEmployee(id:number){
    this.empleadoService.deleteEmpleado(id)
    .subscribe(
      data =>{
        console.log(data);
        this.reloadData();
      },
      error =>console.log(error));
    
    
  }
  reloadData() {
    this.empleadoService.getEmpleadoList()
    .subscribe(data =>{
        this.empleados = data;
        this.dataSource = new MatTableDataSource(this.empleados);
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  
}






