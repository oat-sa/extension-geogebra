/*
This PCI used Wiquid's PCI Generator for TAO platform
@author: Jean-Philippe Rivière - Wiquid - https://www.wiquid.fr
This PCI can be adapted to your needs.
Contact me : jean-philippe.riviere@geogebra.org
A GeoGebra production - Dynamic Mathematics for Everyone, http://www.geogebra.org
@license: This file is subject to the GeoGebra Non-Commercial License Agreement, see http://www.geogebra.org/license. For questions please write us at office@geogebra.org.

This is the IMS Version of GeoGebra PCI for TAO Advanced

*/
define(['GGBPCI/interaction/runtime/js/lib/deployggb'], function(GGBApplet) {
    'use strict';

    function instancer(pciObj, $container, config) {
       
        var ggbdom = "ggb_" + Date.now();
        $container.find(".GGBPCI").append('<div class=' + ggbdom + '></div>');

        if ($container.parent().hasClass('widget-box')) {
            
            initGGB(config);
        } else {
            
            previeGGBPCI(config)
        }

        function cssCorrecter() {

            function correctif() {
                $container.find(".groupPanel").removeAttr("style");
                $container.find(".groupPanel").css("width", "");
                $container.find(".mowColorPlusButton").css("width", "");
                $container.find(".mowColorPlusButton").css("top", "");
            }

            setTimeout(() => {
                $container.find(".flatButton[aria-label='Pen']").on("click", function() {
                    correctif()
                })

                $container.find(".flatButton[aria-label='Tools']").on("click", function() {
                    correctif()
                })

                $container.find(".flatButton[aria-label='Media']").on("click", function() {
                    correctif()
                })

            }, 500);
        }

        function initGGB(config) {
            if (config.param.filename.length > 0) {
                var ggbApp = new GGBApplet({
                    id: "ggbAssess",
                    filename: config.param.filename,
                    detachKeyboard: false,
                    appName: config.param.appName,
                    showToolBar: config.param.showToolBar,
                    borderColor: 'teal',
                    showMenuBar: config.param.showMenuBar,
                    showFullscreenButton: config.param.showFullscreenButton,
                    algebraInputPosition: true,
                    showAlgebraInput: true,
                    enableLabelDrags: true,
                    enableShiftDragZoom: config.param.enableShiftDragZoom,
                    enableFileFeatures: true,
                    capturingThreshold: null,
                    showToolBarHelp: true,
                    errorDialogsActive: false,
                    showTutorialLink: false,
                    showLogging: false,
                    useBrowserForJS: false,
                    resize: true,
                    language: config.param.language,
                    ggbbase64: config.ggbfile,
                    width: config.param.width,
                    height: config.param.height,
                    enableRightClick: config.param.enableRightClick,
                    enableUndoRedo: config.param.enableUndoRedo,
                    appletOnLoad: function(api) {
                        if (typeof pciObj.editorApplet === 'undefined') {
                            pciObj.editorApplet = api;
                        } else {
                            pciObj.editorApplet = api;
                        }
                    }
                }, true);
                ggbApp.inject(ggbdom);
                cssCorrecter();

            } else {
                var ggbApp = new GGBApplet({
                    id: "ggbAssess",
                    detachKeyboard : false,
                    appName : config.param.appName,
                    showToolBar : config.param.showToolBar,
                    borderColor : 'teal',
                    showMenuBar : config.param.showMenuBar,
                    showFullscreenButton : config.param.showFullscreenButton,
                    algebraInputPosition : true,
                    showAlgebraInput : true,
                    enableLabelDrags : true,
                    enableShiftDragZoom : config.param.enableShiftDragZoom,
                    enableFileFeatures : true,
                    capturingThreshold : null,
                    showToolBarHelp : true,
                    errorDialogsActive : false,
                    showTutorialLink : false,
                    showLogging : false,
                    useBrowserForJS : false,
                    resize : true,
                    language : config.param.language,
                    width : config.param.width,
                    height : config.param.height,
                    ggbbase64 : config.ggbfile,
                    enableRightClick : config.param.enableRightClick,
                    enableUndoRedo : config.param.enableUndoRedo,
                    appletOnLoad : function(api) {
                        if (typeof pciObj.editorApplet === 'undefined') {
                            pciObj.editorApplet = api;
                        } else {
                            pciObj.editorApplet = api;
                        }
                    }
                }, true);
                ggbApp.inject(ggbdom);
                cssCorrecter();
            }
        }

        function previeGGBPCI(config) {
        
            var ggbApp = new GGBApplet({
                id: "ggbAssess",
                detachKeyboard: false,
                appName: config.param.appName,
                showToolBar: config.param.showToolBar,
                borderColor: 'teal',
                showMenuBar: config.param.showMenuBar,
                showFullscreenButton: config.param.showFullscreenButton,
                algebraInputPosition: true,
                allowStyleBar: config.param.allowStyleBar,
                showAlgebraInput: true,
                enableLabelDrags: true,
                enableShiftDragZoom: config.param.enableShiftDragZoom,
                enableFileFeatures: true,
                capturingThreshold: null,
                showToolBarHelp: true,
                errorDialogsActive: false,
                showTutorialLink: false,
                showLogging: false,
                useBrowserForJS: false,
                resize: true,
                language: config.param.language,
                width: config.param.width,
                height: config.param.height,
                ggbbase64: config.ggbfile,
                enableUndoRedo: config.param.enableUndoRedo,
                enableRightClick: config.param.enableRightClick,
                appletOnLoad(api) {
                    if (typeof pciObj.previewApplet === 'undefined') {
                        pciObj.previewApplet = api;
                    } else {
                        pciObj.previewApplet = api;
                    }                   
                }
            }, true);
            
            ggbApp.inject(ggbdom);
            cssCorrecter()

        }
    }

    return {
        ggb: function(id, $container, config) {
            return instancer(id, $container, config)
        }
    };

});