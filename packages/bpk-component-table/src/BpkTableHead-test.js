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

import BpkTableHead from './BpkTableHead';

describe('BpkTableHead', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <BpkTableHead>
          <th>Skyscanner</th>
        </BpkTableHead>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly with custom class', () => {
    const tree = renderer
      .create(
        <BpkTableHead className="my-custom-class">
          <th>Skyscanner</th>
        </BpkTableHead>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly with arbitrary props', () => {
    const tree = renderer
      .create(
        <BpkTableHead id="my-custom-id" data-foo="bar">
          <th>Skyscanner</th>
        </BpkTableHead>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
