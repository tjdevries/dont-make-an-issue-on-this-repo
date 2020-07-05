import {TestParameter, recordMemorySample, SIZE_OF_DATA} from "./types";

export function myFunction1(t: TestParameter): Uint8Array | null {
    if (t.foo === 0) {
        return null;
    }

    const len = t.foo * SIZE_OF_DATA;
    const mem = new Uint8Array(len);
    recordMemorySample(mem);

    return mem;
}


