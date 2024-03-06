var wms_layers = [];

var format_Cornwall_0 = new ol.format.GeoJSON();
var features_Cornwall_0 = format_Cornwall_0.readFeatures(json_Cornwall_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cornwall_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cornwall_0.addFeatures(features_Cornwall_0);
var lyr_Cornwall_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cornwall_0, 
                style: style_Cornwall_0,
                popuplayertitle: "Cornwall",
                interactive: false,
                title: '<img src="styles/legend/Cornwall_0.png" /> Cornwall'
            });
var format_Devon_1 = new ol.format.GeoJSON();
var features_Devon_1 = format_Devon_1.readFeatures(json_Devon_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Devon_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Devon_1.addFeatures(features_Devon_1);
var lyr_Devon_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Devon_1, 
                style: style_Devon_1,
                popuplayertitle: "Devon",
                interactive: false,
                title: '<img src="styles/legend/Devon_1.png" /> Devon'
            });
var format_SomersetDorset_2 = new ol.format.GeoJSON();
var features_SomersetDorset_2 = format_SomersetDorset_2.readFeatures(json_SomersetDorset_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SomersetDorset_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SomersetDorset_2.addFeatures(features_SomersetDorset_2);
var lyr_SomersetDorset_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SomersetDorset_2, 
                style: style_SomersetDorset_2,
                popuplayertitle: "Somerset-Dorset",
                interactive: false,
                title: '<img src="styles/legend/SomersetDorset_2.png" /> Somerset-Dorset'
            });
var format_GloucesterWiltBath_3 = new ol.format.GeoJSON();
var features_GloucesterWiltBath_3 = format_GloucesterWiltBath_3.readFeatures(json_GloucesterWiltBath_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GloucesterWiltBath_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GloucesterWiltBath_3.addFeatures(features_GloucesterWiltBath_3);
var lyr_GloucesterWiltBath_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GloucesterWiltBath_3, 
                style: style_GloucesterWiltBath_3,
                popuplayertitle: "Gloucester-Wilt-Bath",
                interactive: false,
                title: '<img src="styles/legend/GloucesterWiltBath_3.png" /> Gloucester-Wilt-Bath'
            });
var format_CoreWoodlandsites_4 = new ol.format.GeoJSON();
var features_CoreWoodlandsites_4 = format_CoreWoodlandsites_4.readFeatures(json_CoreWoodlandsites_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoreWoodlandsites_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoreWoodlandsites_4.addFeatures(features_CoreWoodlandsites_4);
var lyr_CoreWoodlandsites_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoreWoodlandsites_4, 
                style: style_CoreWoodlandsites_4,
                popuplayertitle: "Core Woodland sites",
                interactive: false,
                title: '<img src="styles/legend/CoreWoodlandsites_4.png" /> Core Woodland sites'
            });
var format_AmannsIndex_5 = new ol.format.GeoJSON();
var features_AmannsIndex_5 = format_AmannsIndex_5.readFeatures(json_AmannsIndex_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AmannsIndex_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AmannsIndex_5.addFeatures(features_AmannsIndex_5);
var lyr_AmannsIndex_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AmannsIndex_5, 
                style: style_AmannsIndex_5,
                popuplayertitle: "Amanns Index",
                interactive: false,
                title: '<img src="styles/legend/AmannsIndex_5.png" /> Amanns Index'
            });
var format_AmannsAverage_6 = new ol.format.GeoJSON();
var features_AmannsAverage_6 = format_AmannsAverage_6.readFeatures(json_AmannsAverage_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AmannsAverage_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AmannsAverage_6.addFeatures(features_AmannsAverage_6);
var lyr_AmannsAverage_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AmannsAverage_6, 
                style: style_AmannsAverage_6,
                popuplayertitle: "Amanns Average",
                interactive: false,
                title: '<img src="styles/legend/AmannsAverage_6.png" /> Amanns Average'
            });

        var lyr_GoogleHybrid_7 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRISatellite_8 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRIShadedRelief_9 = new ol.layer.Tile({
            'title': 'ESRI Shaded Relief',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_WFDRivers_10 = new ol.format.GeoJSON();
var features_WFDRivers_10 = format_WFDRivers_10.readFeatures(json_WFDRivers_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WFDRivers_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WFDRivers_10.addFeatures(features_WFDRivers_10);
var lyr_WFDRivers_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WFDRivers_10, 
                style: style_WFDRivers_10,
                popuplayertitle: "WFD Rivers",
                interactive: false,
                title: '<img src="styles/legend/WFDRivers_10.png" /> WFD Rivers'
            });
var format_Hygrothermy_11 = new ol.format.GeoJSON();
var features_Hygrothermy_11 = format_Hygrothermy_11.readFeatures(json_Hygrothermy_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hygrothermy_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hygrothermy_11.addFeatures(features_Hygrothermy_11);
var lyr_Hygrothermy_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hygrothermy_11, 
                style: style_Hygrothermy_11,
                popuplayertitle: "Hygrothermy",
                interactive: false,
    title: 'Hygrothermy<br />\
    <img src="styles/legend/Hygrothermy_11_0.png" /> 5 - 5<br />\
    <img src="styles/legend/Hygrothermy_11_1.png" /> 5 - 6<br />\
    <img src="styles/legend/Hygrothermy_11_2.png" /> 6 - 7<br />\
    <img src="styles/legend/Hygrothermy_11_3.png" /> 7 - 8<br />\
    <img src="styles/legend/Hygrothermy_11_4.png" /> 8 - 9<br />'
        });
