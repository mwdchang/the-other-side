const geocoder = new google.maps.Geocoder();

/**
 * @param {number} lat
 * @param {number} lng
 * @param {function} fn
 */
async function reverseGeoCode(lat, lng, fn) {
  const geoCodePromise = new Promise((resolve, reject) => {
    geocoder.geocode({'location': {lat:lat, lng:lng}}, function(results, status) {
      if (status === 'OK') {
        resolve(results);
      } else {
        reject(status);
      }
    })
  });
  const results = await geoCodePromise;
  return _.find(results, r => r.types.includes('locality')) || results[0];
}


/**
 * @param {string} name
 * @param {function} fn
 */
async function geoCode(name, fn) {
  const geoCodePromise = new Promise((resolve, reject) => {
    geocoder.geocode({ address: name }, function(results, status) {
      if (status === 'OK') {
        resolve(results);
      } else {
        reject(status);
      }
    });
  });
  const results = await geoCodePromise;
  return results[0];
}
