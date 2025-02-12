<responseProcessing>
    <responseCondition>
      <responseIf>
        <not>
          <isNull>
            <variable identifier="{{responseIdentifier}}"/>
          </isNull>
        </not>
        <setOutcomeValue identifier="SCORE">
          <integerToFloat>
            <fieldValue fieldIdentifier="score">
              <variable identifier="{{responseIdentifier}}"/>
            </fieldValue>
          </integerToFloat>
        </setOutcomeValue>
        <setOutcomeValue identifier="MAXSCORE">
          <integerToFloat>
            <fieldValue fieldIdentifier="maxscore">
              <variable identifier="{{responseIdentifier}}"/>
            </fieldValue>
          </integerToFloat>
        </setOutcomeValue>
        <setOutcomeValue identifier="CANDIDATE_RESPONSE">
          <fieldValue fieldIdentifier="candidateResponse">
            <variable identifier="{{responseIdentifier}}"/>
          </fieldValue>
        </setOutcomeValue>
      </responseIf>
      <responseElse>
        <setOutcomeValue identifier="SCORE">
          <baseValue baseType="float">0</baseValue>
        </setOutcomeValue>
        <setOutcomeValue identifier="MAXSCORE">
          <baseValue baseType="float">0</baseValue>
        </setOutcomeValue>
        <setOutcomeValue identifier="CANDIDATE_RESPONSE">
          <baseValue baseType="string"></baseValue>
        </setOutcomeValue>
      </responseElse>
    </responseCondition>
  </responseProcessing>
