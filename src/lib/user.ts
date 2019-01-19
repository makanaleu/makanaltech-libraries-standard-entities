import { IEntityEditable, IEntityGeneric, Entity } from "./entity";
import { IPerson } from "./person";

export interface IUserEditable extends IEntityEditable {
    // TODO: Add IUserEditable properties.
}

export interface IUser extends IUserEditable, IPerson { }

export interface IUserGeneric<T> extends IUser, IEntityGeneric<T> {
    CreatedBy: T;
    Id: T;
    ModifiedBy: T;
}

/**
 * Person who interacts with a system, typically through an interface, to 
 * extract some functional benefit.
 * https://www.wikidata.org/wiki/Q613354
 */
export abstract class User<T> implements Entity<T>, IUserGeneric<T> {

    constructor(appellation?: string) { this.Appellation = appellation; }

    Appellation: string;

    CreatedBy: T;
    CreatedDateTime: Date;
    Id: T;
    ModifiedBy: T;
    ModifiedDateTime: Date;
    Version: [];

    GivenName: string;
    FamilyName: string;
    MiddleName: string;
    ShortName: string;
    Name: string;
    NameFormat: string;
}
