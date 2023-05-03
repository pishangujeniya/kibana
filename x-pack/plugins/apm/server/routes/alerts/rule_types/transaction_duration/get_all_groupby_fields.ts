/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import {
  SERVICE_ENVIRONMENT,
  SERVICE_NAME,
  TRANSACTION_TYPE,
} from '../../../../../common/es_fields/apm';

export const getAllGroupByFields = (groupBy: string[] | undefined = []) => {
  const predefinedGroupby = [
    SERVICE_NAME,
    SERVICE_ENVIRONMENT,
    TRANSACTION_TYPE,
  ];

  return Array.from(new Set([...predefinedGroupby, ...groupBy]));
};
