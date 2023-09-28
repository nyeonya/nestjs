import { ArgsType, Field, InputType, PartialType } from '@nestjs/graphql';
import { createRestaurantDto } from './create-restaurant.dto';

@InputType()
class UpadateRestaurantInputType extends PartialType(createRestaurantDto) {}

@ArgsType()
export class UpadateRestaurantDto {
  @Field((type) => Number)
  id: number;

  @Field((type) => UpadateRestaurantInputType)
  data: UpadateRestaurantInputType;
}
