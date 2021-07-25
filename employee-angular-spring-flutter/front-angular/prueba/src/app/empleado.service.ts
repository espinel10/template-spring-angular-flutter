import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from './model/empleado';
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private baseUrl='http://localhost:4444/prueba/empleado';

  constructor(private http: HttpClient) { }

  getEmpleado(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createEmpleado(empleado: Object): Observable<object>{
   return this.http.post(`${this.baseUrl}`,empleado);
  }
  updateEmpleado(id:number,empleado: Object):Observable<object>{
    return this.http.put(`${this.baseUrl}/${id}`,empleado);
  }
  deleteEmpleado(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`,{ responseType: 'text'});
  }

  getEmpleadoList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

}
