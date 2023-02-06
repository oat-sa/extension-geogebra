/*
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; under version 2
 * of the License (non-upgradable).
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 *
 * Copyright (c) 2016 (original work) Open Assessment Technologies SA;
 *
 */
define([
    'lodash',
    'GGBPCI/interaction/creator/widget/Widget',
    'tpl!GGBPCI/interaction/creator/tpl/markup'
], function(_, Widget, markupTpl) {
    'use strict';

    var _typeIdentifier = 'GGBPCI';

    return {
        /**
         * (required) Get the typeIdentifier of the custom interaction
         * 
         * @returns {String}
         */
        getTypeIdentifier: function() {
            return _typeIdentifier;
        },
        /**
         * (required) Get the widget prototype
         * Used in the renderer
         * 
         * @returns {Object} Widget
         */
        getWidget: function() {
            return Widget;
        },
        /**
         * (optional) Get the default properties values of the pci.
         * Used on new pci instance creation
         * 
         * @returns {Object}
         */
        getDefaultProperties: function(pci) {
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
        afterCreate: function(pci) {
            //always set the NONE response processing mode to GGB scale
            pci.getResponseDeclaration().setTemplate('NONE');
        },
        /**
         * (required) Gives the qti pci xml template 
         * 
         * @returns {function} handlebar template
         */
        getMarkupTemplate: function() {
            return markupTpl;
        },
        /**
         * (optional) Allows passing additional data to xml template
         * 
         * @returns {function} handlebar template
         */
        getMarkupData: function(pci, defaultData) {
            defaultData.prompt = pci.data('prompt');
            return defaultData;
        }
    };
});