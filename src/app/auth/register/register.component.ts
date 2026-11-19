import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component ({
  selector:"app-register",
  templateUrl: "./register.component.html",
  styleUrls:["./register.component.scss"]
})

export class RegisterComponent implements OnInit {

  // aqui ponemos la variable que va almacenar el formulario como tal
  public formregister!:FormGroup;
  public mostrarExito:boolean=false;

  constructor(
    private fb: FormBuilder,
    private router:Router
  ){}
  
  ngOnInit(): void {
    //Inicalizamos el Formulario
    this.amrabat_Public();
  }

  //Inicializamos el formulario
  
  amrabat_Public =() =>{
    this.formregister=this.fb.group({ // esto es la validacion
      nombre:["", [Validators.required]], // Formato Obligatorio
      email:["",[Validators.required, Validators.email]], // Formato Obligatorio ( Required )
      password:["", [Validators.required, Validators.minLength(6)]], // minimo 6 caracteres ( minLength )
      confirmarPassword:["",[Validators.required]] // Que sea obligatorio
    });
  }

  // metodo para registarr a los usuarios
  RegistrarUsuarios(){
    //Validamos que el formulario este completo
    // le ponemos un condicional
    if (this.formregister.invalid){
      this.formregister.markAllAsTouched();
      return;
    }

    //obtenemos los datos 
    const data = this.formregister.value;

    //comparamos las contraseñas
    if(data.password !== data.confirmarPassword){
      alert("LAS CONTRASÑAS NO COINCIDEN, VUELVE A INTENTARLO");
      return;
    }

    //Mostramos los datos en consola
    console.log("Usuario Registrado: ", {
      nombre: data.nombre,
      email: data.email,
      password: data.password

    });

    this.mostrarExito=true

    setTimeout(()=> {
      this.mostrarExito=false;
      this.router.navigate(['/auth/login'])
    },2500)
    

  }

  }