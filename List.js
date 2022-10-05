package com.bootcamp;

import java.util.ArrayList;
import java.util.List;

public class ListMain {

    public static void main(String[] args) {

        List<String> nombres = new ArrayList<>();

        nombres.add("Nombre1");
        nombres.add("Nombre2");
        nombres.add("Nombre3");

        System.out.println(nombres);

        for (String nombre : nombres){
            System.out.println(nombre);
        }

        List<Coche> coches = new ArrayList<>();

        coches.add(new Coche("Grande"));

        System.out.println(coches);

    }
}
