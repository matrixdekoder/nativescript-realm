var Realm = require("nativescript-realm").Realm;
var realm = new Realm();

describe("greet function", function() {
    it("exists", function() {
        expect(realm.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(realm.greet()).toEqual("Hello, NS");
    });
});