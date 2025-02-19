import { CollectionOf, Property } from "@tsed/schema";

export class MovieResponse {
    @Property()
    name : string

    @Property()
    releaseYear? : number ; 


    constructor(name: string) {
        this.name = name ;
    }
}

export class MoviesResponse {

    @Property()
    @CollectionOf(MovieResponse)
    data : Array<MovieResponse>
}

