// Docs: https://www.instantdb.com/docs/modeling-data

import { i } from "@instantdb/react";

const _schema = i.schema({
  entities: {
    elements: i.entity({
      color: i.string(),
      createdAt: i.number(),
      height: i.number().optional(),
      type: i.string(),
      width: i.number().optional(),
      x: i.number(),
      y: i.number(),
    }),
  },
  links: {},
  rooms: {},
});

// This helps Typescript display nicer intellisense
type _AppSchema = typeof _schema;
interface AppSchema extends _AppSchema {}
const schema: AppSchema = _schema;

export type { AppSchema };
export default schema;
