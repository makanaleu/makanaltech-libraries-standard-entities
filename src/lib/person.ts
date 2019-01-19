import { IEntityEditable, Entity, IEntityGeneric } from "./entity";
import { IIndividual } from "./individual";
import { IAgent } from "./agent";
import { ISubject } from "./subject";

export interface IPersonEditable extends IEntityEditable {

    /**
     * Name typically used to differentiate people from the same family, clan,
     * or other social group who have a common last name.
     * https://www.wikidata.org/wiki/Q202444
     */
    GivenName: string;

    /**
     * Part of a naming scheme for individuals, used in many cultures worldwide.
     * https://www.wikidata.org/wiki/Q101352
     */
    FamilyName: string;

    /**
     * Additional given name.
     * https://www.wikidata.org/wiki/Q245025
     */
    MiddleName: string;

    /**
     * Person's preferred short name (i.e. Christopher => Chris).
     * https://www.wikidata.org/wiki/Property:P1813
     */
    ShortName: string;

    /**
     * Full name based on NameFormat.
     * https://www.wikidata.org/wiki/Q82799
     */
    Name: string;

    /**
     * General format of a personal name based on culture.
     * https://www.wikidata.org/wiki/Q45846961
     * @example '{first} {last}'
     */
    NameFormat: string;
}

export interface IPerson extends IPersonEditable, ISubject, IIndividual, IAgent<any> { }

export interface IPersonGeneric<T> extends IPerson, IEntityGeneric<T> { 
    CreatedBy: T;
    Id: T;
    ModifiedBy: T;
}

/**
 * Any being that has the attributes of personhood.
 * https://www.wikidata.org/wiki/Q215627
 */
export abstract class Person<T> implements Entity<T>, IPersonGeneric<T> {
    
    constructor(appellation: string) { this.Appellation = appellation; } 

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