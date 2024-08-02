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
    'taoQtiItem/qtiCreator/widgets/interactions/states/Answer',
    'taoQtiItem/qtiCreator/widgets/interactions/helpers/answerState',
    'GGBPCI/interaction/creator/helpers/responseProcessing',
], function(stateFactory, Answer, answerStateHelper, responseProcessingHelpers) {

    var GGBPCIStateAnswer = stateFactory.extend(Answer, function initAnswerState() {
        // set it to the answer state
        console.log("STATE::ANSWER::ENTER");
    }, function exitAnswerState() {
        // exit the answer state
        console.log("STATE::ANSWER::EXIT");
    });

    GGBPCIStateAnswer.prototype.initResponseForm = function initResponseForm() {
        // Remove any possibility to change the response processing template
        answerStateHelper.initResponseForm(this.widget, { rpTemplates: ['CUSTOM'] });

        // Make sure to update the response processing when the identifier is changed
        this.widget.$responseForm.on(
            'change.databinding keyup.databinding',
            'input[name="identifier"]',
            () => responseProcessingHelpers.setResponseProcessing(this.widget.element)
        );
    };

    return GGBPCIStateAnswer;
});
