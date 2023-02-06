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
    'taoQtiItem/qtiCreator/widgets/helpers/content'
], function(stateFactory, Answer, answerStateHelper) {

    var GGBPCIStateAnswer = stateFactory.extend(Answer, function() {

        //forward to one of the available sub state, according to the response processing template
        answerStateHelper.forward(this.widget, {
            rpTemplates: ['NONE', 'MATCH_CORRECT'],
        });
        var interaction = this.widget.element;

        //interaction.triggerPci('RProcessingChange', ["answer"]); // Send it to AMD for action
        //var responseDeclaration = interaction.getResponseDeclaration();

    }, function() {

    });

    GGBPCIStateAnswer.prototype.initResponseForm = function initResponseForm() {

        var interaction = this.widget.element;
        interaction.resetResponse();

        answerStateHelper.initResponseForm(
            this.widget, {
                rpTemplates: ['NONE', 'MATCH_CORRECT'],
            }
        );
    };

    return GGBPCIStateAnswer;
});