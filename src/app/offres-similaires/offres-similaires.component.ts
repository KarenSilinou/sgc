import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Offer = {
  id: number;
  contratType: string;
  titre: string;
  location: string;
}

@Component({
  selector: 'app-offres-similaires',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './offres-similaires.component.html',
  styleUrl: './offres-similaires.component.scss'
})
export class OffresSimilairesComponent {
  offresSimilaires: Offer[] = [
    {
      id: 1,
      contratType: 'CDD',
      titre: 'International Marketing Project Manager H/F',
      location: 'Brazzaville'
    },
    {
      id: 2,
      contratType: 'CDI',
      titre: 'Contrôleur de Gestion Sociale H/F',
      location: 'Pointe-Noire'
    },
    {
      id: 3,
      contratType: 'CDD',
      titre: 'Conseiller Clientèle BtoB, H/F, CDD',
      location: 'Pointe-Noire'
    }
  ];
}
