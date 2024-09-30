/*
This PCI used Wiquid's PCI Generator for TAO platform
@author: Jean-Philippe Rivière - Wiquid - https://www.wiquid.fr
This PCI can be adapted to your needs.
Contact me : jean-philippe.riviere@geogebra.org
A GeoGebra production - Dynamic Mathematics for Everyone, http://www.geogebra.org
@license: This file is subject to the GeoGebra Non-Commercial License Agreement, see http://www.geogebra.org/license. For questions please write us at office@geogebra.org.

This is the IMS Version of GeoGebra PCI for TAO Advanced

*/

define([
    'qtiCustomInteractionContext',
    'taoQtiItem/portableLib/jquery_2_1_1',
    'GGBPCI/interaction/runtime/js/renderer',
    'taoQtiItem/portableLib/OAT/util/event',
    'GGBPCI/interaction/runtime/js/instancer',
    'css!GGBPCI/interaction/runtime/css/wggb'
], function (qtiCustomInteractionContext, $, renderer, event, instancer) {
    'use strict';
    // VERSION MODIFIED-IMS-02-02-2023

    var _typeIdentifier = 'GGBPCI';

    function GGBInteractionFactory() {
        return {
            /*********************************
             *
             * IMS specific PCI API property and methods
             *
             *********************************/

            get typeIdentifier() {
                return _typeIdentifier;
            },

            /**
             * Get the current state fo the PCI
             * @returns {Object}
             */
            getState() {
                //simply mapped to existing TAO PCI API
                return this.getSerializedState();
            },

            /**
             * Called by delivery engine when PCI is fully completed
             */
            oncompleted() {
                this.destroy();
            },

            /*********************************
             *
             * TAO and IMS shared PCI API methods
             *
             *********************************/

            /**
             * Get the response in the json format described in
             * http://www.imsglobal.org/assessment/pciv1p0cf/imsPCIv1p0cf.html#_Toc353965343
             *
             * @returns {Object}
             */
            getResponse() {
                const value = {};

                if (typeof this.previewApplet !== 'undefined') {
                    // TODO: make sure to get the correct values from GeoGebra.
                    // We need these 3 variables to be set in the record object:
                    // - score: integer
                    // - maxscore: integer
                    // - candidateResponse: string (JSON.stringify() if needed)
                    // Other variables can be added to the record object if needed.
                    // They will be part both of the response and the state.
                    value.correct = this.previewApplet.getValue('correct');
                    value.candidateResponse = this.previewApplet.getValueString('answers');
                    value.score = this.previewApplet.getValue('score');
                    value.maxscore = this.previewApplet.getValue('maxscore');
                    if (this.config.resp.data) {
                        value.applet = this.previewApplet.getBase64();
                    }

                    // the PCI is declared with a record cardinality, so the response must be a record
                    return {
                        record: Object.keys(value).map(name => {
                            const base = {};

                            // variables are either integers or strings (be sure to JSON encode them if needed)
                            if (typeof value[name] === 'number') {
                                base.integer = value[name];
                            } else {
                                base.string = value[name];
                            }
                            return { name, base };
                        })
                    };
                }

                // no applet, no response, but it still needs to be QTI valid
                return { base: null };
            },
            /**
             * Reverse operation performed by render()
             * After this function is executed, only the inital naked markup remains
             * Event listeners are removed and the state and the response are reset
             *
             * @param {Object} interaction
             */
            destroy() {
                if (typeof this.previewApplet !== 'undefined') {
                    this.previewApplet.remove();
                }

                //window.ggbApplet.remove()

                var $container = $(this.dom);
                $container.off().empty();
            },

            /*********************************
             *
             * TAO specific PCI API methods
             *
             *********************************/

            /**
             * Get the type identifier of a pci
             * @returns {string}
             */
            getTypeIdentifier() {
                return this.typeIdentifier;
            },

            /**
             * Render the PCI :
             * @param {String} id
             * @param {Node} dom
             * @param {Object} config - json
             */

            initialize(id, dom, config, assetManager) {
                //add method on(), off() and trigger() to the current object
                event.addEventMgr(this);

                //id = response!!!!
                var _this = this;

                _this.config = config || {};
                _this.dom = dom;

                //renderer.render(_this, _this.dom, _this.config, assetManager);
                renderer.render(_this, _this.dom, config, assetManager);

                //Listening to Change Data called from Question after changing values for config
                this.on('dataChange', function (conf) {
                    var dataB64 = _this.editorApplet.getBase64();
                    _this.config = conf;
                    _this.config.ggbfile = dataB64;
                    $(_this.dom)
                        .find('.GGBPCI')
                        .animate(
                            {
                                opacity: '320'
                            },
                            {
                                step: function (now, fx) {
                                    $(this).css({ backgroundColor: 'lightpink' });
                                },
                                duration: 100,
                                easing: 'linear',
                                queue: false,
                                complete: function () {
                                    $(this).css({
                                        backgroundColor: 'white'
                                    });
                                }
                            },
                            'linear'
                        );
                });

                //Creating the special listener : Listening to Toolbar button
                this.on('MenubarChange', function (toggle) {
                    _this.editorApplet.showMenuBar(toggle);
                });

                this.on('ToolbarChange', function (toggle) {
                    _this.editorApplet.showMenuBar(toggle);
                    _this.editorApplet.showToolBar(toggle);
                });

                this.on('RightClickChange', function (toggle) {
                    _this.editorApplet.enableRightClick(toggle);
                });

                //Listening to GGB ID Input and display Thumbnail in lateral Panel - Check Project ID = checkPID
                this.on('checkPIDChange', function (PID) {
                    $.getJSON(
                        'https://api.geogebra.org/v1.0/worksheets/' + PID + '?scope=basic&embed=actions',
                        function () {
                            // JSON result in `data` variable
                        }
                    )
                        .done(function (data) {
                            let cleanURL = data.thumbUrl.replace(/([^:]\/)\/+/g, '');
                            cleanURL = data.thumbUrl.replace('thumb$1', 'thumb');

                            checkIfImageExists(cleanURL, exists => {
                                if (exists) {
                                    // Success code
                                    $('#miniat').html("<img class='PIDThumbnail' src='" + cleanURL + "'>");
                                } else {
                                    // Fail code
                                    console.log(data.thumbUrl);
                                    console.log('No valid Thumbnail found ! Sorry');
                                    $('#miniat').html('');
                                }
                            });
                        })
                        .fail(function (data) {
                            console.log('error');
                            console.log(data.thumbUrl);
                            console.log('No valid Thumbnail found ! Sorry');
                            $('#miniat').html('');
                        })
                        .always(function () {
                            console.log('complete');
                        });
                });

                function checkIfImageExists(url, callback) {
                    const img = new Image();
                    img.src = url;

                    if (img.complete) {
                        callback(true);
                    } else {
                        img.onload = () => {
                            callback(true);
                        };

                        img.onerror = () => {
                            callback(false);
                        };
                    }
                }

                //listening to dynamic configuration change
                this.on('appChange', function (GGBConfig) {
                    _this.editorApplet.remove();
                    var $container = $(_this.dom).find('.GGBPCI');
                    $container.off().empty();

                    //Destroy GGB in editor
                    //window.ggbApplet.remove();
                    //Call function to reCreate APP !
                    _this.config.param.filename = '';
                    _this.config.param.appName = GGBConfig.appName;
                    _this.config.param.width = GGBConfig.width;
                    _this.config.param.height = GGBConfig.height;
                    _this.config.param.enableShiftDragZoom = GGBConfig.appDragZoom;
                    _this.config.param.showZoomButtons = GGBConfig.appShowZoomBT;
                    _this.config.param.showFullscreenButton = GGBConfig.appShowFScreenBT;
                    _this.config.param.language = GGBConfig.language;
                    _this.config.param.showMenuBar = GGBConfig.MenuBar;
                    _this.config.param.showToolBar = GGBConfig.ToolBar;
                    _this.config.param.algebraInputPosition = true;
                    _this.config.param.allowStyleBar = GGBConfig.StyleBar;
                    _this.config.param.enableRightClick = GGBConfig.RightClick;
                    _this.config.param.enableUndoRedo = GGBConfig.UndoRedo;
                    instancer.ggb(_this, $(_this.dom), _this.config);

                    setTimeout(() => {
                        $(_this.dom).find('.groupPanel').removeAttr('style');

                        // $(_this.dom).find(".groupPanel").css("backgroundColor", "red");
                        $(_this.dom).find('.groupPanel').css('width', '');

                        $(_this.dom).find('.mowColorPlusButton').css('width', '');
                        $(_this.dom).find('.mowColorPlusButton').css('top', '');
                        //$(_this.dom).find(".groupPanel").css("width", "360px!important");
                    }, 500);
                });

                this.on('loadAppChange', function (PID) {
                    _this.editorApplet.remove();
                    var $container = $(_this.dom).find('.GGBPCI');
                    $container.off().empty();
                    $.getJSON(
                        'https://api.geogebra.org/v1.0/worksheets/' + PID + '?scope=basic&embed=actions',
                        function (data) {
                            // JSON result in `data` variable
                        }
                    )
                        .done(function (data) {
                            var cleanURL;
                            console.log('second success');
                            for (let i = 0; i < data.elements.length; i++) {
                                if (typeof data.elements[i].url !== 'undefined') {
                                    cleanURL = data.elements[i].url.replace(/([^:]\/)\/+/g, '$1');
                                    break;
                                }
                            }

                            //Loading a pre-configured GGB file, it is better to start with the editor tools : menu bar, tool bar, right click disabled.

                            _this.config.param.filename = cleanURL;
                            $('#MenuBar').prop('checked', false);
                            _this.config.param.showMenuBar = false;
                            $('#ToolBar').prop('checked', false);
                            _this.config.param.showToolBar = false;
                            $('#RightClick').prop('checked', false);
                            _this.config.param.enableRightClick = false;
                            instancer.ggb(_this, $(_this.dom), _this.config);
                        })
                        .fail(function (data) {
                            alert("Error - this code can't be used in this context");
                            console.log('error');
                            console.log(data.url);
                            console.log('No valid Project found ! Sorry');
                            $('#miniat').html('boooo');
                        })
                        .always(function () {
                            console.log('complete');
                        });
                });

                //communicate the response change to the interaction
                this.on('saveB64Change', function (saveB64) {
                    config.resp.data = saveB64;
                });
            },

            /**
             * Programmatically set the response following the json schema described in
             * http://www.imsglobal.org/assessment/pciv1p0cf/imsPCIv1p0cf.html#_Toc353965343
             *
             * @param {Object} interaction
             * @param {Object} response
             */
            setResponse(response) {
                /* This function is useful to reload the state of the item
                   But to reload it, it is necessary to add the JSON representation of the GGBAPP
                   to the response and pass it to the config.
                   */

                if (typeof response.record[4] === 'object') {
                    $(this.dom).find('.GGBPCI').empty();
                    this.config.ggbfile = response.record[4].base.string;
                    renderer.render(this, this.dom, this.config);
                }

                // see getResponse() for more details
            },

            /**
             * Remove the current response set in the interaction
             * The state may not be restored at this point.
             *
             * @param {Object} interaction
             */
            resetResponse() {
                //Not used...
            },

            /**
             * Restore the state of the interaction from the serializedState.
             *
             * @param {Object} interaction
             * @param {Object} serializedState - json format
             */
            setSerializedState(state) {
                if (state && state.response) {
                    this.setResponse(state.response);
                }
            },

            /**
             * Get the current state of the interaction as a string.
             * It enables saving the state for later usage.
             *
             * @param {Object} interaction
             * @returns {Object} json format
             */
            getSerializedState() {
                return { response: this.getResponse() };
            }
        };
    }

    var GGBInteraction = {
        /*********************************
         *
         * IMS specific PCI API property and methods
         *
         *********************************/

        get typeIdentifier() {
            return _typeIdentifier;
        },

        /**
         * initialize the PCI object. As this object is cloned for each instance, using "this" is safe practice.
         * @param {DOMELement} dom - the dom element the PCI can use
         * @param {Object} config - the sandard configuration object
         * @param {Object} [state] - the json serialized state object, returned by previous call to getStatus(), use to initialize an
         */
        getInstance(dom, config, state) {
            var response = config.boundTo;
            var instance = GGBInteractionFactory();

            config.properties.param = JSON.parse(config.properties.param);
            config.properties.resp = JSON.parse(config.properties.resp);

            //Modifying Config is effective here
            //simply mapped to existing TAO PCI API

            instance.initialize(
                Object.getOwnPropertyNames(response).pop(),
                dom,
                config.properties,
                config.assetManager
            );
            instance.setSerializedState(state);

            //tell the rendering engine that I am ready
            if (typeof config.onready === 'function') {
                config.onready(instance, instance.getState());
            }
        }
    };

    qtiCustomInteractionContext.register(GGBInteraction);

    return GGBInteraction;
});
