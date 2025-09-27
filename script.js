var map=L.map("map", {center:[-34.83648874965474, -58.097171123565104], zoom:12});
L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.com/cyclosm/{z}/{x}/{y}.png', {
	maxZoom: 20,
	attribution: '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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




