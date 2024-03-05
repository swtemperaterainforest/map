var wms_layers = [];

var format_Public_Amanns_Index_0 = new ol.format.GeoJSON();
var features_Public_Amanns_Index_0 = format_Public_Amanns_Index_0.readFeatures(json_Public_Amanns_Index_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Public_Amanns_Index_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Public_Amanns_Index_0.addFeatures(features_Public_Amanns_Index_0);
var lyr_Public_Amanns_Index_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Public_Amanns_Index_0, 
                style: style_Public_Amanns_Index_0,
                popuplayertitle: "Public_Amanns_Index",
                interactive: false,
                title: '<img src="styles/legend/Public_Amanns_Index_0.png" /> Public_Amanns_Index'
            });
var format_Public_Hexbins_JustAmannsAvg_1 = new ol.format.GeoJSON();
var features_Public_Hexbins_JustAmannsAvg_1 = format_Public_Hexbins_JustAmannsAvg_1.readFeatures(json_Public_Hexbins_JustAmannsAvg_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Public_Hexbins_JustAmannsAvg_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Public_Hexbins_JustAmannsAvg_1.addFeatures(features_Public_Hexbins_JustAmannsAvg_1);
var lyr_Public_Hexbins_JustAmannsAvg_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Public_Hexbins_JustAmannsAvg_1, 
                style: style_Public_Hexbins_JustAmannsAvg_1,
                popuplayertitle: "Public_Hexbins_JustAmannsAvg",
                interactive: false,
                title: '<img src="styles/legend/Public_Hexbins_JustAmannsAvg_1.png" /> Public_Hexbins_JustAmannsAvg'
            });

        var lyr_ESRIShadedRelief_2 = new ol.layer.Tile({
            'title': 'ESRI Shaded Relief',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleHybrid_3 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_4 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_WFD_River_Water_Bodies_Cycle_3_5 = new ol.format.GeoJSON();
var features_WFD_River_Water_Bodies_Cycle_3_5 = format_WFD_River_Water_Bodies_Cycle_3_5.readFeatures(json_WFD_River_Water_Bodies_Cycle_3_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WFD_River_Water_Bodies_Cycle_3_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WFD_River_Water_Bodies_Cycle_3_5.addFeatures(features_WFD_River_Water_Bodies_Cycle_3_5);
var lyr_WFD_River_Water_Bodies_Cycle_3_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WFD_River_Water_Bodies_Cycle_3_5, 
                style: style_WFD_River_Water_Bodies_Cycle_3_5,
                popuplayertitle: "WFD_River_Water_Bodies_Cycle_3",
                interactive: false,
                title: '<img src="styles/legend/WFD_River_Water_Bodies_Cycle_3_5.png" /> WFD_River_Water_Bodies_Cycle_3'
            });
var format_Hygrothermy_6 = new ol.format.GeoJSON();
var features_Hygrothermy_6 = format_Hygrothermy_6.readFeatures(json_Hygrothermy_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hygrothermy_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hygrothermy_6.addFeatures(features_Hygrothermy_6);
var lyr_Hygrothermy_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hygrothermy_6, 
                style: style_Hygrothermy_6,
                popuplayertitle: "Hygrothermy",
                interactive: false,
    title: 'Hygrothermy<br />\
    <img src="styles/legend/Hygrothermy_6_0.png" /> 5 - 5<br />\
    <img src="styles/legend/Hygrothermy_6_1.png" /> 5 - 6<br />\
    <img src="styles/legend/Hygrothermy_6_2.png" /> 6 - 7<br />\
    <img src="styles/legend/Hygrothermy_6_3.png" /> 7 - 8<br />\
    <img src="styles/legend/Hygrothermy_6_4.png" /> 8 - 9<br />'
        });
var format_Public_Coresites_Layer_7 = new ol.format.GeoJSON();
var features_Public_Coresites_Layer_7 = format_Public_Coresites_Layer_7.readFeatures(json_Public_Coresites_Layer_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Public_Coresites_Layer_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Public_Coresites_Layer_7.addFeatures(features_Public_Coresites_Layer_7);
var lyr_Public_Coresites_Layer_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Public_Coresites_Layer_7, 
                style: style_Public_Coresites_Layer_7,
                popuplayertitle: "Public_Coresites_Layer",
                interactive: false,
                title: '<img src="styles/legend/Public_Coresites_Layer_7.png" /> Public_Coresites_Layer'
            });
