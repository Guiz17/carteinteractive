var size = 0;
var placement = 'point';

var style_regio_s_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "10.4px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#ffffff";
    var bufferWidth = 1.5;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("RES_NM_REG") !== null) {
        labelText = String(feature.get("RES_NM_REG"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,247,0.6559999999999999)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(150,150,150,0.6559999999999999)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
