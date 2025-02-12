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
    'taoQtiItem/qtiCreator/widgets/interactions/states/Question',
    'taoQtiItem/qtiCreator/widgets/helpers/formElement',
    'GGBPCI/interaction/creator/helpers/responseProcessing',
    'tpl!GGBPCI/interaction/creator/tpl/propertiesForm',
    'lodash',
    'taoQtiItem/portableLib/jquery_2_1_1',
], function(stateFactory, Question, formElement, responseProcessingHelpers, formTpl, _, $) {
    'use strict';

    var GGBPCIStateQuestion = stateFactory.extend(Question, function initQuestionState() {
        // set it to the question state
        console.log("STATE::QUESTION::ENTER");
    }, function exitQuestionState() {
        // exit the question state
        console.log("STATE::QUESTION::EXIT");
    });

    GGBPCIStateQuestion.prototype.initForm = function initForm() {

        //Rappel : interaction.prop() is a setter for config in renderer
        // interaction.properties = config in render

        var _widget = this.widget,
            Sform = _widget.$form,
            interaction = _widget.element,
            response = interaction.getResponseDeclaration(),
            //GGB - APP Parameters get from pciCreator
            param_appName = interaction.prop('param').appName,
            param_width = interaction.prop('param').width,
            param_height = interaction.prop('param').height,
            param_enableShiftDragZoom = interaction.prop('param').enableShiftDragZoom,
            param_showZoomButtons = interaction.prop('param').showZoomButtons,
            param_showFullscreenButton = interaction.prop('param').showFullscreenButton,
            param_language = interaction.prop('param').language,
            // param_country = interaction.prop('param').country,
            param_showMenuBar = interaction.prop('param').showMenuBar,
            param_showToolBar = interaction.prop('param').showToolBar,
            param_allowStyleBar = interaction.prop('param').allowStyleBar,
            param_enableRightClick = interaction.prop('param').enableRightClick,
            param_enableUndoRedo = interaction.prop('param').enableUndoRedo,
            param_saveB64 = interaction.prop('resp').data,
            param_AnswerSet = interaction.prop('resp').answerSet;

        //render the form using the form template
        Sform.html(formTpl({
            serial: response.serial,
            identifier: interaction.attr('responseIdentifier')
        }));

        //init form javascript
        formElement.initWidget(Sform);



        $(".saveAppData").on("click", function() {
            interaction.properties.state = "modified";
            interaction.properties.param.filename="saved";

            interaction.triggerPci('dataChange', [interaction.properties]); // Send it to AMD for action
        })



        //Accordion system -> paramters group
        Sform.find(".paramSection").on("click", function() {
            var sectionNB = $(this).data("section")
            const list = [1, 2, 3, 4, 5];
            const NewList = list.filter((el) => el !== sectionNB);
            for (let i = 0; i < NewList.length; i++) {
                $(".section" + NewList[i]).slideUp()
            }
            $(".section" + sectionNB).slideToggle()
        });

        // Update value in the parameter panel as default value (starting point)
        $("input[name=applet][value=" + param_appName + "]").prop('checked', true);
        $("#appWidth").val(param_width);
        $("#appHeight").val(param_height);
        $("#appDragZoom").prop("checked", param_enableShiftDragZoom);
        $("#appShowZoomBT").prop("checked", param_showZoomButtons);
        $("#appShowFScreenBT").prop("checked", param_showFullscreenButton);
        //$("#country").val(param_country).change();
        $("#language").val(param_language).change();
        $("#MenuBar").prop("checked", param_showMenuBar);
        $("#ToolBar").prop("checked", param_showToolBar);
        $("#StyleBar").prop("checked", param_allowStyleBar);
        $("#RightClick").prop("checked", param_enableRightClick);
        $("#UndoRedo").prop("checked", param_enableUndoRedo);
        $("#saveB64").prop("checked", param_saveB64);
        $("#ggbFormatedAnswers").prop("checked", param_AnswerSet);


        Sform.find("#MenuBar").on("click", function() {
            let toggle = $(this).prop("checked");
            interaction.properties.param.showMenuBar = toggle;
            interaction.triggerPci('MenubarChange', [toggle]); // Send it to AMD for action
        })

        Sform.find("#ToolBar").on("click", function() {
            let toggle = $(this).prop("checked");
            interaction.triggerPci('ToolbarChange', [toggle]); // Send it to AMD for action
             interaction.properties.param.showToolBar = toggle;
             interaction.properties.param.showMenuBar = toggle;
        })

        Sform.find("#RightClick").on("click", function() {
            let toggle = $(this).prop("checked");
            interaction.triggerPci('RightClickChange', [toggle]); // Send it to AMD for action
            interaction.properties.param.enableRightClick = toggle;
        })



        // Parameters listeners -> Send value to AMD
        Sform.find(".neGGBPCIApp").on("click", function() {
            //interaction.prop('param.appName', value); // Set new default value
            var GGBConfig = {}
            GGBConfig.appName = $("input[name=applet]:checked").val();
            GGBConfig.width = $("#appWidth").val();
            GGBConfig.height = $("#appHeight").val();
            GGBConfig.appDragZoom = $("#appDragZoom").prop("checked");
            GGBConfig.appShowZoomBT = $("#appShowFScreenBT").prop("checked");
            GGBConfig.appShowFScreenBT = $("#appShowFScreenBT").prop("checked");
            GGBConfig.language = $("#language").val();
            // GGBConfig.country = $("#country").val();
            GGBConfig.MenuBar = $("#MenuBar").prop("checked");
            GGBConfig.ToolBar = $("#ToolBar").prop("checked");
            GGBConfig.StyleBar = $("#StyleBar").prop("checked");
            GGBConfig.RightClick = $("#RightClick").prop("checked");
            GGBConfig.UndoRedo = $("#UndoRedo").prop("checked");

            interaction.properties.param.filename = '';
            interaction.properties.param.appName = GGBConfig.appName;
            interaction.properties.param.width = GGBConfig.width;
            interaction.properties.param.height = GGBConfig.height;
            interaction.properties.param.enableShiftDragZoom = GGBConfig.appDragZoom;
            interaction.properties.param.showZoomButtons = GGBConfig.appShowZoomBT;
            interaction.properties.param.showFullscreenButton = GGBConfig.appShowFScreenBT;
            interaction.properties.param.language = GGBConfig.language;
            interaction.properties.param.showMenuBar = GGBConfig.MenuBar;
            interaction.properties.param.showToolBar = GGBConfig.ToolBar;
            interaction.properties.param.algebraInputPosition = true;
            interaction.properties.param.allowStyleBar = GGBConfig.StyleBar;
            interaction.properties.param.enableRightClick = GGBConfig.RightClick;
            interaction.properties.param.enableUndoRedo = GGBConfig.UndoRedo;

            interaction.triggerPci('appChange', [GGBConfig]); // Send it to AMD for action
        });

        Sform.find("#saveB64").on("click", function() {
            //interaction.triggerPci('saveB64Change', [$(this).prop("checked")]); // Send it to AMD for action
            alert("By disabling this option, GeoGebra will save the test taker\’s answer and score. However, the state of the application\’s interactive elements will be reset each time the item is reloaded during a non-linear test, or during test review. This will reduce the volume of results but you won\’t be able to analyze the test taker\’s input in detail.")
            interaction.properties.resp.data = $(this).prop("checked");

        });
        Sform.find("#ggbFormatedAnswers").on("click", function() {
            interaction.triggerPci('saveSetAnswerChange', [$(this).prop("checked")]); // Send it to AMD for action})
        });

        Sform.find("#projectGGBID").on("keyup change", function(event) {
           interaction.triggerPci('checkPIDChange', [$(this).val()]); // Send it to AMD for action
        });

        Sform.find(".openAppLib").on("click", function() {
            //interaction.prop('param.appName', value); // Set new default value
            var PID = $("#projectGGBID").val()

            interaction.triggerPci('loadAppChange', [PID]); // Send it to AMD for action
        });



        // Make sure to update the response processing when the identifier is changed
        formElement.setChangeCallbacks(Sform, interaction, {
            identifier(i, value) {
                response.id(value);
                interaction.attr('responseIdentifier', value);
                responseProcessingHelpers.setResponseProcessing(interaction);
            }
        });

    };

    return GGBPCIStateQuestion;
});
