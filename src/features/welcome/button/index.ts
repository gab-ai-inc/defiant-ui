/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ComponentType } from 'react'
import styled, { css } from 'styled-components'

interface BaseButtonProps {
  active?: boolean
}

const BaseButton = styled<BaseButtonProps, 'button'>('button')`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  display: block;
  line-height: 1;
  background: none;
  border: none;
  cursor: pointer;
  outline: inherit;
  letter-spacing:1px;
`

export const SkipButton = styled(BaseButton)`
  color: #7C7D8C;
  text-decoration: underline;
  font-weight: 300;
  letter-spacing: 0;

  &:hover {
    color: #343546;
  }
`

export const Bullet = styled(BaseButton as ComponentType<any>)`
  padding: 0 7px;
  font-size: 36px;
  color: #7C7D8C;
  letter-spacing: 0;

  &:hover {
    color: #343546;
  }

  ${p => p.active && css`
    color: #00d177;

    &:hover {
      color: #00c466;
    }
  `}
`
