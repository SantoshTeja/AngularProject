import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { JavaComponent } from './java/java.component';
import { WebComponent } from './web/web.component';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    ContactComponent
  ],
  declarations: [
    ContactComponent,
    JavaComponent,
    WebComponent
  ],
  providers: [
  ],
})
export class ContactModule { }