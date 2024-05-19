import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-configurate',
  templateUrl: './configurate.component.html',
  styleUrls: ['./configurate.component.scss']
})
export class ConfigurateComponent {
  lampOn: boolean = false;
  lampColor: string = ''; 
  fridgeTemperature: number = 0; 
  radiatorTemperature: number = 0; // Hozzáadott változó a radiátor hőmérsékletének
  tvOn: boolean = false; // Hozzáadott változó a TV be/kikapcsolójának
  nextId: number = 1;

  constructor(private firestore: AngularFirestore) {
    this.firestore.collection('deviceSettings').get().subscribe(snapshot => {
      snapshot.docs.forEach(doc => {
        const data = doc.data() as { id: number }; 
        const id = data.id;
        if (id >= this.nextId) {
          this.nextId = id + 1;
        }
      });
    });
  }

  saveSettings() {
    const newSettings = {
      id: this.nextId,
      lampOn: this.lampOn,
      lampColor: this.lampColor,
      fridgeTemperature: this.fridgeTemperature,
      radiatorTemperature: this.radiatorTemperature,
      tvOn: this.tvOn
    };

    this.firestore.collection('deviceSettings').add(newSettings)
      .then(() => {
        this.nextId++;
        alert('Beállítások mentve!');
      })
      .catch(error => {
        console.error('Hiba történt a mentés során: ', error);
        alert('Hiba történt a mentés során. Ellenőrizd a konzolt a részletekért.');
      });
  }

  startVacuum() {
    alert('Porszívó elindítva!');
  }
}
