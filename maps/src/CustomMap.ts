import { User } from './User';
import { Company } from './Company';

export class CustomMap {
  googleMap: google.maps.Map;

  constructor() {
    this.googleMap = new google.maps.Map(document.getElementById('map'), {
      zoom: 2,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addUserMarker(user: User): void {

  }

  addCompanyMarker(company: Company): void {

  }
}