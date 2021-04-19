/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { ESFilter } from '../../../../../typings/elasticsearch';
import { SERVICE_ENVIRONMENT } from '../../common/elasticsearch_fieldnames';
import {
  ENVIRONMENT_ALL,
  ENVIRONMENT_NOT_DEFINED,
} from '../../common/environment_filter_values';
export { kqlQuery, rangeQuery } from '../../../observability/server';

type QueryContainer = ESFilter;

export function environmentQuery(environment?: string): QueryContainer[] {
  if (!environment || environment === ENVIRONMENT_ALL.value) {
    return [];
  }

  if (environment === ENVIRONMENT_NOT_DEFINED.value) {
    return [{ bool: { must_not: { exists: { field: SERVICE_ENVIRONMENT } } } }];
  }

  return [{ term: { [SERVICE_ENVIRONMENT]: environment } }];
}