var format_SWRegions_12 = new ol.format.GeoJSON();
var features_SWRegions_12 = format_SWRegions_12.readFeatures(json_SWRegions_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SWRegions_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SWRegions_12.addFeatures(features_SWRegions_12);
var lyr_SWRegions_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SWRegions_12, 
                style: style_SWRegions_12,
                popuplayertitle: "SW Regions",
                interactive: false,
                title: '<img src="styles/legend/SWRegions_12.png" /> SW Regions'
            });
var format_SWRA_Key_Locations_13 = new ol.format.GeoJSON();
var features_SWRA_Key_Locations_13 = format_SWRA_Key_Locations_13.readFeatures(json_SWRA_Key_Locations_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SWRA_Key_Locations_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SWRA_Key_Locations_13.addFeatures(features_SWRA_Key_Locations_13);
var lyr_SWRA_Key_Locations_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SWRA_Key_Locations_13, 
                style: style_SWRA_Key_Locations_13,
                popuplayertitle: "SWRA_Key_Locations",
                interactive: true,
                title: '<img src="styles/legend/SWRA_Key_Locations_13.png" /> SWRA_Key_Locations'
            });
var group_Amanns = new ol.layer.Group({
                                layers: [lyr_AmannsIndex_5,lyr_AmannsAverage_6,],
                                title: "Amanns",
                                fold: 'close'});
var group_SWWoodland = new ol.layer.Group({
                                layers: [lyr_Cornwall_0,lyr_Devon_1,lyr_SomersetDorset_2,lyr_GloucesterWiltBath_3,lyr_CoreWoodlandsites_4,],
                                title: "SW Woodland",
                                fold: 'close'});

