import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { DummyResolver } from './dummy/dummy.resolver';
import { DynamicResolver } from './dynamic/dynamic.resolver';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: async () =>
        ({
          driver: ApolloDriver,
          autoSchemaFile: 'schema.gql',
          fieldResolverEnhancers: ['guards'],
          introspection: true,
        }) as ApolloDriverConfig,
    }),
  ],
  controllers: [],
  providers: [DummyResolver, DynamicResolver],
})
export class AppModule {}
