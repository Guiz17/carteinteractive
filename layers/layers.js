var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.osm.org/{z}/{x}/{y}.png'
            })
        });
var format_regio_s_1 = new ol.format.GeoJSON();
var features_regio_s_1 = format_regio_s_1.readFeatures(json_regio_s_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_regio_s_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_regio_s_1.addFeatures(features_regio_s_1);
var lyr_regio_s_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_regio_s_1, 
                style: style_regio_s_1,
                interactive: true,
                title: '<img src="styles/legend/regio_s_1.png" /> regio_s'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_regio_s_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_regio_s_1];
lyr_regio_s_1.set('fieldAliases', {'RES_NO_IND': 'RES_NO_IND', 'RES_DE_IND': 'RES_DE_IND', 'RES_CO_REG': 'RES_CO_REG', 'RES_NM_REG': 'RES_NM_REG', 'RES_CO_REF': 'RES_CO_REF', 'RES_CO_VER': 'RES_CO_VER', });
lyr_regio_s_1.set('fieldImages', {'RES_NO_IND': 'TextEdit', 'RES_DE_IND': 'TextEdit', 'RES_CO_REG': 'TextEdit', 'RES_NM_REG': 'TextEdit', 'RES_CO_REF': 'TextEdit', 'RES_CO_VER': 'TextEdit', });
lyr_regio_s_1.set('fieldLabels', {'RES_NO_IND': 'header label', 'RES_DE_IND': 'no label', 'RES_CO_REG': 'no label', 'RES_NM_REG': 'inline label', 'RES_CO_REF': 'no label', 'RES_CO_VER': 'no label', });
lyr_regio_s_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});