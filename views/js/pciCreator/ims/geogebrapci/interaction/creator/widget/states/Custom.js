define([
    'taoQtiItem/qtiCreator/widgets/states/factory',
    'taoQtiItem/qtiCreator/widgets/states/Custom',
    'taoQtiItem/qtiCreator/widgets/interactions/helpers/answerState'
], function(stateFactory, Custom, answerStateHelper){

    var GGBPCIStateCustom = stateFactory.create(Custom, function(){
        console.log("LOAD NEW -CUSTOM MODE !!!!!")
       
        //BUILD INTERACTION and ITEM
        console.log(this);
        var widget = this.widget;
        var interaction = widget.element;
        var item = interaction.getRootElement()
        const rp = item.responseProcessing;
        rp.processingType === 'custom';

        //DEFINE SCORE AND MAXSCORE OUTCOMES 
        interaction.createOutcomeDeclarationIfNotExists("SCORE");
       

        //CREATE RESPONSE DECLARATION
        //ACTIVE
        var responseDeclaration = interaction.getResponseDeclaration();
        responseDeclaration.attributes.cardinality = "single"; //single | multiple | record
        responseDeclaration.attributes.baseType = "integer"; //identifier                    
              

        //Store to config and communicate with AMD getResponse
        interaction.properties.param.RProcessing = "Custom" //Store to config
        
        

        // TEMPLATE PROCESSING
        var rpTpl = 
        `<responseProcessing>
            <setOutcomeValue identifier="SCORE">      
                <variable identifier="RESPONSE"/>
            </setOutcomeValue>           
        </responseProcessing>`; 

        //Create the XML template for responseProcessing
        interaction.rootElement.rootElement.responseProcessing.xml = rpTpl;
        
        //THIS CUSTOM CODE GENERATE ERROR MANAGING THE XML MODIFICATION. BETTER KEEP THE DEFAULT !
        answerStateHelper.initResponseForm(
            this.widget
        );

        // Send it to AMD for action
        interaction.triggerPci('RProcessingChange', ["Custom"]); 
       

    }, function(){        
        //use default [data-edit="custom"].hide();
        this.widget.$container.children('.overlay').remove();
    });

    return GGBPCIStateCustom;
});
