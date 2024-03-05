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

        var lyr_GoogleTerrain_2 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRIShadedRelief_3 = new ol.layer.Tile({
            'title': 'ESRI Shaded Relief',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_WFD_River_Water_Bodies_Cycle_3_4 = new ol.format.GeoJSON();
var features_WFD_River_Water_Bodies_Cycle_3_4 = format_WFD_River_Water_Bodies_Cycle_3_4.readFeatures(json_WFD_River_Water_Bodies_Cycle_3_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WFD_River_Water_Bodies_Cycle_3_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WFD_River_Water_Bodies_Cycle_3_4.addFeatures(features_WFD_River_Water_Bodies_Cycle_3_4);
var lyr_WFD_River_Water_Bodies_Cycle_3_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WFD_River_Water_Bodies_Cycle_3_4, 
                style: style_WFD_River_Water_Bodies_Cycle_3_4,
                popuplayertitle: "WFD_River_Water_Bodies_Cycle_3",
                interactive: false,
                title: '<img src="styles/legend/WFD_River_Water_Bodies_Cycle_3_4.png" /> WFD_River_Water_Bodies_Cycle_3'
            });
var format_Hygrothermy_5 = new ol.format.GeoJSON();
var features_Hygrothermy_5 = format_Hygrothermy_5.readFeatures(json_Hygrothermy_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hygrothermy_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hygrothermy_5.addFeatures(features_Hygrothermy_5);
var lyr_Hygrothermy_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hygrothermy_5, 
                style: style_Hygrothermy_5,
                popuplayertitle: "Hygrothermy",
                interactive: false,
    title: 'Hygrothermy<br />\
    <img src="styles/legend/Hygrothermy_5_0.png" /> 5 - 5<br />\
    <img src="styles/legend/Hygrothermy_5_1.png" /> 5 - 6<br />\
    <img src="styles/legend/Hygrothermy_5_2.png" /> 6 - 7<br />\
    <img src="styles/legend/Hygrothermy_5_3.png" /> 7 - 8<br />\
    <img src="styles/legend/Hygrothermy_5_4.png" /> 8 - 9<br />'
        });
var format_Public_Coresites_Layer_6 = new ol.format.GeoJSON();
var features_Public_Coresites_Layer_6 = format_Public_Coresites_Layer_6.readFeatures(json_Public_Coresites_Layer_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Public_Coresites_Layer_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Public_Coresites_Layer_6.addFeatures(features_Public_Coresites_Layer_6);
var lyr_Public_Coresites_Layer_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Public_Coresites_Layer_6, 
                style: style_Public_Coresites_Layer_6,
                popuplayertitle: "Public_Coresites_Layer",
                interactive: false,
                title: '<img src="styles/legend/Public_Coresites_Layer_6.png" /> Public_Coresites_Layer'
            });
var format_Public_SWRA_Key_Sitescopy_7 = new ol.format.GeoJSON();
var features_Public_SWRA_Key_Sitescopy_7 = format_Public_SWRA_Key_Sitescopy_7.readFeatures(json_Public_SWRA_Key_Sitescopy_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Public_SWRA_Key_Sitescopy_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Public_SWRA_Key_Sitescopy_7.addFeatures(features_Public_SWRA_Key_Sitescopy_7);
var lyr_Public_SWRA_Key_Sitescopy_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Public_SWRA_Key_Sitescopy_7, 
                style: style_Public_SWRA_Key_Sitescopy_7,
                popuplayertitle: "Public_SWRA_Key_Sites copy",
                interactive: true,
                title: '<img src="styles/legend/Public_SWRA_Key_Sitescopy_7.png" /> Public_SWRA_Key_Sites copy'
            });
var format_Public_SWRA_Key_Sites_8 = new ol.format.GeoJSON();
var features_Public_SWRA_Key_Sites_8 = format_Public_SWRA_Key_Sites_8.readFeatures(json_Public_SWRA_Key_Sites_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Public_SWRA_Key_Sites_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Public_SWRA_Key_Sites_8.addFeatures(features_Public_SWRA_Key_Sites_8);
var lyr_Public_SWRA_Key_Sites_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Public_SWRA_Key_Sites_8, 
                style: style_Public_SWRA_Key_Sites_8,
                popuplayertitle: "Public_SWRA_Key_Sites",
                interactive: true,
                title: '<img src="styles/legend/Public_SWRA_Key_Sites_8.png" /> Public_SWRA_Key_Sites'
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
var format_DemoPoints3_10 = new ol.format.GeoJSON();
var features_DemoPoints3_10 = format_DemoPoints3_10.readFeatures(json_DemoPoints3_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DemoPoints3_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DemoPoints3_10.addFeatures(features_DemoPoints3_10);
var lyr_DemoPoints3_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DemoPoints3_10, 
                style: style_DemoPoints3_10,
                popuplayertitle: "DemoPoints3",
                interactive: true,
                title: '<img src="styles/legend/DemoPoints3_10.png" /> DemoPoints3'
            });
