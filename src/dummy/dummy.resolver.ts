import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class DummyResolver {
  @Query(() => String)
  hello() {
    return 'world';
  }
}
