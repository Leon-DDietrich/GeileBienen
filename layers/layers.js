var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_esrisatellite_1 = new ol.layer.Tile({
            'title': 'esri satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_InsektenhotelsWasser_2 = new ol.format.GeoJSON();
var features_InsektenhotelsWasser_2 = format_InsektenhotelsWasser_2.readFeatures(json_InsektenhotelsWasser_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InsektenhotelsWasser_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InsektenhotelsWasser_2.addFeatures(features_InsektenhotelsWasser_2);
var lyr_InsektenhotelsWasser_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_InsektenhotelsWasser_2, 
                style: style_InsektenhotelsWasser_2,
                interactive: true,
                title: '<img src="styles/legend/InsektenhotelsWasser_2.png" /> Insektenhotels — Wasser'
            });
var format_InsektenhotelsAcker_3 = new ol.format.GeoJSON();
var features_InsektenhotelsAcker_3 = format_InsektenhotelsAcker_3.readFeatures(json_InsektenhotelsAcker_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InsektenhotelsAcker_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InsektenhotelsAcker_3.addFeatures(features_InsektenhotelsAcker_3);
var lyr_InsektenhotelsAcker_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_InsektenhotelsAcker_3, 
                style: style_InsektenhotelsAcker_3,
                interactive: true,
                title: '<img src="styles/legend/InsektenhotelsAcker_3.png" /> Insektenhotels — Acker'
            });
var format_InsektenhotelsGrnflche_4 = new ol.format.GeoJSON();
var features_InsektenhotelsGrnflche_4 = format_InsektenhotelsGrnflche_4.readFeatures(json_InsektenhotelsGrnflche_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InsektenhotelsGrnflche_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InsektenhotelsGrnflche_4.addFeatures(features_InsektenhotelsGrnflche_4);
var lyr_InsektenhotelsGrnflche_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_InsektenhotelsGrnflche_4, 
                style: style_InsektenhotelsGrnflche_4,
                interactive: true,
                title: '<img src="styles/legend/InsektenhotelsGrnflche_4.png" /> Insektenhotels — Grünfläche'
            });
var format_InsektenhotelsMischflche_5 = new ol.format.GeoJSON();
var features_InsektenhotelsMischflche_5 = format_InsektenhotelsMischflche_5.readFeatures(json_InsektenhotelsMischflche_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InsektenhotelsMischflche_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InsektenhotelsMischflche_5.addFeatures(features_InsektenhotelsMischflche_5);
var lyr_InsektenhotelsMischflche_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_InsektenhotelsMischflche_5, 
                style: style_InsektenhotelsMischflche_5,
                interactive: true,
                title: '<img src="styles/legend/InsektenhotelsMischflche_5.png" /> Insektenhotels — Mischfläche'
            });
var format_InsektenhotelsVersieglungsflche_6 = new ol.format.GeoJSON();
var features_InsektenhotelsVersieglungsflche_6 = format_InsektenhotelsVersieglungsflche_6.readFeatures(json_InsektenhotelsVersieglungsflche_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InsektenhotelsVersieglungsflche_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InsektenhotelsVersieglungsflche_6.addFeatures(features_InsektenhotelsVersieglungsflche_6);
var lyr_InsektenhotelsVersieglungsflche_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_InsektenhotelsVersieglungsflche_6, 
                style: style_InsektenhotelsVersieglungsflche_6,
                interactive: true,
                title: '<img src="styles/legend/InsektenhotelsVersieglungsflche_6.png" /> Insektenhotels — Versieglungsfläche'
            });
var format_InsektenhotelsStandorte_7 = new ol.format.GeoJSON();
var features_InsektenhotelsStandorte_7 = format_InsektenhotelsStandorte_7.readFeatures(json_InsektenhotelsStandorte_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InsektenhotelsStandorte_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InsektenhotelsStandorte_7.addFeatures(features_InsektenhotelsStandorte_7);
var lyr_InsektenhotelsStandorte_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_InsektenhotelsStandorte_7, 
                style: style_InsektenhotelsStandorte_7,
                interactive: true,
                title: '<img src="styles/legend/InsektenhotelsStandorte_7.png" /> Insektenhotels — Standorte'
            });

lyr_OSMStandard_0.setVisible(true);lyr_esrisatellite_1.setVisible(true);lyr_InsektenhotelsWasser_2.setVisible(true);lyr_InsektenhotelsAcker_3.setVisible(true);lyr_InsektenhotelsGrnflche_4.setVisible(true);lyr_InsektenhotelsMischflche_5.setVisible(true);lyr_InsektenhotelsVersieglungsflche_6.setVisible(true);lyr_InsektenhotelsStandorte_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_esrisatellite_1,lyr_InsektenhotelsWasser_2,lyr_InsektenhotelsAcker_3,lyr_InsektenhotelsGrnflche_4,lyr_InsektenhotelsMischflche_5,lyr_InsektenhotelsVersieglungsflche_6,lyr_InsektenhotelsStandorte_7];
lyr_InsektenhotelsWasser_2.set('fieldAliases', {'fid': 'fid', 'area': 'area', 'ID': 'ID', });
lyr_InsektenhotelsAcker_3.set('fieldAliases', {'fid': 'fid', 'area': 'area', 'ID': 'ID', });
lyr_InsektenhotelsGrnflche_4.set('fieldAliases', {'fid': 'fid', 'area': 'area', 'ID': 'ID', });
lyr_InsektenhotelsMischflche_5.set('fieldAliases', {'fid': 'fid', 'area': 'area', 'ID': 'ID', });
lyr_InsektenhotelsVersieglungsflche_6.set('fieldAliases', {'fid': 'fid', 'area': 'area', 'ID': 'ID', });
lyr_InsektenhotelsStandorte_7.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'coordinates': 'coordinates', 'longitude': 'longitude', 'latitude': 'latitude', });
lyr_InsektenhotelsWasser_2.set('fieldImages', {'fid': 'TextEdit', 'area': 'Range', 'ID': 'TextEdit', });
lyr_InsektenhotelsAcker_3.set('fieldImages', {'fid': 'TextEdit', 'area': 'Range', 'ID': '', });
lyr_InsektenhotelsGrnflche_4.set('fieldImages', {'fid': 'TextEdit', 'area': 'Range', 'ID': '', });
lyr_InsektenhotelsMischflche_5.set('fieldImages', {'fid': 'TextEdit', 'area': 'Range', 'ID': '', });
lyr_InsektenhotelsVersieglungsflche_6.set('fieldImages', {'fid': 'TextEdit', 'area': 'Range', 'ID': '', });
lyr_InsektenhotelsStandorte_7.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'coordinates': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', });
lyr_InsektenhotelsWasser_2.set('fieldLabels', {'fid': 'header label', 'area': 'header label', 'ID': 'header label', });
lyr_InsektenhotelsAcker_3.set('fieldLabels', {'fid': 'header label', 'area': 'header label', 'ID': 'header label', });
lyr_InsektenhotelsGrnflche_4.set('fieldLabels', {'fid': 'header label', 'area': 'header label', 'ID': 'header label', });
lyr_InsektenhotelsMischflche_5.set('fieldLabels', {'fid': 'header label', 'area': 'header label', 'ID': 'header label', });
lyr_InsektenhotelsVersieglungsflche_6.set('fieldLabels', {'fid': 'header label', 'area': 'header label', 'ID': 'header label', });
lyr_InsektenhotelsStandorte_7.set('fieldLabels', {'fid': 'header label', 'ID': 'header label', 'coordinates': 'header label', 'longitude': 'header label', 'latitude': 'header label', });
lyr_InsektenhotelsStandorte_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});