lyr_Cornwall_0.setVisible(true);lyr_Devon_1.setVisible(true);lyr_SomersetDorset_2.setVisible(true);lyr_GloucesterWiltBath_3.setVisible(true);lyr_CoreWoodlandsites_4.setVisible(true);lyr_AmannsIndex_5.setVisible(false);lyr_AmannsAverage_6.setVisible(false);lyr_GoogleHybrid_7.setVisible(true);lyr_ESRISatellite_8.setVisible(true);lyr_ESRIShadedRelief_9.setVisible(true);lyr_WFDRivers_10.setVisible(true);lyr_Hygrothermy_11.setVisible(false);lyr_SWRegions_12.setVisible(true);lyr_SWRA_Key_Locations_13.setVisible(true);
var layersList = [lyr_GoogleHybrid_7,lyr_ESRISatellite_8,lyr_ESRIShadedRelief_9,lyr_WFDRivers_10,group_SWWoodland,group_Amanns,lyr_Hygrothermy_11,lyr_SWRegions_12,lyr_SWRA_Key_Locations_13];
lyr_Cornwall_0.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Devon_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SomersetDorset_2.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_GloucesterWiltBath_3.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_CoreWoodlandsites_4.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_AmannsIndex_5.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Index_Valu': 'Index_Valu', 'Index_Cate': 'Index_Cate', 'Index_Rang': 'Index_Rang', 'Index_Desc': 'Index_Desc', });
lyr_AmannsAverage_6.set('fieldAliases', {'Index_Valu': 'Index_Valu', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Index_Cate': 'Index_Cate', 'Index_Rang': 'Index_Rang', 'Index_Desc': 'Index_Desc', });
lyr_WFDRivers_10.set('fieldAliases', {'fid': 'fid', 'WB_CAT': 'WB_CAT', 'RBD_ID': 'RBD_ID', 'MNCAT_NAME': 'MNCAT_NAME', 'RBD_NAME': 'RBD_NAME', 'OPCAT_ID': 'OPCAT_ID', 'hydromorph': 'hydromorph', 'MANCAT_ID': 'MANCAT_ID', 'url': 'url', 'OPCAT_NAME': 'OPCAT_NAME', 'WB_ID': 'WB_ID', 'version': 'version', 'WB_NAME': 'WB_NAME', });
lyr_Hygrothermy_11.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'category': 'category', 'range': 'range', 'dissolve': 'dissolve', });
lyr_SWRegions_12.set('fieldAliases', {'year': 'year', 'ctry_code': 'ctry_code', 'ctry_name': 'ctry_name', 'rgn_code': 'rgn_code', 'rgn_name': 'rgn_name', 'ctyua_code': 'ctyua_code', 'ctyua_name': 'ctyua_name', 'ctyua_area_': 'ctyua_area_', 'ctyua_type': 'ctyua_type', });
lyr_SWRA_Key_Locations_13.set('fieldAliases', {'Site': 'Site', 'latitude': 'latitude', 'longitude': 'longitude', 'Site info': 'Site info', 'Image': 'Image', });
lyr_Cornwall_0.set('fieldImages', {'Shape_Leng': '', 'Shape_Area': '', });
lyr_Devon_1.set('fieldImages', {'Shape_Leng': '', 'Shape_Area': '', });
lyr_SomersetDorset_2.set('fieldImages', {'Shape_Leng': '', 'Shape_Area': '', });
lyr_GloucesterWiltBath_3.set('fieldImages', {'Shape_Leng': '', 'Shape_Area': '', });
lyr_CoreWoodlandsites_4.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_AmannsIndex_5.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Index_Valu': 'TextEdit', 'Index_Cate': 'TextEdit', 'Index_Rang': 'TextEdit', 'Index_Desc': 'TextEdit', });
lyr_AmannsAverage_6.set('fieldImages', {'Index_Valu': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Index_Cate': 'TextEdit', 'Index_Rang': 'TextEdit', 'Index_Desc': 'TextEdit', });
lyr_WFDRivers_10.set('fieldImages', {'fid': 'TextEdit', 'WB_CAT': 'TextEdit', 'RBD_ID': 'TextEdit', 'MNCAT_NAME': 'TextEdit', 'RBD_NAME': 'TextEdit', 'OPCAT_ID': 'TextEdit', 'hydromorph': 'TextEdit', 'MANCAT_ID': 'TextEdit', 'url': 'TextEdit', 'OPCAT_NAME': 'TextEdit', 'WB_ID': 'TextEdit', 'version': 'TextEdit', 'WB_NAME': 'TextEdit', });
lyr_Hygrothermy_11.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'category': 'TextEdit', 'range': 'TextEdit', 'dissolve': 'TextEdit', });
lyr_SWRegions_12.set('fieldImages', {'year': 'TextEdit', 'ctry_code': 'TextEdit', 'ctry_name': 'TextEdit', 'rgn_code': 'TextEdit', 'rgn_name': 'TextEdit', 'ctyua_code': 'TextEdit', 'ctyua_name': 'TextEdit', 'ctyua_area_': 'TextEdit', 'ctyua_type': 'TextEdit', });
lyr_SWRA_Key_Locations_13.set('fieldImages', {'Site': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Site info': 'TextEdit', 'Image': 'ExternalResource', });
lyr_Cornwall_0.set('fieldLabels', {});
lyr_Devon_1.set('fieldLabels', {});
lyr_SomersetDorset_2.set('fieldLabels', {});
lyr_GloucesterWiltBath_3.set('fieldLabels', {});
lyr_CoreWoodlandsites_4.set('fieldLabels', {});
lyr_AmannsIndex_5.set('fieldLabels', {});
lyr_AmannsAverage_6.set('fieldLabels', {});
lyr_WFDRivers_10.set('fieldLabels', {'fid': 'no label', 'WB_CAT': 'no label', 'RBD_ID': 'no label', 'MNCAT_NAME': 'no label', 'RBD_NAME': 'no label', 'OPCAT_ID': 'no label', 'hydromorph': 'no label', 'MANCAT_ID': 'no label', 'url': 'no label', 'OPCAT_NAME': 'no label', 'WB_ID': 'no label', 'version': 'no label', 'WB_NAME': 'no label', });
lyr_Hygrothermy_11.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'category': 'no label', 'range': 'no label', 'dissolve': 'no label', });
lyr_SWRegions_12.set('fieldLabels', {'year': 'no label', 'ctry_code': 'no label', 'ctry_name': 'no label', 'rgn_code': 'no label', 'rgn_name': 'no label', 'ctyua_code': 'no label', 'ctyua_name': 'header label - visible with data', 'ctyua_area_': 'no label', 'ctyua_type': 'no label', });
lyr_SWRA_Key_Locations_13.set('fieldLabels', {'Site': 'header label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'Site info': 'header label - always visible', 'Image': 'no label', });
lyr_SWRA_Key_Locations_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});