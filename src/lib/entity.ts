/**
 * Template for creating view models that represent the Entity, which can be
 * edited.
 * https://cpratt.co/generic-entity-base-class/
 */
export interface IEntityEditable {
    Appellation: string;
}

/**
 * Properties of the IEntity should not be exposed for editing via view models.
 * The intention is to implement common properties of entities stored in a
 * database.
 * https://www.wikidata.org/wiki/Q35120
 */
export interface IEntity extends IEntityEditable {
    /**
     * Designation of who or what created this entity. CreatedBy is a generic
     * type which when implemented, shares the same type as the entity Id. The
     * presumption is that an entity (i.e. Person) created this entity and can
     * be referenced by its Id rather than a simple string.
     */
    CreatedBy: any; // TODO: Verify type works here here.

    /**
     * When the entity was created.
     */
    CreatedDateTime: Date;

    /**
     * Unique identifier of the entity. Id is a generic type which can be
     * implemented using a preferred type (i.e. number, string).
     */
    Id: any;

    /**
     * Designation of who or what modified this entity. ModifiedBy is a generic
     * type which when implemented, shares the same type as the entity Id. The
     * presumption is that an entity (i.e. Person) modified this entity and can
     * be referenced by its Id rather than a simple string.
     */
    ModifiedBy: any;

    /**
     * When the entity was most recently modified.
     */
    ModifiedDateTime: Date;

    /**
     * Optimistic concurrency token.
     * https://stackoverflow.com/a/33578970
     */
    Version: [];
}

export interface IEntityGeneric<T> extends IEntity {
    CreatedBy: T;
    Id: T;
    ModifiedBy: T;
}

export abstract class Entity<T> implements IEntityGeneric<T> {

    constructor(appellation: string) { this.Appellation = appellation; }

    /**
     * An identifying name or title.
     */
    Appellation: string;

    CreatedBy: T;
    CreatedDateTime: Date;
    Id: T;
    ModifiedBy: T;
    ModifiedDateTime: Date;
    Version: [];
} 