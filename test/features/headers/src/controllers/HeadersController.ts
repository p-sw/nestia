import { Controller, Headers } from "@nestjs/common";
import typia from "typia";

import core from "@nestia/core";

import { IBbsArticle } from "@api/lib/structures/IBbsArticle";
import { IHeaders } from "@api/lib/structures/IHeaders";

@Controller("headers/:section")
export class HeadersController {
    /**
     * Store a new article.
     * 
     * @param headers Headers for authentication
     * @param section Target section code
     * @param input Content to store
     * @returns Store article
     * 
     * @author Samchon
     */
    @core.TypedRoute.Patch()
    public emplace(
        @core.TypedHeaders() headers: IHeaders,
        @core.TypedParam("section", "string") section: string,
    ): IHeaders {
        section;
        return headers;
    }

    @core.TypedRoute.Post()
    public store(
        @Headers() headers: IHeaders,
        @core.TypedParam("section", "string") section: string,
        @core.TypedBody() input: IBbsArticle.IStore,
    ): IBbsArticle {
        section;
        input;
        headers;
        return typia.random<IBbsArticle>();
    }

    /**
     * Update an article.
     * 
     * @param section Target section code
     * @param id Target article id
     * @param name Name in header for authentication
     * @param input Content to update
     * 
     * @author Samchon
     */
    @core.TypedRoute.Put(":id")
    public update(
        @core.TypedParam("section", "string") section: string,
        @core.TypedParam("id", "uuid") id: string,
        @Headers("x-name") name: string,
        @core.TypedBody() input: IBbsArticle.IStore,
    ): void {
        section;
        id;
        name;
        input;
    }
}
