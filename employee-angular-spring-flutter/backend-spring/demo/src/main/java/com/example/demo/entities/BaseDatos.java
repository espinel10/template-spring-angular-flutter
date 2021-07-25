package com.example.demo.entities;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class BaseDatos {
    private int num=0;
    private int ides=100;
    private List<Empleado> db;

    public BaseDatos(){
        db=new ArrayList<Empleado>();
        List<String> nombres=new ArrayList<>();
        nombres.add("Manuel");
        nombres.add("Leonel");
        nombres.add("Messi");
        nombres.add("James");
        nombres.add("Edgar");
        nombres.add("Allan");
        nombres.add("poe");
        nombres.add("Hesse");
        nombres.add("maximiliano");
        nombres.add("ada");
        nombres.add("ariana");
        nombres.add("veronica");
        nombres.add("daniela");
        nombres.add("catalina");
        nombres.add("benjamin");
        nombres.add("lebrom");
        Random random=new Random();
        for(int i=0; i<100;i++){
        int r=random.nextInt(nombres.size());
        Empleado e=new Empleado();
        e.setId(i+1);
        e.setfName(nombres.get(r));
        r=random.nextInt(nombres.size());
        e.setsName(nombres.get(r));
        e.setfLastName(nombres.get(r));
        e.setsLastName(nombres.get(r));
        e.setContry("CO");
        e.setTipoI("CC");
        e.setNumI("5115415615");
        e.setFechaIngreso("19/7/1998");
        e.setArea("mercadeo");
        e.setCorreo(generadorCorreo(e));
        db.add(e);
        }
    }
    public String generadorCorreo(Empleado e){
        int bandera=0;
        String correo;
        for (Empleado p:db){
            if (e.fLastName==p.fLastName && e.fName==p.fName){
                bandera=1;
                break;
            }

        }
        if (bandera==1){
            correo=e.fName+"."+e.fLastName+"."+num+"@"+"cidenet.com."+e.contry.toLowerCase();
            this.num=this.num+1;
        }else{
            correo=e.fName+"."+e.fLastName+"@"+"cidenet.com."+e.contry.toLowerCase();
        }
        System.out.println(correo);
        return correo;
    }
    public void create_empleado(Empleado e){
        e.setCorreo(generadorCorreo(e));
        e.setId(this.ides);
        this.ides=this.ides+1;
        db.add(e);
    }
    public void delete_empleado(int id){
        for (Empleado p: db){
            if (id==p.getId()){
                db.remove(p);
                System.out.println("Lo has borrado");
                break;
            }
        }
    }

    public Empleado get_empleado(int id){
        Empleado aux=new Empleado();
        for (Empleado p: db){
            if (id==p.getId()){
                aux=p;
                System.out.println("Lo has obtenido");
                break;
            }
        }
        return aux;
    }

    public void actualizar_empleado(Empleado e,int id){
        e.setId(id);
        for (Empleado p: db){
            if (id==p.getId()){
                String a=e.getfName()+e.getfLastName()+e.getContry();
                String b=p.getfName()+p.getfLastName()+p.getContry();
                String nuevoCorreo="";
                if (a!=b){
                    nuevoCorreo=generadorCorreo(e);
                }else{
                    nuevoCorreo=e.getCorreo();
                }
                e.setCorreo(nuevoCorreo);
                this.delete_empleado(id);
                db.add(e);
                System.out.println("actualizo empleado");
                break;
            }
        }
    }

    public List<Empleado> getAll(){
        return this.db;
    }
}
