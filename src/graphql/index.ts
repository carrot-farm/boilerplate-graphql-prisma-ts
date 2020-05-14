import { nexusPrismaPlugin } from 'nexus-prisma';
import { makeSchema, objectType } from '@nexus/schema';
import User from './models/User';
import Query from './Query';
import Mutation from './Mutation';


// ===== 스키마 생성
export const schema = makeSchema({
  types: [User, Query, Mutation],
  plugins: [nexusPrismaPlugin()],
  outputs: {
    schema: `${process.env.PWD}/src/schema/schema.graphql`,
    typegen: `${process.env.PWD}/src/schema/generated/nexus.ts`,
  },
  typegenAutoConfig: {
    contextType: 'Context.TContextCreator', // context 타입 위치
    sources: [ // context 소스 정의
      {
        source: '@prisma/client',
        alias: 'prisma',
      },
      {
        source: require.resolve('../context'),
        alias: 'Context',
      },
    ],
  },
})