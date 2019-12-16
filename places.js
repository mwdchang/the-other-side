// https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyDIRqVwNwJtPVQ6RlUBn1wEPqnLRolRLIY&result_type=locality
// https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY

// Expires 2020
const API = 'AIzaSyDIRqVwNwJtPVQ6RlUBn1wEPqnLRolRLIY';


/**
 * @param {number} lat
 * @param {number} lng
 * @param {function} fn
 */
async function reverseGeoCode(lat, lng, fn) {
  const url = 'https://maps.googleapis.com/maps/api/geocode/json?' +
    `latlng=${lat},${lng}` + 
    `&key=${API}` + 
    '&result_type=political|locality';
  const result = await fetch(url);
  const data = await result.json();
  return data.results[0];
}


/**
 * @param {string} name
 * @param {function} fn
 */
async function geoCode(name, fn) {
  const url = 'https://maps.googleapis.com/maps/api/geocode/json?' +
    `address=${name}` + 
    `&key=${API}`; 

  const result = await fetch(url);
  const data = await result.json();
  return data.results[0];
}


function GetLatlong(placeStr) {
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({ 'address': placeStr }, function (results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var latitude = results[0].geometry.location.lat();
      var longitude = results[0].geometry.location.lng();
      // console.log('place', placeStr, latitude, longitude);
    }
  });
}

