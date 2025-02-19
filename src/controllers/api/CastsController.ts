import {Controller} from "@tsed/di";
import {Get} from "@tsed/schema";

@Controller("/casts")
export class CastsController {
  @Get("/")
  get() {
    return "hello";
  }
}
