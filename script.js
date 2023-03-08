mapboxgl.accessToken = 'pk.eyJ1IjoibHBlbmljaGUiLCJhIjoiY2xlYW10MDV4MTBxdzQwcDY0MHRwN3F1NCJ9.4i2cT1hgNUqB_9Wzk2feKw';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

function successLocation(position) {
    console.log(position)
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([-99.12766, 19.42847])
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 14
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'top-right');

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: 'metric',
        profile: 'mapbox/cycling'
    });
      
    map.addControl(directions, 'top-left');

}
