import {Controller} from "@tsed/di";
import {Get} from "@tsed/schema";

@Controller("/movie")
export class MovieController {
  @Get("/")
  get() : Promise<string> {
    return Promise.resolve("MOVIE CONTROLLER");
  }
}
