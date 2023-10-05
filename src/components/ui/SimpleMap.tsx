import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 10.8538211,
      lng: 106.6252535,
    },
    zoom: 15,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "500px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} />
      </GoogleMapReact>
    </div>
  );
}
