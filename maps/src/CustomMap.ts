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
}
