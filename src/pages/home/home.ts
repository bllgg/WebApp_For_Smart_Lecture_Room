import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public ionicNamedColorfan1: string = 'primary';
  public statusFan1:string = 'OFF';
  public ionicNamedColorfan2: string = 'primary';
  public statusFan2:string = 'OFF';

  public ionicNamedColorlight1: string = 'primary';
  public statusLight1:string = 'OFF';
  public ionicNamedColorlight2: string = 'primary';
  public statusLight2:string = 'OFF';
  public ionicNamedColorlight3: string = 'primary';
  public statusLight3:string = 'OFF';

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }

  showalert() {
    let alert = this.alertCtrl.create({
      title: 'System status!',
      subTitle: '<h3><u>Fans</u></h3><p>Fan 1 :  '+this.statusFan1+'</p><p>Fan 2 :  '+this.statusFan2+'</p><h3><u>Lights</u></h3><p> </p><p>Light 1 : '+this.statusLight1+'</p><p>Light 2 : '+this.statusLight2+'</p><p>Light 3 : '+this.statusLight3+'</p>',
      buttons: ['OK']
    });
    alert.present();
  }

  public toggleNamedColor(device:string): void {
    if(device === "fan1"){
      if(this.ionicNamedColorfan1 === 'primary') { 
        this.ionicNamedColorfan1 = 'secondary';
        this.statusFan1 = 'ON';
      } else {
        this.ionicNamedColorfan1 = 'primary';
        this.statusFan1 = 'OFF';
      }
    }else if(device === "fan2"){
      if(this.ionicNamedColorfan2 === 'primary') { 
        this.ionicNamedColorfan2 = 'secondary';
        this.statusFan2 = 'ON';
      } else {
        this.ionicNamedColorfan2 = 'primary';
        this.statusFan2 = 'OFF';
      }
    }else if(device === "light1"){
      if(this.ionicNamedColorlight1 === 'primary') { 
        this.ionicNamedColorlight1 = 'secondary';
        this.statusLight1 = 'ON';
      } else {
        this.ionicNamedColorlight1 = 'primary';
        this.statusLight1 = 'OFF';
      }
    }else if(device === "light2"){
      if(this.ionicNamedColorlight2 === 'primary') { 
        this.ionicNamedColorlight2 = 'secondary';
        this.statusLight2 = 'ON';
      } else {
        this.ionicNamedColorlight2 = 'primary';
        this.statusLight2 = 'OFF';
      }
    }else if(device === "light3"){
      if(this.ionicNamedColorlight3 === 'primary') { 
        this.ionicNamedColorlight3 = 'secondary';
        this.statusLight3 = 'ON';
      } else {
        this.ionicNamedColorlight3 = 'primary';
        this.statusLight3 = 'OFF';
      }
    }
    
  }

}
