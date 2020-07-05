import {TestParameter, recordMemorySample, SIZE_OF_DATA} from "./types";

export function myFunction2(t: TestParameter): Uint8Array | null {
    if (t.foo === 0) {
        return null;
    }

    let len = 0;
    for (let i = 0; i < t.foo; ++i) {
        len += i * i * SIZE_OF_DATA;
    }
    const mem = new Uint8Array(len);
    recordMemorySample(mem);

    return mem;
}


