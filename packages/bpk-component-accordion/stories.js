import React from 'react';
import { storiesOf } from '@kadira/storybook';
import BpkCheckbox from 'bpk-component-checkbox';
import { spacingSm } from 'bpk-tokens/tokens/base.es6';

import { BpkAccordionContainer, BpkAccordion, BpkAccordionItem } from './index';

const CheckboxWrapper = props => <div style={{ padding: `${spacingSm} 0` }} {...props} />;

const StopsContent = () => (
  <form>
    <CheckboxWrapper>
      <BpkCheckbox
        name="direct"
        label="Direct"
        onChange={() => null}
        checked
      />
    </CheckboxWrapper>
    <CheckboxWrapper>
      <BpkCheckbox
        name="1-stop"
        label="1 stop"
        onChange={() => null}
        checked
      />
    </CheckboxWrapper>
    <CheckboxWrapper>
      <BpkCheckbox
        name="2-plus-stops"
        label="2+ stops"
        onChange={() => null}
        checked
      />
    </CheckboxWrapper>
  </form>
);

const AirlinesContent = () => (
  <form>
    <CheckboxWrapper>
      <BpkCheckbox
        name="air-france"
        label="Air France"
        onChange={() => null}
        checked
      />
    </CheckboxWrapper>
    <CheckboxWrapper>
      <BpkCheckbox
        name="alitalia"
        label="Alitalia"
        onChange={() => null}
        checked
      />
    </CheckboxWrapper>
    <CheckboxWrapper>
      <BpkCheckbox
        name="bmi-regional"
        label="bmi regional"
        onChange={() => null}
        checked
      />
    </CheckboxWrapper>
    <CheckboxWrapper>
      <BpkCheckbox
        name="british-airways"
        label="British Airways"
        onChange={() => null}
        checked
      />
    </CheckboxWrapper>
    <CheckboxWrapper>
      <BpkCheckbox
        name="easyjet"
        label="Easyjet"
        onChange={() => null}
        checked
      />
    </CheckboxWrapper>
  </form>
);

const AirportsContent = () => (
  <form>
    <CheckboxWrapper>
      <BpkCheckbox
        name="lcy"
        label="London City"
        onChange={() => null}
        checked
      />
    </CheckboxWrapper>
    <CheckboxWrapper>
      <BpkCheckbox
        name="LGW"
        label="London Gatwick"
        onChange={() => null}
        checked
      />
    </CheckboxWrapper>
    <CheckboxWrapper>
      <BpkCheckbox
        name="lhr"
        label="London Heathrow"
        onChange={() => null}
        checked
      />
    </CheckboxWrapper>
    <CheckboxWrapper>
      <BpkCheckbox
        name="ltn"
        label="London Luton"
        onChange={() => null}
        checked
      />
    </CheckboxWrapper>
    <CheckboxWrapper>
      <BpkCheckbox
        name="stn"
        label="London Stansted"
        onChange={() => null}
        checked
      />
    </CheckboxWrapper>
  </form>
);

storiesOf('bpk-component-accordion', module)
  .add('Default', () => (
    <BpkAccordionContainer>
      <BpkAccordionItem id="stops" title="Stops" expanded>
        <StopsContent />
      </BpkAccordionItem>
      <BpkAccordionItem id="airlines" title="Airlines">
        <AirlinesContent />
      </BpkAccordionItem>
      <BpkAccordionItem id="airports" title="Airports">
        <AirportsContent />
      </BpkAccordionItem>
    </BpkAccordionContainer>
  ))
  .add('Default (second item initially expanded)', () => (
    <BpkAccordionContainer>
      <BpkAccordionItem id="stops" title="Stops">
        <StopsContent />
      </BpkAccordionItem>
      <BpkAccordionItem id="departure-times" title="Departure times" expanded>
        <AirlinesContent />
      </BpkAccordionItem>
      <BpkAccordionItem id="journey-duration" title="Journey duration">
        <AirportsContent />
      </BpkAccordionItem>
    </BpkAccordionContainer>
  ))
  .add('Multiple', () => (
    <BpkAccordionContainer allowMultiple>
      <BpkAccordionItem id="stops" title="Stops" expanded>
        <StopsContent />
      </BpkAccordionItem>
      <BpkAccordionItem id="departure-times" title="Departure times" expanded>
        <AirlinesContent />
      </BpkAccordionItem>
      <BpkAccordionItem id="journey-duration" title="Journey duration" expanded>
        <AirportsContent />
      </BpkAccordionItem>
    </BpkAccordionContainer>
  ))
  .add('Multiple (second & third items initially expanded)', () => (
    <BpkAccordionContainer allowMultiple>
      <BpkAccordionItem id="stops" title="Stops">
        <StopsContent />
      </BpkAccordionItem>
      <BpkAccordionItem id="departure-times" title="Departure times" expanded>
        <AirlinesContent />
      </BpkAccordionItem>
      <BpkAccordionItem id="journey-duration" title="Journey duration" expanded>
        <AirportsContent />
      </BpkAccordionItem>
    </BpkAccordionContainer>
  ))
  .add('Custom', () => (
    <BpkAccordion>
      <BpkAccordionItem id="stops" title="Stops" expanded>
        <StopsContent />
      </BpkAccordionItem>
      <BpkAccordionItem id="departure-times" title="Departure times">
        <AirlinesContent />
      </BpkAccordionItem>
      <BpkAccordionItem id="journey-duration" title="Journey duration" expanded>
        <AirportsContent />
      </BpkAccordionItem>
    </BpkAccordion>
  ));
