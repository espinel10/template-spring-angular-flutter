package com.example.demo.entities;

public class Empleado {
    public int id;
    public String fLastName;
    public String sLastName;
    public String fName;
    public String sName;
    public String contry;
    public String tipoI;
    public String numI;
    public String correo;
    public String fechaIngreso;
    public String area;
    public String estado;

    public Empleado(int id, String fLastName, String sLastName, String fName, String sName, String contry, String tipoI, String numI, String correo, String fechaIngreso, String area, String estado) {
        this.id = id;
        this.fLastName = fLastName;
        this.sLastName = sLastName;
        this.fName = fName;
        this.sName = sName;
        this.contry = contry;
        this.tipoI = tipoI;
        this.numI = numI;
        this.correo = correo;
        this.fechaIngreso = fechaIngreso;
        this.area = area;
        this.estado = estado;
    }

    public Empleado(){
        this.id = 0;
        this.fLastName = "";
        this.sLastName = "";
        this.fName = "";
        this.sName = "";
        this.contry = "";
        this.tipoI = "";
        this.numI = "";
        this.correo = "";
        this.fechaIngreso = "";
        this.area = "";
        this.estado = "activo";

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getfLastName() {
        return fLastName;
    }

    public void setfLastName(String fLastName) {
        this.fLastName = fLastName;
    }

    public String getsLastName() {
        return sLastName;
    }

    public void setsLastName(String sLastName) {
        this.sLastName = sLastName;
    }

    public String getfName() {
        return fName;
    }

    public void setfName(String fName) {
        this.fName = fName;
    }

    public String getsName() {
        return sName;
    }

    public void setsName(String sName) {
        this.sName = sName;
    }

    public String getContry() {
        return contry;
    }

    public void setContry(String contry) {
        this.contry = contry;
    }

    public String getTipoI() {
        return tipoI;
    }

    public void setTipoI(String tipoI) {
        this.tipoI = tipoI;
    }

    public String getNumI() {
        return numI;
    }

    public void setNumI(String numI) {
        this.numI = numI;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getFechaIngreso() {
        return fechaIngreso;
    }

    public void setFechaIngreso(String fechaIngreso) {
        this.fechaIngreso = fechaIngreso;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }
}
