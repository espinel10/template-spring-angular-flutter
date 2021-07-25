package com.example.demo.controllers;

import com.example.demo.entities.BaseDatos;
import com.example.demo.entities.Empleado;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200",maxAge = 3600)
@RestController
@RequestMapping("/prueba")
public class EmployeeController {

    private BaseDatos database= new BaseDatos();

    @GetMapping("/empleado")
    public List<Empleado> getAllEmployee(){
        System.out.println("lista");
        return database.getAll();
    }
    @GetMapping("empleado/{id}")
    public ResponseEntity<Empleado> geteEmployeById(@PathVariable(value = "id") Integer Id)  {
        System.out.println("actualiza");
        Empleado empleado=new Empleado();
        empleado=database.get_empleado(Id);
        return ResponseEntity.ok().body(empleado);
    }

    @PostMapping("/empleado")
    public Empleado createEmploye(@Validated @RequestBody Empleado empleado){
        System.out.println("crea");
        database.create_empleado(empleado);
        return empleado;
    }

    @PutMapping("/empleado/{id}")
    public ResponseEntity<Empleado> updatePersona(@PathVariable(value = "id") Integer Id,
                                                  @Validated @RequestBody Empleado empleadoUpdate) {
        System.out.println("------------");
        System.out.println(empleadoUpdate.getId());
        System.out.println(empleadoUpdate.getCorreo());
        System.out.println("actualiza");
        database.actualizar_empleado(empleadoUpdate,Id);
        return ResponseEntity.ok(empleadoUpdate);
    }

    @DeleteMapping("/empleado/{id}")
    public Map<String,Boolean> deleteEmpleado(@PathVariable(value = "id") Integer Id) {
        System.out.println("borra");
        database.delete_empleado(Id);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return response;
    }



}
