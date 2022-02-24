import React, { useCallback, useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const GoogleMaps = () => {

    const [map, setMap] = useState(null);

    const containerStyle = {
        width: '400px',
        heigth: '400px'
    }

    const center = {
        lat: -3.745,
        lng: -38.523
    }

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "MY_API_KEY",
    });

    const onLoad = useCallback(function callback (map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map);
    }, []);

    const onUnmount = useCallback(function callback (map) {
        setMap(null);
    }, []);

    return (isLoaded ?
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <></>
        </GoogleMap>
        :
        <></>
    );
}

export default React.memo(GoogleMaps);