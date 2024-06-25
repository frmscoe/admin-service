// SPDX-License-Identifier: Apache-2.0
import { type RouteHandlerMethod } from 'fastify';
import { type FastifySchema } from 'fastify/types/schema';

// const responseSchema = (schemaTransactionName: string): Record<string, unknown> => {
//   return {
//     '2xx': {
//       type: 'object',
//       properties: {
//         message: {
//           type: 'string',
//         },
//         data: {
//           type: 'object',
//           $ref: `${schemaTransactionName}#`,
//         },
//       },
//     },
//   };
// };

const SetOptions = (handler: RouteHandlerMethod, paramSchemaName: string): { handler: RouteHandlerMethod; schema: FastifySchema } => {
  return {
    handler,
    schema: { querystring: { $ref: `${paramSchemaName}#` } },
  };
};

export default SetOptions;