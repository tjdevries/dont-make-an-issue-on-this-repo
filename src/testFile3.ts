import {TestParameter, recordMemorySample, SIZE_OF_DATA} from "./types";

export function myFunction3(t: TestParameter): Uint8Array | null {
    if (t.foo === 0) {
        return null;
    }

    let len = 0;
    const mems = [1, 3, 7, 19];

    for (let i = 0; i < t.foo; ++i) {
        len += mems[(i * t.foo) % 4] * SIZE_OF_DATA;
    }

    const mem = new Uint8Array(len);
    recordMemorySample(mem);

    return mem;
}


