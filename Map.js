import React from 'react';
import {
  GoogleMap,
  GroundOverlay,
  OverlayView,
  withGoogleMap,
  withScriptjs,
} from 'react-google-maps';
/*global google*/

function MapWithAnOverlayView(props) {
  return (
    <GoogleMap
      defaultZoom={11}
      defaultCenter={{ lat: 62.323907, lng: -150.109291 }}
      mapTypeId={'satellite'}
    >
      {/*<GroundOverlay
        defaultUrl="https://developers.google.com/maps/documentation/javascript/examples/full/images/talkeetna.png"
        defaultBounds={
          new google.maps.LatLngBounds(
            new google.maps.LatLng(62.281819, -150.287132),
            new google.maps.LatLng(62.400471, -150.005608)
          )
        }
        defaultOpacity={0.5}
      />*/}

      <OverlayView
        bounds={{
          ne: { lat: 62.281819, lng: -150.287132 },
          sw: { lat: 62.400471, lng: -150.005608 },
        }}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      >
        <img
          style={{ width: '100%', height: '100%', position: 'absolute' }}
          src="https://developers.google.com/maps/documentation/javascript/examples/full/images/talkeetna.png"
        />
      </OverlayView>
    </GoogleMap>
  );
}

export default withScriptjs(withGoogleMap(MapWithAnOverlayView));
