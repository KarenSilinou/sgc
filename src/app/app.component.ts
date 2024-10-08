import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from "./contact/contact.component";
import { HeaderComponent } from "./header/header.component";
import { NavComponent } from "./nav/nav.component";
import { CandidaturesComponent } from "./candidatures/candidatures.component";
import { OffresSimilairesComponent } from "./offres-similaires/offres-similaires.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactComponent, HeaderComponent, NavComponent, CandidaturesComponent, OffresSimilairesComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sgc-angular';
}
