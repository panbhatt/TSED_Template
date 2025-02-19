import { CollectionOf, Generics, Property } from "@tsed/schema";

export class Pagination {
    @Property()
    page : number; 
    @Property()
    size : number; 
    @Property()
    next?:string ; 
    @Property()
    previous?:string; 

}


@Generics("T")
export default class ApiResponse<T> {
    @CollectionOf("T")
    data: T[];

    @Property()
    status : string

    @Property()
    pageDetails: Pagination; 

}