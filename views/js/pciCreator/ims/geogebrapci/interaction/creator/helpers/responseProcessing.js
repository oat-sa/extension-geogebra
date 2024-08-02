/*
This PCI used Wiquid's PCI Generator for TAO platform
@author: Jean-Philippe Rivière - Wiquid - https://www.wiquid.fr
This PCI can be adapted to your needs.
Contact me : jean-philippe.riviere@geogebra.org
A GeoGebra production - Dynamic Mathematics for Everyone, http://www.geogebra.org
@license: This file is subject to the GeoGebra Non-Commercial License Agreement, see http://www.geogebra.org/license. For questions please write us at office@geogebra.org.
*/
define(['jquery', 'tpl!GGBPCI/interaction/creator/tpl/responseProcessing'], function($, responseProcessingTpl) {
    'use strict';

    const CUSTOM_RESPONSE_PROCESSING = 'custom';

    const responseProcessingHelpers = {
        /**
         * Creates an outcome declaration if it doesn't exist.
         * @param {Item} item
         * @param {string} identifier
         * @param {string} baseType
         */
        createOutcome(item, identifier, baseType = 'float') {
            let outcome = item.getOutcomeDeclaration(identifier);
            if (!outcome) {
                const attributes = { cardinality: 'single', baseType }
                if (baseType === 'float') {
                    attributes.normalMaximum = 0.0;
                    attributes.normalMinimum = 0.0;
                }
                outcome = item.createOutcomeDeclaration(attributes);
                outcome.attr('identifier', identifier);
            }
        },

        /**
         * Creates the response outcomes for an item.
         * @param {Item} item
         */
        createResponseOutcomes(item) {
            responseProcessingHelpers.createOutcome(item, 'SCORE', 'float');
            responseProcessingHelpers.createOutcome(item, 'MAXSCORE', 'float');
            responseProcessingHelpers.createOutcome(item, 'CANDIDATE_RESPONSE', 'string');
        },

        /**
         * Tells if the custom response processing has been set.
         * @param {Interaction} interaction
         * @returns {boolean}
         */
        hasCustomResponseProcessing(interaction) {
            const responseProcessing = responseProcessingHelpers.getResponseProcessing(interaction);
            return (
                responseProcessing.processingType !== CUSTOM_RESPONSE_PROCESSING ||
                !$(responseProcessing.xml).find('fieldValue[fieldIdentifier="candidateResponse"]').length
            );
        },

        /**
         * Gets the response processing for an interaction.
         * @param {Interaction} interaction
         * @returns {ResponseProcessing}
         */
        getResponseProcessing(interaction) {
            const { responseProcessing } = interaction.getRelatedItem();
            return responseProcessing
        },

        /**
         * Sets the response processing for an interaction.
         * @param {Interaction} interaction
         */
        setResponseProcessing(interaction) {
            const responseProcessing = responseProcessingHelpers.getResponseProcessing(interaction);
            const responseIdentifier = interaction.attr('responseIdentifier')
            responseProcessing.setProcessingType(CUSTOM_RESPONSE_PROCESSING);
            responseProcessing.xml = responseProcessingTpl({ responseIdentifier });
        }
    };

    return responseProcessingHelpers;
});

