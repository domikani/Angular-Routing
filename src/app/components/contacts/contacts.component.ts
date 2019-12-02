import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }
  public mapStyles = "";


  public styles = [
    {
      Title: 'Default',
      Style: null
    },
    {
      Title: 'GreenSpaces',
      Style: [
        {
          'featureType': 'all',
          'elementType': 'geometry.fill',
          'stylers': [
            {
              'visibility': 'on'
            }
          ]
        },
        {
          'featureType': 'all',
          'elementType': 'labels.text',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'administrative',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'landscape',
          'elementType': 'all',
          'stylers': [
            {
              'color': '#e9e0da'
            },
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'landscape.man_made',
          'elementType': 'geometry.fill',
          'stylers': [
            {
              'color': '#e9e0da'
            },
            {
              'visibility': 'on'
            }
          ]
        },
        {
          'featureType': 'landscape.natural',
          'elementType': 'geometry.fill',
          'stylers': [
            {
              'color': '#e9e0da'
            },
            {
              'visibility': 'on'
            }
          ]
        },
        {
          'featureType': 'poi',
          'elementType': 'labels.icon',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'poi.attraction',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'poi.business',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'poi.government',
          'elementType': 'geometry',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'poi.medical',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'poi.park',
          'elementType': 'all',
          'stylers': [
            {
              'color': '#b8cf78'
            },
            {
              'saturation': '19'
            },
            {
              'lightness': '-16'
            }
          ]
        },
        {
          'featureType': 'poi.park',
          'elementType': 'labels.icon',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'poi.place_of_worship',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'poi.school',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'poi.sports_complex',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'poi.sports_complex',
          'elementType': 'geometry',
          'stylers': [
            {
              'color': '#c7c7c7'
            },
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'road',
          'elementType': 'all',
          'stylers': [
            {
              'color': '#ffffff'
            }
          ]
        },
        {
          'featureType': 'road',
          'elementType': 'labels',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'road.highway',
          'elementType': 'geometry',
          'stylers': [
            {
              'color': '#ffffff'
            },
            {
              'visibility': 'simplified'
            }
          ]
        },
        {
          'featureType': 'road.highway',
          'elementType': 'labels.icon',
          'stylers': [
            {
              'color': '#ffffff'
            },
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'road.arterial',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'simplified'
            },
            {
              'color': '#ffffff'
            }
          ]
        },
        {
          'featureType': 'road.arterial',
          'elementType': 'geometry',
          'stylers': [
            {
              'visibility': 'simplified'
            }
          ]
        },
        {
          'featureType': 'road.local',
          'elementType': 'all',
          'stylers': [
            {
              'color': '#ffffff'
            },
            {
              'visibility': 'simplified'
            }
          ]
        },
        {
          'featureType': 'road.local',
          'elementType': 'geometry',
          'stylers': [
            {
              'visibility': 'on'
            }
          ]
        },
        {
          'featureType': 'transit',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'water',
          'elementType': 'all',
          'stylers': [
            {
              'color': '#84bde9'
            }
          ]
        }
      ]

    },
    {
      Title: 'Google Road Labels Only',
      Style: [
        {
          'featureType': 'administrative',
          'elementType': 'labels',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'poi',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'on'
            }
          ]
        },
        {
          'featureType': 'poi.attraction',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'on'
            }
          ]
        },
        {
          'featureType': 'poi.business',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'poi.government',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'poi.medical',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'poi.park',
          'elementType': 'labels',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'poi.place_of_worship',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'poi.school',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'poi.sports_complex',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'on'
            }
          ]
        },
        {
          'featureType': 'poi.sports_complex',
          'elementType': 'labels',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'road.highway',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'on'
            }
          ]
        },
        {
          'featureType': 'road.highway',
          'elementType': 'labels',
          'stylers': [
            {
              'visibility': 'on'
            }
          ]
        },
        {
          'featureType': 'road.highway',
          'elementType': 'labels.icon',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'transit.station',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'water',
          'elementType': 'labels',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        }
      ]

    },
    {
      Title: 'Colors',
      Style:[
        {
          "featureType": "administrative",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#444444"
            }
          ]
        },
        {
          "featureType": "administrative.country",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "visibility": "on"
            },
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "administrative.country",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.country",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.province",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "visibility": "on"
            },
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [
            {
              "color": "#f2f2f2"
            }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "visibility": "on"
            },
            {
              "color": "#f7f4a2"
            }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#656262"
            }
          ]
        },
        {
          "featureType": "landscape.man_made",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "all",
          "stylers": [
            {
              "saturation": -100
            },
            {
              "lightness": 45
            },
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#77be44"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#43474a"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#c1d62f"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "invert_lightness": true
            },
            {
              "color": "#57565c"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
            {
              "color": "#f7f7f7"
            },
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#009ca8"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#f8a81b"
            },
            {
              "weight": "1"
            }
          ]
        }
      ]

    }
  ];

  public mapZoom: number = 6;
  public center = {
    lat: 38.3683141,
    lon: 24.2728833
  };
  public departments = [
    {
      title: 'IEK ΔΕΛΤΑ 360 Θεσσαλονίκη',
      coordinates: {
        lat: 40.6350826,
        lon: 22.9427111
      }
    },
    {
      title: 'IEK ΔΕΛΤΑ 360 Ιωάννινα',
      coordinates: {
        lat: 39.6503847,
        lon: 20.8321143
      }
    },
    {
      title: 'IEK ΔΕΛΤΑ 360 Πάτρα',
      coordinates: {
        lat: 38.249665,
        lon: 21.7338435
      }
    }


  ];
}