var format_Public_SWRA_Key_Sitescopy_8 = new ol.format.GeoJSON();
var features_Public_SWRA_Key_Sitescopy_8 = format_Public_SWRA_Key_Sitescopy_8.readFeatures(json_Public_SWRA_Key_Sitescopy_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Public_SWRA_Key_Sitescopy_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Public_SWRA_Key_Sitescopy_8.addFeatures(features_Public_SWRA_Key_Sitescopy_8);
var lyr_Public_SWRA_Key_Sitescopy_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Public_SWRA_Key_Sitescopy_8, 
                style: style_Public_SWRA_Key_Sitescopy_8,
                popuplayertitle: "Public_SWRA_Key_Sites copy",
                interactive: true,
                title: '<img src="styles/legend/Public_SWRA_Key_Sitescopy_8.png" /> Public_SWRA_Key_Sites copy'
            });
var format_SWDistrictRegions_9 = new ol.format.GeoJSON();
var features_SWDistrictRegions_9 = format_SWDistrictRegions_9.readFeatures(json_SWDistrictRegions_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SWDistrictRegions_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SWDistrictRegions_9.addFeatures(features_SWDistrictRegions_9);
var lyr_SWDistrictRegions_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SWDistrictRegions_9, 
                style: style_SWDistrictRegions_9,
                popuplayertitle: "SW District Regions",
                interactive: false,
                title: '<img src="styles/legend/SWDistrictRegions_9.png" /> SW District Regions'
            });
var group_2testgroup = new ol.layer.Group({
                                layers: [lyr_Public_Amanns_Index_0,lyr_Public_Hexbins_JustAmannsAvg_1,],
                                title: "2 test group"});

