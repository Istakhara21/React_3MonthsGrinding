import { sum } from "../sum";

test("should add a and b", ()=> {
    const result = sum(2,3);

    //Assertion
    expect(result).toBe(5);
})