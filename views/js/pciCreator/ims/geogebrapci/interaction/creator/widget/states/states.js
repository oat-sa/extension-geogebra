/*
This PCI used Wiquid's PCI Generator for TAO platform
@author: Jean-Philippe Rivière - Wiquid - https://www.wiquid.fr
This PCI can be adapted to your needs.
Contact me : jean-philippe.riviere@geogebra.org
A GeoGebra production - Dynamic Mathematics for Everyone, http://www.geogebra.org
@license: This file is subject to the GeoGebra Non-Commercial License Agreement, see http://www.geogebra.org/license. For questions please write us at office@geogebra.org.
*/


define([
    'taoQtiItem/qtiCreator/widgets/states/factory',
    'taoQtiItem/qtiCreator/widgets/interactions/customInteraction/states/states',
    'GGBPCI/interaction/creator/widget/states/Question',
    'GGBPCI/interaction/creator/widget/states/Answer',
    'GGBPCI/interaction/creator/widget/states/Correct',
    'GGBPCI/interaction/creator/widget/states/NoRp',
    'GGBPCI/interaction/creator/widget/states/Custom'
  
], function(factory, states) {
    'use strict';
    console.log("FROM STATES")
    console.log(states)
    return factory.createBundle(states, arguments,['Correct','NoRp','Custom']); // Cancel Question/answer buttons
    //Possible templates are :
    //'CUSTOM' - 'MATCH_CORRECT' - 'MAP_RESPONSE'  - 'MAP_RESPONSE_POINT' - 'NONE'


});