const Test1 = require('../1');

describe("Test printer", () => {

    it("Test multiple of 3", () => {
        let instance = new Test1();
        expect(instance.printer(3)).toEqual('Visual');
    });

    it("Test multiple of 5", () => {
        let instance = new Test1();
        expect(instance.printer(5)).toEqual('Nuts');
    });

    it("Test multiple of 5 and 3", () => {
        let instance = new Test1();
        expect(instance.printer(15)).toEqual('Visual Nuts');
    });

    it("Test none of the above", () => {
        let instance = new Test1();
        expect(instance.printer(1)).toEqual(1);
    });

});

describe("Test array created", () => {

    it("Test length of array", () => {
        let instance = new Test1();
        expect(instance.looper(1,30).length).toEqual(30);
    })

    it("Test initial number", () => {
        let instance = new Test1();
        expect(instance.looper(12,30)[0]).toEqual(12);
    })

    it("Test last number", () => {
        let instance = new Test1();
        initialNumber = 1;
        lengthArray = 100;
        expect(instance.looper(initialNumber,lengthArray)[lengthArray-1]).toEqual(100);
    })

});