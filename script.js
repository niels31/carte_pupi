var map=L.map("map", {center:[-34.83648874965474, -58.097171123565104], zoom:14});
L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	maxZoom: 20,
	attribution: '&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'jpg'
}).addTo(map);

function addGeoJSON(geojson){
    geojson_layer=L.geoJSON(geojson, {
        onEachFeature:function(feature,layer){
            layer.bindPopup("<b>"+feature.properties.toponyme+"</b><br>"+feature.properties.description)
        }
    })
    geojson_layer.addTo(map)
}


$.getJSON("markers.geojson",addGeoJSON)