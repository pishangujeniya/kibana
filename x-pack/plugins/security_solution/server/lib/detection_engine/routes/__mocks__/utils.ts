/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { Readable } from 'stream';

import { getListArrayMock } from '../../../../../common/detection_engine/schemas/types/lists.mock';
import { getThreatMock } from '../../../../../common/detection_engine/schemas/types/threat.mock';
import type { RuleResponse } from '../../../../../common/api/detection_engine/model/rule_schema';
import type { HapiReadableStream } from '../../../../types';

/**
 * Given a string, builds a hapi stream as our
 * route handler would receive it.
 * @param string contents of the stream
 * @param filename String to declare file extension
 */
export const buildHapiStream = (string: string, filename = 'file.ndjson'): HapiReadableStream => {
  const HapiStream = class extends Readable implements HapiReadableStream {
    public readonly hapi;
    constructor(fileName: string) {
      super();
      this.hapi = { filename: fileName, headers: {} };
    }
  };

  const stream = new HapiStream(filename);
  stream.push(string);
  stream.push(null);

  return stream;
};

export const getOutputRuleAlertForRest = (): RuleResponse => ({
  author: ['Elastic'],
  actions: [],
  building_block_type: 'default',
  created_by: 'elastic',
  created_at: '2019-12-13T16:40:33.400Z',
  updated_at: '2019-12-13T16:40:33.400Z',
  description: 'Detecting root and admin users',
  enabled: true,
  false_positives: [],
  from: 'now-6m',
  id: '04128c15-0d1b-4716-a4c5-46997ac7f3bd',
  immutable: false,
  index: ['auditbeat-*', 'filebeat-*', 'packetbeat-*', 'winlogbeat-*'],
  interval: '5m',
  risk_score: 50,
  risk_score_mapping: [],
  rule_id: 'rule-1',
  rule_name_override: undefined,
  saved_id: undefined,
  language: 'kuery',
  license: 'Elastic License',
  max_signals: 10000,
  name: 'Detect Root/Admin Users',
  output_index: '.siem-signals',
  query: 'user.name: root or user.name: admin',
  references: ['http://example.com', 'https://example.com'],
  severity: 'high',
  severity_mapping: [],
  updated_by: 'elastic',
  tags: [],
  throttle: undefined,
  threat: getThreatMock(),
  exceptions_list: getListArrayMock(),
  filters: [
    {
      query: {
        match_phrase: {
          'host.name': 'some-host',
        },
      },
    },
  ],
  meta: {
    someMeta: 'someField',
  },
  timeline_id: 'some-timeline-id',
  timeline_title: 'some-timeline-title',
  to: 'now',
  type: 'query',
  note: '# Investigative notes',
  version: 1,
  revision: 0,
  execution_summary: undefined,
  related_integrations: [],
  required_fields: [],
  response_actions: undefined,
  setup: '',
  outcome: undefined,
  alias_target_id: undefined,
  alias_purpose: undefined,
  timestamp_override: undefined,
  timestamp_override_fallback_disabled: undefined,
  namespace: undefined,
  data_view_id: undefined,
  alert_suppression: undefined,
});