lyr_Public_Amanns_Index_0.setVisible(false);lyr_Public_Hexbins_JustAmannsAvg_1.setVisible(false);lyr_ESRIShadedRelief_2.setVisible(true);lyr_GoogleHybrid_3.setVisible(true);lyr_GoogleSatellite_4.setVisible(true);lyr_WFD_River_Water_Bodies_Cycle_3_5.setVisible(true);lyr_Hygrothermy_6.setVisible(true);lyr_Public_Coresites_Layer_7.setVisible(true);lyr_Public_SWRA_Key_Sitescopy_8.setVisible(true);lyr_SWDistrictRegions_9.setVisible(true);
var layersList = [group_2testgroup,lyr_ESRIShadedRelief_2,lyr_GoogleHybrid_3,lyr_GoogleSatellite_4,lyr_WFD_River_Water_Bodies_Cycle_3_5,lyr_Hygrothermy_6,lyr_Public_Coresites_Layer_7,lyr_Public_SWRA_Key_Sitescopy_8,lyr_SWDistrictRegions_9];
lyr_Public_Amanns_Index_0.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Index_Valu': 'Index_Valu', 'Index_Cate': 'Index_Cate', 'Index_Rang': 'Index_Rang', 'Index_Desc': 'Index_Desc', });
lyr_Public_Hexbins_JustAmannsAvg_1.set('fieldAliases', {'Index_Valu': 'Index_Valu', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Index_Cate': 'Index_Cate', 'Index_Rang': 'Index_Rang', 'Index_Desc': 'Index_Desc', });
lyr_WFD_River_Water_Bodies_Cycle_3_5.set('fieldAliases', {'fid': 'fid', 'WB_CAT': 'WB_CAT', 'RBD_ID': 'RBD_ID', 'MNCAT_NAME': 'MNCAT_NAME', 'RBD_NAME': 'RBD_NAME', 'OPCAT_ID': 'OPCAT_ID', 'hydromorph': 'hydromorph', 'MANCAT_ID': 'MANCAT_ID', 'url': 'url', 'OPCAT_NAME': 'OPCAT_NAME', 'WB_ID': 'WB_ID', 'version': 'version', 'WB_NAME': 'WB_NAME', });
lyr_Hygrothermy_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'category': 'category', 'range': 'range', 'dissolve': 'dissolve', });
lyr_Public_Coresites_Layer_7.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Public_SWRA_Key_Sitescopy_8.set('fieldAliases', {'Site': 'Site', 'latitude': 'latitude', 'longitude': 'longitude', 'Site info': 'Site info', 'Image': 'Image', });
lyr_SWDistrictRegions_9.set('fieldAliases', {'year': 'year', 'ctry_code': 'ctry_code', 'ctry_name': 'ctry_name', 'rgn_code': 'rgn_code', 'rgn_name': 'rgn_name', 'ctyua_code': 'ctyua_code', 'ctyua_name': 'ctyua_name', 'ctyua_area_': 'ctyua_area_', 'ctyua_type': 'ctyua_type', });
lyr_Public_Amanns_Index_0.set('fieldImages', {'Shape_Leng': '', 'Shape_Area': '', 'Index_Valu': '', 'Index_Cate': '', 'Index_Rang': '', 'Index_Desc': '', });
lyr_Public_Hexbins_JustAmannsAvg_1.set('fieldImages', {'Index_Valu': '', 'Shape_Leng': '', 'Shape_Area': '', 'Index_Cate': '', 'Index_Rang': '', 'Index_Desc': '', });
lyr_WFD_River_Water_Bodies_Cycle_3_5.set('fieldImages', {'fid': 'TextEdit', 'WB_CAT': 'TextEdit', 'RBD_ID': 'TextEdit', 'MNCAT_NAME': 'TextEdit', 'RBD_NAME': 'TextEdit', 'OPCAT_ID': 'TextEdit', 'hydromorph': 'TextEdit', 'MANCAT_ID': 'TextEdit', 'url': 'TextEdit', 'OPCAT_NAME': 'TextEdit', 'WB_ID': 'TextEdit', 'version': 'TextEdit', 'WB_NAME': 'TextEdit', });
lyr_Hygrothermy_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'category': 'TextEdit', 'range': 'TextEdit', 'dissolve': 'TextEdit', });
lyr_Public_Coresites_Layer_7.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Public_SWRA_Key_Sitescopy_8.set('fieldImages', {'Site': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Site info': 'TextEdit', 'Image': 'ExternalResource', });
lyr_SWDistrictRegions_9.set('fieldImages', {'year': 'TextEdit', 'ctry_code': 'TextEdit', 'ctry_name': 'TextEdit', 'rgn_code': 'TextEdit', 'rgn_name': 'TextEdit', 'ctyua_code': 'TextEdit', 'ctyua_name': 'TextEdit', 'ctyua_area_': 'TextEdit', 'ctyua_type': 'TextEdit', });
lyr_Public_Amanns_Index_0.set('fieldLabels', {});
lyr_Public_Hexbins_JustAmannsAvg_1.set('fieldLabels', {});
lyr_WFD_River_Water_Bodies_Cycle_3_5.set('fieldLabels', {'fid': 'no label', 'WB_CAT': 'no label', 'RBD_ID': 'no label', 'MNCAT_NAME': 'no label', 'RBD_NAME': 'no label', 'OPCAT_ID': 'no label', 'hydromorph': 'no label', 'MANCAT_ID': 'no label', 'url': 'no label', 'OPCAT_NAME': 'no label', 'WB_ID': 'no label', 'version': 'no label', 'WB_NAME': 'no label', });
lyr_Hygrothermy_6.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'category': 'no label', 'range': 'no label', 'dissolve': 'no label', });
lyr_Public_Coresites_Layer_7.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Public_SWRA_Key_Sitescopy_8.set('fieldLabels', {'Site': 'header label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'Site info': 'header label - always visible', 'Image': 'no label', });
lyr_SWDistrictRegions_9.set('fieldLabels', {'year': 'no label', 'ctry_code': 'no label', 'ctry_name': 'no label', 'rgn_code': 'no label', 'rgn_name': 'no label', 'ctyua_code': 'no label', 'ctyua_name': 'no label', 'ctyua_area_': 'no label', 'ctyua_type': 'no label', });
lyr_SWDistrictRegions_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});