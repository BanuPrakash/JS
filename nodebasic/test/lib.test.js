
let {add, filter, forEach} = require('../src/lib')

// Assemble
describe("testing libraries", () => {
    //test spec
    it("test add", () => {
        var expected = 9;
        var result = add(4,5); //Action
        expect(result).toBe(expected); //Assert
    });

    it("test filter ", () => {
        var data = [4,5,1,2,9,8];

        let predicateMock = jest.fn(x => x % 2 === 0); // dependency
        let result = filter(data, predicateMock);
        expect(predicateMock.mock.calls).toHaveLength(6);
        expect(predicateMock.mock.calls[0][0]).toBe(4);
        expect(predicateMock.mock.calls[1][0]).toBe(5);
        expect(result[0]).toBe(4);
        expect(result[1]).toBe(2);
        expect(result[1]).toBe(2);
    });

    it("test forEach ", () => {
        let actionMock = jest.fn(); // dependency for forEach
        var data = [4,5,1,2,9,8];
        forEach(data, actionMock);
        console.log(actionMock.mock.calls)
        expect(actionMock.mock.calls).toHaveLength(6);
    });

})