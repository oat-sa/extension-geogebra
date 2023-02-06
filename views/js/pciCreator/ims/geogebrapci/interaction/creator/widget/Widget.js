/*
This PCI used Wiquid's PCI Generator for TAO platform
@author: Jean-Philippe Rivière - Wiquid - https://www.wiquid.fr
This PCI can be adapted to your needs.
Contact me : jean-philippe.riviere@geogebra.org
A GeoGebra production - Dynamic Mathematics for Everyone, http://www.geogebra.org
@license: This file is subject to the GeoGebra Non-Commercial License Agreement, see http://www.geogebra.org/license. For questions please write us at office@geogebra.org.
*/


define([
    'taoQtiItem/qtiCreator/widgets/interactions/customInteraction/Widget',
    'GGBPCI/interaction/creator/widget/states/states'
], function(Widget, states) {
    'use strict';

    var GGBPCIWidget = Widget.clone();

    GGBPCIWidget.initCreator = function() {

        this.registerStates(states);

        Widget.initCreator.call(this);

    };

    return GGBPCIWidget;
});