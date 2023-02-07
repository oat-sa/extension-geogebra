/*
This PCI used Wiquid's PCI Generator for TAO platform
@author: Jean-Philippe Rivière - Wiquid - https://www.wiquid.fr
This PCI can be adapted to your needs.
Contact me : jean-philippe.riviere@geogebra.org
A GeoGebra production - Dynamic Mathematics for Everyone, http://www.geogebra.org
@license: This file is subject to the GeoGebra Non-Commercial License Agreement, see http://www.geogebra.org/license. For questions please write us at office@geogebra.org.

This is the IMS Version of GeoGebra PCI for TAO Advanced
*/

define(['taoQtiItem/portableLib/jquery_2_1_1',
    'GGBPCI/interaction/runtime/js/instancer'
], function($, instancer) {
    'use strict';

    function renderChoices(pciObj, $container, config) {
       
        instancer.ggb(pciObj, $container, config);
        
    }


    return {
        render: function(id, container, config) {

            var $container = $(container);

            renderChoices(id, $container, config);

        }
    };
});