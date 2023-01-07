import { useState, useEffect } from "react";
const useGeoLocation = () => {
  const [coords, setCoords] = useState({
    lat: undefined,
    lon: undefined,
  });
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          let lat = position.coords.latitude;
          let lon = position.coords.longitude;
          setCoords({ lat, lon });
        },
        (err) => setCoords(null),
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    } else {
      setCoords(null);
    }
  }, []);
  return coords;
};
export default useGeoLocation;
