import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class authService{
    token:string;
    constructor(private router:Router){}
    signup(email:string, password:string){
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(
            response => console.log(response)
            )
        .catch(
            error => console.log(error)
        )
    }
    signin(email:string, password:string){
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response => {
                this.router.navigate(['/recipes']);
                firebase.auth().currentUser.getIdToken().
                then(
                    (token: string) => {
                        this.token = token;
                        console.log(this.token);
                    }
                    )
                }
            )
            .catch(
                error => console.log(error)
            );
        }
    getToken(){
        firebase.auth().currentUser.getIdToken()
        .then(
            (token:string) => this.token =token
        )
        .catch(
            error => console.log(error)
        );
        return this.token; 
    }

    isAuthenticated(){
        return this.token !=null;
    }
    logout(){
        this.router.navigate(['/']);
        firebase.auth().signOut();
        this.token = null;
    }
}
