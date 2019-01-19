import { IEntityEditable, Entity, IEntityGeneric } from "./entity";
import { ILanguoid } from "./languoid";

export interface ILanguageEditable extends IEntityEditable {

    /**
     * A group of languages related through descent from a common ancestral
     * language or parental language, called the proto-language of that family.
     */
    LanguageFamily: string;

    /**
     * A name used by a group or category of people to refer to themselves or
     * their language, as opposed to a name given to them by other groups.
     */
    Endonym: string;

    /**
     * Two-letter code, one per language.
     */
    ISO6391: string;

    /**
     * Three-letter code coinciding with ISO6391 of the same language.
     */
    ISO6392T: string;

    /**
     * Three-letter code, similar to ISO6392T with some codes derived from
     * English names rather than the endonym.
     */
    ISO6392B: string;

    /**
     * Same as ISO6392T, but with distinct codes for each variety of an ISO 639
     * macrolanguage.
     */
    ISO6393: string;
}

export interface ILanguage extends ILanguageEditable, ILanguoid { }

export interface ILanguageGeneric<T> extends ILanguage, IEntityGeneric<T> {
    CreatedBy: T;
    Id: T;
    ModifiedBy: T;
 }

export abstract class Language<T> implements Entity<T>, ILanguageGeneric<T> {
    
    constructor(appellation: string) { this.Appellation = appellation; }

    Appellation: string;

    CreatedBy: T;
    CreatedDateTime: Date;
    Id: T;
    ModifiedBy: T;
    ModifiedDateTime: Date;
    Version: [];

    LanguageFamily: string;
    Endonym: string;
    ISO6391: string;
    ISO6392T: string;
    ISO6392B: string;
    ISO6393: string;
}