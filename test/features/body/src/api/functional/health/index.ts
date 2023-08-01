/**
 * @packageDocumentation
 * @module api.functional.health
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection } from "@nestia/fetcher";

/**
 * Health check API.
 * 
 * Just for health checking API liveness.
 * 
 * @tag system
 * @tag health
 * @author Samchon
 * 
 * @controller HealthController.get()
 * @path GET /health
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function get(
    connection: IConnection,
): Promise<void> {
    return Fetcher.fetch(
        connection,
        get.ENCRYPTED,
        get.METHOD,
        get.path(),
    );
}
export namespace get {

    export const METHOD = "GET" as const;
    export const PATH: string = "/health";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (): string => {
        return `/health`;
    }
}