import { Injectable } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NotiService {

  constructor(private localnoti: LocalNotifications, private platform: Platform) { }

  noti(text:string) {
    if (this.platform.is("cordova")) {
      this.localnoti.schedule({
        id: 1,
        text: text,
      }); 
    }
  }
}
