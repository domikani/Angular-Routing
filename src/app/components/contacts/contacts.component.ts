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
      title: 'Default',
      style: null
    },
    {
      title: 'Green Spaces',
      style: [
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
      title: 'Google Road Labels Only',
      style: [
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
      title: 'Colors',
      style: [
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
    lat: 37.9908997,
    lon: 23.70332
  };
  public departments = [
    {
      title: 'IEK ΔΕΛΤΑ 360° Θεσσαλονίκης',
      coordinates: {
        lat: 40.6350826,
        lon: 22.9427111
      }
    },
    {
      title: 'IEK ΔΕΛΤΑ 360° Ιωαννίνων',
      coordinates: {
        lat: 39.6503847,
        lon: 20.8321143
      }
    },
    {
      title: 'IEK ΔΕΛΤΑ 360° Πάτρας',
      coordinates: {
        lat: 38.249665,
        lon: 21.7338435
      }
    },
    {
      title: 'IEK ΔΕΛΤΑ 360° Χανίων',
      coordinates: {
        lat: 35.5135366,
        lon: 24.0130289
      }
    },
    {
      title: 'IEK ΔΕΛΤΑ 360° Καλαμάτας',
      coordinates: {
        lat: 37.0369229,
        lon: 22.122914
      }
    }


  ];
}


