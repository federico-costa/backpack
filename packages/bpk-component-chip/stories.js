/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016-2020 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow strict */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { cssModules } from 'bpk-react-utils';
import BpkText from 'bpk-component-text';

import STYLES from './stories.scss';

import BpkChip, { CHIP_TYPES } from './index';

const getClassName = cssModules(STYLES);

const ChipsExample = ({ ...rest }) => (
  <div className={getClassName('bpk-chip-stories__wrapper')}>
    <BpkChip
      onClose={action('Chip closing!')}
      closeLabel="Close"
      className={getClassName('bpk-chip-stories__chip')}
      {...rest}
    >
      Neutral
    </BpkChip>
    <BpkChip
      onClose={action('Chip closing!')}
      closeLabel="Close"
      type={CHIP_TYPES.success}
      className={getClassName('bpk-chip-stories__chip')}
      {...rest}
    >
      Success
    </BpkChip>
    <BpkChip
      onClose={action('Chip closing!')}
      closeLabel="Close"
      type={CHIP_TYPES.primary}
      className={getClassName('bpk-chip-stories__chip')}
      {...rest}
    >
      Primary
    </BpkChip>
    <BpkChip
      onClose={action('Chip closing!')}
      closeLabel="Close"
      type={CHIP_TYPES.light}
      className={getClassName('bpk-chip-stories__chip')}
      {...rest}
    >
      Light
    </BpkChip>
    <BpkChip
      onClose={action('Chip closing!')}
      closeLabel="Close"
      type={CHIP_TYPES.neutral}
      disabled
      className={getClassName('bpk-chip-stories__chip')}
      {...rest}
    >
      Disabled
    </BpkChip>
  </div>
);

storiesOf('bpk-component-chip', module).add('Default', () => (
  <div>
    <BpkText>Dismissible</BpkText>
    <ChipsExample />
    <BpkText>Not dismissible</BpkText>
    <ChipsExample dismissible={false} />
  </div>
));
