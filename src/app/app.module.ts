import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MenuComponent } from './shared/menu/menu.component';
import { FormsModule} from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from'@angular/material/list';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { MatSliderModule } from '@angular/material/slider';
import { CapitalizePipe } from './shared/models/capitalize.pipe';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CapitalizePipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatListModule,
    MatSliderModule,
    AngularFireModule.initializeApp({"projectId":"webkert-p","appId":"1:535364780969:web:cda4f9291126d6d5a7bab8","storageBucket":"webkert-p.appspot.com","apiKey":"AIzaSyAyOWv7ukmieCBpCnZv6ZrNVcR7AqGCr5s","authDomain":"webkert-p.firebaseapp.com","messagingSenderId":"535364780969"})
    
  ],
  providers: [
    provideAnimationsAsync(),
    //provideFirebaseApp(() => initializeApp({"projectId":"webkert-p","appId":"1:535364780969:web:cda4f9291126d6d5a7bab8","storageBucket":"webkert-p.appspot.com","apiKey":"AIzaSyAyOWv7ukmieCBpCnZv6ZrNVcR7AqGCr5s","authDomain":"webkert-p.firebaseapp.com","messagingSenderId":"535364780969"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }





