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
import renderer from 'react-test-renderer';

import BpkDismissibleChip from './BpkDismissibleChip';
import { CHIP_TYPES } from './commonTypes';

// Just a convenience wrapper that includes the default props so we don't
// have to keep writing them for each test.
const TestChip = ({ ...rest }) => (
  <BpkDismissibleChip
    onClick={() => null}
    accessibilityLabel="Dismiss"
    {...rest}
  >
    Dismiss me
  </BpkDismissibleChip>
);

describe('BpkDismissibleChip', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<TestChip />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should override setting selected={true}, resulting in selected={false}`, () => {
    const tree = renderer.create(<TestChip selected />);
    expect(tree).toMatchSnapshot();
  });

  it(`should ignore setting a trailing accessory view, resulting in a close icon`, () => {
    const tree = renderer.create(
      <TestChip trailingAccessoryView={<span>trailing</span>} />,
    );
    expect(tree).toMatchSnapshot();
  });

  Object.keys(CHIP_TYPES).forEach(chipType => {
    it(`should render correctly with type="${chipType}"`, () => {
      const tree = renderer.create(<TestChip type={chipType} />);
      expect(tree).toMatchSnapshot();
    });

    it(`should render correctly with type="${chipType}" and disabled`, () => {
      const tree = renderer.create(<TestChip type={chipType} disabled />);
      expect(tree).toMatchSnapshot();
    });

    it(`should render correctly with type="${chipType}" and a leading accessory view`, () => {
      const tree = renderer.create(
        <TestChip
          type={chipType}
          leadingAccessoryView={<span>Leading</span>}
        />,
      );
      expect(tree).toMatchSnapshot();
    });
  });

  it('should render correctly with a "className" attribute', () => {
    const tree = renderer.create(<TestChip className="custom-class" />);
    expect(tree).toMatchSnapshot();
  });
});
