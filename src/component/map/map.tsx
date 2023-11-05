import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';

import './map.css';

interface Location {
    lat: number;
    lng: number;
    address: string;
}

interface LocationPinProps {
    text: string;
    lat: number;
    lng: number;
}

const LocationPin: React.FC<LocationPinProps> = ({ text }) => (
    <div className="pin flex flex-col">
        <Icon icon={locationIcon} className="pin-icon " />
        <p className="pin-text ">{text}</p>
    </div>
);

interface MapProps {
    location: Location;
    zoomLevel: number;
    height: string;
}

const waterStyle = [
    {
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#502a64"
            }
        ]
    },

    {
        "featureType": "landscape",
        "elementType": "geometry.all",
        "stylers": [
            {
                "color": "#180b1f"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#81519b"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "saturation": 25
            },
            {
                "lightness": 25
            },
            {
                "weight": "0.01"
            },
        ]
    },
]

const Map: React.FC<MapProps> = ({ location, zoomLevel, height }) => (
    <div className="map">
        <div className={`google-map ${height}`}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyA3AGV5YZtd34P8K9WRnuDKTs44M-LUBLU' }}
                defaultCenter={location}
                defaultZoom={zoomLevel}
                options={{ styles: waterStyle }}
            >
                <LocationPin
                    lat={location.lat}
                    lng={location.lng}
                    text={location.address}
                />
            </GoogleMapReact>
        </div>
    </div>
);

export default Map;
