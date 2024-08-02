/*
This PCI used Wiquid's PCI Generator for TAO platform
@author: Jean-Philippe Rivière - Wiquid - https://www.wiquid.fr
This PCI can be adapted to your needs.
Contact me : jean-philippe.riviere@geogebra.org
A GeoGebra production - Dynamic Mathematics for Everyone, http://www.geogebra.org
@license: This file is subject to the GeoGebra Non-Commercial License Agreement, see http://www.geogebra.org/license. For questions please write us at office@geogebra.org.
*/
define([
    'lodash',
    'GGBPCI/interaction/creator/widget/Widget',
    'tpl!GGBPCI/interaction/creator/tpl/markup'
], function(_, Widget, markupTpl) {
    'use strict';

    const _typeIdentifier = 'GGBPCI';

    return {
        /**
         * (required) Get the typeIdentifier of the custom interaction
         *
         * @returns {String}
         */
        getTypeIdentifier() {
            return _typeIdentifier;
        },
        /**
         * (required) Get the widget prototype
         * Used in the renderer
         *
         * @returns {Object} Widget
         */
        getWidget() {
            return Widget;
        },
        /**
         * (optional) Get the default properties values of the pci.
         * Used on new pci instance creation
         *
         * @returns {Object}
         */
        getDefaultProperties(pci) {
            return {
                ggbfile: '',
                state:'init',
                param: {
                    jptest : 'Bunker',
                    filename: '',
                    detachKeyboard: false,
                    appName: 'classic',
                    width: 900,
                    height: 600,
                    enableShiftDragZoom: true,
                    showZoomButtons: true,
                    showFullscreenButton: true,
                    language: 'en',
                    country: 'Austria',
                    showMenuBar: true,
                    showToolBar: true,
                    allowStyleBar: false,
                    enableRightClick: true,
                    enableUndoRedo: true,
                    RProcessing: 'None'
                },
                resp: {
                    answerSet : true,
                    data : false
                }
            };
        },
        /**
         * (optional) Callback to execute on the
         * Used on new pci instance creation
         *
         * @returns {Object}
         */
        afterCreate(pci) {
            const response = pci.getResponseDeclaration();
            response.attributes.cardinality = 'record';
            delete response.attributes.baseType;
            response.setTemplate('CUSTOM');
        },
        /**
         * (required) Gives the qti pci xml template
         *
         * @returns {function} handlebar template
         */
        getMarkupTemplate() {
            return markupTpl;
        },
        /**
         * (optional) Allows passing additional data to xml template
         *
         * @returns {function} handlebar template
         */
        getMarkupData(pci, defaultData) {
            defaultData.prompt = pci.data('prompt');
            return defaultData;
        }
    };
});