var group_2testgroup = new ol.layer.Group({
                                layers: [lyr_Public_Amanns_Index_0,lyr_Public_Hexbins_JustAmannsAvg_1,],
                                title: "2 test group"});

lyr_Public_Amanns_Index_0.setVisible(false);lyr_Public_Hexbins_JustAmannsAvg_1.setVisible(false);lyr_GoogleTerrain_2.setVisible(true);lyr_ESRIShadedRelief_3.setVisible(true);lyr_WFD_River_Water_Bodies_Cycle_3_4.setVisible(true);lyr_Hygrothermy_5.setVisible(true);lyr_Public_Coresites_Layer_6.setVisible(true);lyr_Public_SWRA_Key_Sitescopy_7.setVisible(true);lyr_Public_SWRA_Key_Sites_8.setVisible(true);lyr_SWDistrictRegions_9.setVisible(true);lyr_DemoPoints3_10.setVisible(true);
var layersList = [group_2testgroup,lyr_GoogleTerrain_2,lyr_ESRIShadedRelief_3,lyr_WFD_River_Water_Bodies_Cycle_3_4,lyr_Hygrothermy_5,lyr_Public_Coresites_Layer_6,lyr_Public_SWRA_Key_Sitescopy_7,lyr_Public_SWRA_Key_Sites_8,lyr_SWDistrictRegions_9,lyr_DemoPoints3_10];
lyr_Public_Amanns_Index_0.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Index_Valu': 'Index_Valu', 'Index_Cate': 'Index_Cate', 'Index_Rang': 'Index_Rang', 'Index_Desc': 'Index_Desc', });
lyr_Public_Hexbins_JustAmannsAvg_1.set('fieldAliases', {'Index_Valu': 'Index_Valu', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Index_Cate': 'Index_Cate', 'Index_Rang': 'Index_Rang', 'Index_Desc': 'Index_Desc', });
lyr_WFD_River_Water_Bodies_Cycle_3_4.set('fieldAliases', {'fid': 'fid', 'WB_CAT': 'WB_CAT', 'RBD_ID': 'RBD_ID', 'MNCAT_NAME': 'MNCAT_NAME', 'RBD_NAME': 'RBD_NAME', 'OPCAT_ID': 'OPCAT_ID', 'hydromorph': 'hydromorph', 'MANCAT_ID': 'MANCAT_ID', 'url': 'url', 'OPCAT_NAME': 'OPCAT_NAME', 'WB_ID': 'WB_ID', 'version': 'version', 'WB_NAME': 'WB_NAME', });
lyr_Hygrothermy_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'category': 'category', 'range': 'range', 'dissolve': 'dissolve', });
lyr_Public_Coresites_Layer_6.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Public_SWRA_Key_Sitescopy_7.set('fieldAliases', {'Site': 'Site', 'latitude': 'latitude', 'longitude': 'longitude', 'Site info': 'Site info', 'Image': 'Image', });
lyr_Public_SWRA_Key_Sites_8.set('fieldAliases', {'Site': 'Site', 'latitude': 'latitude', 'longitude': 'longitude', 'Site info': 'Site info', 'Image': 'Image', });
lyr_SWDistrictRegions_9.set('fieldAliases', {'year': 'year', 'ctry_code': 'ctry_code', 'ctry_name': 'ctry_name', 'rgn_code': 'rgn_code', 'rgn_name': 'rgn_name', 'ctyua_code': 'ctyua_code', 'ctyua_name': 'ctyua_name', 'ctyua_area_': 'ctyua_area_', 'ctyua_type': 'ctyua_type', });
lyr_DemoPoints3_10.set('fieldAliases', {'fid': 'fid', 'x': 'x', 'y': 'y', 'whatAmI': 'whatAmI', 'describe': 'describe', 'image': 'image', });
lyr_Public_Amanns_Index_0.set('fieldImages', {'Shape_Leng': '', 'Shape_Area': '', 'Index_Valu': '', 'Index_Cate': '', 'Index_Rang': '', 'Index_Desc': '', });
lyr_Public_Hexbins_JustAmannsAvg_1.set('fieldImages', {'Index_Valu': '', 'Shape_Leng': '', 'Shape_Area': '', 'Index_Cate': '', 'Index_Rang': '', 'Index_Desc': '', });
lyr_WFD_River_Water_Bodies_Cycle_3_4.set('fieldImages', {'fid': 'TextEdit', 'WB_CAT': 'TextEdit', 'RBD_ID': 'TextEdit', 'MNCAT_NAME': 'TextEdit', 'RBD_NAME': 'TextEdit', 'OPCAT_ID': 'TextEdit', 'hydromorph': 'TextEdit', 'MANCAT_ID': 'TextEdit', 'url': 'TextEdit', 'OPCAT_NAME': 'TextEdit', 'WB_ID': 'TextEdit', 'version': 'TextEdit', 'WB_NAME': 'TextEdit', });
lyr_Hygrothermy_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'category': 'TextEdit', 'range': 'TextEdit', 'dissolve': 'TextEdit', });
lyr_Public_Coresites_Layer_6.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Public_SWRA_Key_Sitescopy_7.set('fieldImages', {'Site': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Site info': 'TextEdit', 'Image': 'ExternalResource', });
lyr_Public_SWRA_Key_Sites_8.set('fieldImages', {'Site': '', 'latitude': '', 'longitude': '', 'Site info': '', 'Image': '', });
lyr_SWDistrictRegions_9.set('fieldImages', {'year': 'TextEdit', 'ctry_code': 'TextEdit', 'ctry_name': 'TextEdit', 'rgn_code': 'TextEdit', 'rgn_name': 'TextEdit', 'ctyua_code': 'TextEdit', 'ctyua_name': 'TextEdit', 'ctyua_area_': 'TextEdit', 'ctyua_type': 'TextEdit', });
lyr_DemoPoints3_10.set('fieldImages', {'fid': 'TextEdit', 'x': 'Range', 'y': 'DateTime', 'whatAmI': 'TextEdit', 'describe': 'TextEdit', 'image': 'ExternalResource', });
lyr_Public_Amanns_Index_0.set('fieldLabels', {});
lyr_Public_Hexbins_JustAmannsAvg_1.set('fieldLabels', {});
lyr_WFD_River_Water_Bodies_Cycle_3_4.set('fieldLabels', {'fid': 'no label', 'WB_CAT': 'no label', 'RBD_ID': 'no label', 'MNCAT_NAME': 'no label', 'RBD_NAME': 'no label', 'OPCAT_ID': 'no label', 'hydromorph': 'no label', 'MANCAT_ID': 'no label', 'url': 'no label', 'OPCAT_NAME': 'no label', 'WB_ID': 'no label', 'version': 'no label', 'WB_NAME': 'no label', });
lyr_Hygrothermy_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'category': 'no label', 'range': 'no label', 'dissolve': 'no label', });
lyr_Public_Coresites_Layer_6.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Public_SWRA_Key_Sitescopy_7.set('fieldLabels', {'Site': 'header label - always visible', 'latitude': 'hidden field', 'longitude': 'hidden field', 'Site info': 'header label - always visible', 'Image': 'no label', });
lyr_Public_SWRA_Key_Sites_8.set('fieldLabels', {'Site': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'Site info': 'no label', 'Image': 'no label', });
lyr_SWDistrictRegions_9.set('fieldLabels', {'year': 'no label', 'ctry_code': 'no label', 'ctry_name': 'no label', 'rgn_code': 'no label', 'rgn_name': 'no label', 'ctyua_code': 'no label', 'ctyua_name': 'no label', 'ctyua_area_': 'no label', 'ctyua_type': 'no label', });
lyr_DemoPoints3_10.set('fieldLabels', {'fid': 'inline label - always visible', 'x': 'no label', 'y': 'no label', 'whatAmI': 'header label - visible with data', 'describe': 'inline label - always visible', 'image': 'no label', });
lyr_DemoPoints3_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});