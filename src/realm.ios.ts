import { Common } from './realm.common';

export class Realm extends Common {

    realm: RLMRealm;

    connect(): void {
        this.realm = RLMRealm.defaultRealm();
    }

    addObject(): void {
        this.realm.transactionWithBlock(() => {
            this.realm.addObject(null);
        });
    }

    get ios() {
        return this.realm;
    }

}

// export class RealmObject {

//     ios: any;

//     constructor(instance: {
//         value: RLMRealm,
//         schema: RLMObjectSchema
//     }) {
//         this.ios = new RLMObject(instance);
//     }

// }

export class RealmModel extends RLMObject {

    //  Pass in an `NSArray` or `NSDictionary` instance to set the values of the object's properties.
    constructor(o: {
        value: any
    }) {
        super(o);
    }

    name: string; // NSString

    age: number; // NSNumber

    /**
     *
     *  ### Supported property types

 - `NSString`
 - `NSInteger`, `int`, `long`, `float`, and `double`
 - `BOOL` or `bool`
 - `NSDate`
 - `NSData`
 - `NSNumber<X>`, where `X` is one of `RLMInt`, `RLMFloat`, `RLMDouble` or `RLMBool`, for optional number properties
 - `RLMObject` subclasses, to model many-to-one relationships.
 - `RLMArray<X>`, where `X` is an `RLMObject` subclass, to model many-to-many relationships.
     */


}

export class RealmObject {

    ios: RLMObject;

    constructor() {
        this.ios = RLMObject.new();

        // const test = RLMObject.extend({

        // }, {
        //     name: 'MyRLMObject',

        // })

    }
}

export class RealmObjectSchema {

    ios: RLMObjectSchema;

    constructor(options: {
        className: string,
        objectClass: any,
        properties: NSArray<any>
    }) {
        this.ios = new RLMObjectSchema(options);
    }
}
