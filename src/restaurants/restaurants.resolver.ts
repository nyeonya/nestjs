import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurant.entity';
import { createRestaurantDto } from './dtos/create-restaurant.dto';
import { RestaurantService } from './restaurants.service';
import { UpadateRestaurantDto } from './dtos/update-restaurant.dto';

@Resolver((of) => Restaurant)
export class RestaurantsResolver {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Query((returns) => [Restaurant])
  restaurants(): Promise<Restaurant[]> {
    return this.restaurantService.getAll();
  }

  @Mutation((returns) => Boolean)
  async createRestaurant(
    @Args('input') createRestaurantDto: createRestaurantDto,
  ): Promise<boolean> {
    try {
      await this.restaurantService.createRestaurant(createRestaurantDto);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  @Mutation((returns) => Boolean)
  async updateRestaurant(
    @Args() updateRestaurnt: UpadateRestaurantDto,
  ): Promise<boolean> {
    try {
      await this.restaurantService.updateRestaurant(updateRestaurnt);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
