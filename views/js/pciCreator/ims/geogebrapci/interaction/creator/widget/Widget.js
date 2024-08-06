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
    'GGBPCI/interaction/creator/widget/states/states',
    'GGBPCI/interaction/creator/helpers/responseProcessing',
], function(Widget, states, responseProcessingHelpers) {
    'use strict';

    const GGBPCIWidget = Widget.clone();

    GGBPCIWidget.initCreator = function initCreator() {

        this.registerStates(states);

        Widget.initCreator.call(this);

        if (!responseProcessingHelpers.hasCustomResponseProcessing(this.element)) {
            responseProcessingHelpers.createResponseOutcomes(this.element.getRootElement());
            responseProcessingHelpers.setResponseProcessing(this.element);
        }
    };

    return GGBPCIWidget;
});
