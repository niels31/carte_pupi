var map=L.map("map", {center:[-34.83648874965474, -58.097171123565104], zoom:12});
L.tileLayer('https://data.geopf.fr/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&STYLE={style}&TILEMATRIXSET=PM&FORMAT={format}&LAYER=ORTHOIMAGERY.ORTHOPHOTOS&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}', {
	attribution: '<a target="_blank" href="https://www.geoportail.gouv.fr/">Geoportail France</a>',
	bounds: [[-75, -180], [81, 180]],
	minZoom: 2,
	maxZoom: 12,
	format: 'image/jpeg',
	style: 'normal'
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
