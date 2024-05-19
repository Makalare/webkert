import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  deviceSetting: any; // A legnagyobb id-vel rendelkező beállítás

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.fetchSettings();
  }

  getTvStatus(tvOn: boolean): string {
    return tvOn ? 'Bekapcsolva' : 'Kikapcsolva';
  }

  getLampaStatus(lampOn: boolean): string {
    return lampOn ? 'Bekapcsolva' : 'Kikapcsolva';
  }

  fetchSettings(): void {
    this.firestore.collection('deviceSettings').valueChanges().subscribe((settings: any[]) => {
      if (settings && settings.length > 0) {
        // Kiválasztjuk a legnagyobb id-vel rendelkező elemet
        this.deviceSetting = settings.reduce((prev, current) => (prev.id > current.id) ? prev : current);
      }
    });
  }

  updateSetting(setting: any): void {
    // Frissítési logika
  }

  deleteSetting(setting: any): void {
    this.firestore.collection('deviceSettings').doc(setting.id).delete()
      .then(() => {
        console.log('Sikeres törlés');
        this.deviceSetting = null; // Ha töröltük az adatot, null-á tesszük a deviceSetting-et
      })
      .catch(error => {
        console.error('Hiba történt a törlés során: ', error);
      });
  }
}
