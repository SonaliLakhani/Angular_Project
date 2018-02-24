import { Component, Injectable,Input,Output,EventEmitter } from '@angular/core';

export interface myData {
  email:string;
}


@Injectable()
export class SharedServiceService {

  sharingData: myData={email:"nyks"};
  saveData(str){
    //console.log('save data function called' + str + this.sharingData.name);
    console.log("inside service");
    console.log(str);
    this.sharingData.email=str; 
  }
  getData() :string
  {
    //console.log('get data function called');
    return this.sharingData.email;
  }

  constructor() { }

}
