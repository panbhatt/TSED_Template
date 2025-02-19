import {Controller} from "@tsed/di";
import {ContentType, Get, OperationId, OperationPath, Produces, Returns, Summary} from "@tsed/schema";
import {MoviesResponse, MovieResponse } from "./response/MoviesResponse.js";
import ErrorResponse from "./response/ErrorResponse.js";
import ApiResponse from "./response/ApiResponse.js";
import Constants from "src/constants/index.js";

@Controller("/movies")
export class MovieController {
  
  /**
   * This function will return the list of MOVIES. 
   * @returns 
   */
  @Get("/")
  @Summary("This Route will give all the movies present in the database")
  @Returns(401,ErrorResponse)
  @ContentType("application/json")
  @Produces("application/json")
  @OperationId("OMDB_Get_All_Movies")
  @OperationPath("GET", "/movies")
  @(Returns(200, ApiResponse).Of(MoviesResponse).Description("description"))
  async getAllMovies() : Promise<ApiResponse<MoviesResponse> | ErrorResponse> {
    
    let moviesResponse : MoviesResponse = new MoviesResponse(); 
    moviesResponse.data = [
      new MovieResponse("TUM BIN")
    ];

    const apiResponse : ApiResponse<MoviesResponse> = new ApiResponse<MoviesResponse>(); 
    apiResponse.data = [moviesResponse] 
    apiResponse.status = Constants.SUCCESS; 


    return Promise.resolve(apiResponse)
  }



}
