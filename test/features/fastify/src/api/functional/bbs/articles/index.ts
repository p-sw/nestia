/**
 * @packageDocumentation
 * @module api.functional.bbs.articles
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection, Primitive } from "@nestia/fetcher";

import type { IPage } from "./../../../structures/IPage";
import type { IBbsArticle } from "./../../../structures/IBbsArticle";

/**
 * @controller BbsArticlesController.index()
 * @path GET /bbs/articles/:section
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function index(
    connection: IConnection,
    section: string,
    query: index.Query,
): Promise<index.Output> {
    return Fetcher.fetch(
        connection,
        index.ENCRYPTED,
        index.METHOD,
        index.path(section, query),
    );
}
export namespace index {
    export type Query = Primitive<IPage.IRequest>;
    export type Output = Primitive<IPage<IBbsArticle.ISummary>>;

    export const METHOD = "GET" as const;
    export const PATH: string = "/bbs/articles/:section";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (section: string, query: index.Query): string => {
        const variables: Record<any, any> = query as any;
        const search: URLSearchParams = new URLSearchParams();
        for (const [key, value] of Object.entries(variables))
            if (value === undefined) continue;
            else if (Array.isArray(value))
                value.forEach((elem) => search.append(key, String(elem)));
            else
                search.set(key, String(value));
        const encoded: string = search.toString();
        return `/bbs/articles/${encodeURIComponent(section ?? "null")}${encoded.length ? `?${encoded}` : ""}`;;
    }
}

/**
 * Store a new article.
 * 
 * @param section Section code
 * @param input Content to store
 * @returns Newly archived article
 * 
 * @controller BbsArticlesController.store()
 * @path POST /bbs/articles/:section
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function store(
    connection: IConnection,
    section: string,
    input: store.Input,
): Promise<store.Output> {
    return Fetcher.fetch(
        connection,
        store.ENCRYPTED,
        store.METHOD,
        store.path(section),
        input,
    );
}
export namespace store {
    export type Input = Primitive<IBbsArticle.IStore>;
    export type Output = Primitive<IBbsArticle>;

    export const METHOD = "POST" as const;
    export const PATH: string = "/bbs/articles/:section";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (section: string): string => {
        return `/bbs/articles/${encodeURIComponent(section ?? "null")}`;
    }
}

/**
 * Update an article.
 * 
 * @param section Section code
 * @param id Target article ID
 * @param input Content to update
 * @returns Updated content
 * 
 * @controller BbsArticlesController.update()
 * @path PUT /bbs/articles/:section/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function update(
    connection: IConnection,
    section: string,
    id: string,
    input: update.Input,
): Promise<update.Output> {
    return Fetcher.fetch(
        connection,
        update.ENCRYPTED,
        update.METHOD,
        update.path(section, id),
        input,
    );
}
export namespace update {
    export type Input = Primitive<IBbsArticle.IStore>;
    export type Output = Primitive<IBbsArticle>;

    export const METHOD = "PUT" as const;
    export const PATH: string = "/bbs/articles/:section/:id";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (section: string, id: string): string => {
        return `/bbs/articles/${encodeURIComponent(section ?? "null")}/${encodeURIComponent(id ?? "null")}`;
    }
}