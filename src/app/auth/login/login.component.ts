import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  //fotmGroup es un tipao de angular
// para quitar el error en "public formlogin:" le agregamos ! o ? 
  public formlogin!: FormGroup;
  email: string= "chigua@gmail.com";
  password: string="chigua23"

  islogin:boolean=true

  constructor(
    private fb: FormBuilder,
    private router:Router
  ){}

  ngOnInit(): void {
    // console.log("Estoy en el login"); metodoo propoio que me permite iniciarlizar cuando este en el componente
    this.amrabat_Public();

    
  }

  //Metodo para iniciar el Form
  amrabat_Public=()=>{
    this.formlogin = this.fb.group({
      email: [""],
      password: [""]
    })
    
  }
  IniciarSesion(){
    const data= this.formlogin.value;
    console.log(data);
    


    
    if(data.email != this.email || data.password != this.password){
      //console.log("LOGIN INCORRECTO");
      this.islogin=false //--> manera de hacerlo
      //this.islogin= !this.islogin // esto se llama negacion o dato interpolado tambien aqui le invertimos los valores osea true es false o false es true

      setTimeout(() => {
        this.islogin=true
      },2000)
    }
    else{
      // espara crear variables de sesion
      sessionStorage.setItem('login','true')

      setTimeout(() => {
        this.router.navigate(['/pages/dashboard'])
      }, 2000);
      

    }
    
    
  }

}
