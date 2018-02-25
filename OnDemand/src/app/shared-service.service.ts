import { Component, Injectable,Input,Output,EventEmitter } from '@angular/core';

export interface myData {
  firstName : String;
  lastName : String;
  dob : String;
  mobileNumber : String;
  aadhaar : String;
  email : String;
  password : String;  
}


@Injectable()
export class SharedServiceService {

  mobileNumber : String;
  sharingData: myData={firstName:"nyks",lastName:"nyks",dob:"nyks",mobileNumber:"nyks",aadhaar:"nyks",email:"nyks",password:"nyks"};
  saveFirstName(firstName){    
    console.log("inside service");
    console.log("firstName");
    console.log(firstName);
    this.sharingData.firstName=firstName; 
  }
  getFirstName(): String{       
    return this.sharingData.firstName; 
  }
  saveLastName(lastName){        
    console.log("lastName");
    console.log(lastName);
    this.sharingData.lastName=lastName; 
  }
  getLastName(): String{       
    return this.sharingData.lastName; 
  }
  saveDob(dob){        
    console.log("dob");
    console.log(dob);
    this.sharingData.dob=dob; 
  }
  getDob(): String{       
    return this.sharingData.dob; 
  }
  saveMobileNumber(mobileNumber){        
    console.log("mobileNumber");
    console.log(mobileNumber);
    this.sharingData.mobileNumber=mobileNumber; 
  }
  getMobileNumber(): String{       
    return this.sharingData.mobileNumber; 
  }
  saveAadhaar(aadhaar){        
    console.log("aadhaar");
    console.log(aadhaar);
    this.sharingData.aadhaar=aadhaar; 
  }
  getAadhaar(): String{       
    return this.sharingData.aadhaar; 
  }
  saveEmail(email){        
    console.log("email");
    console.log(email);
    this.sharingData.email=email; 
  }
  getEmail(): String{       
    return this.sharingData.email; 
  }
  savePassword(password){        
    console.log("password");
    console.log(password);
    this.sharingData.password=password; 
  }  
  getPassword(): String{       
    return this.sharingData.password; 
  }
  /*saveData(emailId){    
    console.log("inside service");
    console.log(emailId);
    this.sharingData.email=emailId; 
  }*/
  /*getData() :string
  {email:"nyks"
    //console.log('get data function called');
    return this.sharingData.email;
  }*/

  constructor() { }

}
