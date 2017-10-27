import { Observable } from 'tns-core-modules/data/observable';
import { Realm, RealmObject, RealmObjectSchema, RealmModel } from 'nativescript-realm';

import * as utils from 'tns-core-modules/utils/utils';

class Dog {
    static schema: any;
}

export class HelloWorldModel extends Observable {
    public message: string;
    private realm: Realm;

    constructor() {
        super();

        this.realm = new Realm();
        this.realm.connect();

        setTimeout(() => {


            Dog.schema = {
                name: 'Dog',
                properties: {
                    name: 'string',
                    age: 'int',
                }
            };

            const dog = new RealmModel({
                value: []
            });
            dog.name = 'Loki';
            dog.age = 2;

            // const dogSchema = new RealmObjectSchema({
            //     className: Dog.className,
            //     objectClass: Dog,
            //     properties: NSArray.alloc().init()
            // });

            console.log('Realm Dog Model', (<any>dog).hash);


            // const dog = new RealmObject({
            //     value: this.realm.ios,
            //     schema: {
            //         properties: {
            //             name: 'string'
            //         }
            //     }
            // });
        });



        this.message = this.realm.message;
    }
}
