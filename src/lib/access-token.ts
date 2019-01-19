import { IEntityEditable, Entity, IEntityGeneric } from "./entity";
import { IAccessControl } from "./access-control";

export interface IAccessTokenEditable extends IEntityEditable { }

export interface IAccessToken extends IAccessTokenEditable, IAccessControl {
    /**
     * Audience the access token is intended for.
     */
    Audience: string;

    /**
     * Contents of the access token.
     */
    InnerToken: string;

    /**
     * Issuer of the access token.
     */
    Issuer: string;

    /**
     * Subject or principal of the access token.
     */
    Subject: string;

    /**
     * The type of access token (i.e. 'refresh', 'access', 'auth').
     */
    Type: string;

    /**
     * When the access token became valid.
     */
    ValidFrom: Date;

    /**
     * When the access token expires.
     */
    ValidTo: Date;
 } 

export interface IAccessTokenGeneric<T> extends IAccessToken, IEntityGeneric<T> {
    CreatedBy: T;
    Id: T;
    ModifiedBy: T;
}

export abstract class AccessToken<T> implements Entity<T>, IAccessTokenGeneric<T> {
    constructor(appellation: string) { this.Appellation = appellation; }

    Appellation: string;

    CreatedBy: T;
    CreatedDateTime: Date;
    Id: T;
    ModifiedBy: T;
    ModifiedDateTime: Date;
    Version: [];

    Audience: string;
    InnerToken: string;
    Issuer: string;
    Subject: string;
    Type: string;
    ValidFrom: Date;
    ValidTo: Date;
}