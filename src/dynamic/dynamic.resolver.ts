import {
  Field,
  Int,
  ObjectType,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

const getDto = () => {
  @ObjectType({ isAbstract: true })
  abstract class Dto {
    @Field(() => Int)
    id: number = 1;
  }
  return Dto;
};

@ObjectType()
export class Child extends getDto() {}

const getDynamicResolver = () => {
  @Resolver(getDto(), { isAbstract: true })
  abstract class DynamicResolver {
    @Query(() => Child)
    dto() {
      return new Child();
    }
    @Query(() => Child)
    setDto() {
      return new Child();
    }

    //@ResolveField(() => String)
    //helloWorld() {
    //  return 'foo';
    // }
  }

  return DynamicResolver;
};

@Resolver(Child)
export class DynamicResolver extends getDynamicResolver() {}
