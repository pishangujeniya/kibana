/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React from 'react';
import type { ExpandableFlyoutProps } from '@kbn/expandable-flyout';
import type { RightPanelProps } from './right';
import { RightPanel, RightPanelKey } from './right';
import { RightPanelProvider } from './right/context';
import type { LeftPanelProps } from './left';
import { LeftPanel, LeftPanelKey } from './left';
import { LeftPanelProvider } from './left/context';
import type { PreviewPanelProps } from './preview';
import { PreviewPanel, PreviewPanelKey } from './preview';
import { PreviewPanelProvider } from './preview/context';

/**
 * List of all panels that will be used within the document details expandable flyout.
 * This needs to be passed to the expandable flyout registeredPanels property.
 */
export const expandableFlyoutDocumentsPanels: ExpandableFlyoutProps['registeredPanels'] = [
  {
    key: RightPanelKey,
    component: (props) => (
      <RightPanelProvider {...(props as RightPanelProps).params}>
        <RightPanel path={props.path as RightPanelProps['path']} />
      </RightPanelProvider>
    ),
  },
  {
    key: LeftPanelKey,
    component: (props) => (
      <LeftPanelProvider {...(props as LeftPanelProps).params}>
        <LeftPanel path={props.path as LeftPanelProps['path']} />
      </LeftPanelProvider>
    ),
  },
  {
    key: PreviewPanelKey,
    component: (props) => (
      <PreviewPanelProvider
        {...(props as PreviewPanelProps).params}
        {...(props as PreviewPanelProps).state}
      >
        <PreviewPanel path={props.path as PreviewPanelProps['path']} />
      </PreviewPanelProvider>
    ),
  },
];
