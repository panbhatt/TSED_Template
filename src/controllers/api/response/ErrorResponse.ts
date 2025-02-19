import { Property } from "@tsed/schema";

export default class ErrorResponse {
    @Property()
    code : string; 
    @Property()
    description? : string; 
    @Property()
    summary? : string; 
    @Property()
    error?: Error; 

}