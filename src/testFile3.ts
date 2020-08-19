import {MemoryInfo, recordMemorySample} from "./types";

export function myFunction3(t: MemoryInfo): Uint8Array | null {
    if (t.foo === 0) {
        return null;
    }

    let len = 0;
    const mems = [1, 3, 7, 19];

    for (let i = 0; i < t.foo; ++i) {
        len += mems[(i * t.foo) % 4] * t.size;
    }

    const mem = new Uint8Array(len);
    if (process.env.RECORD_MEMORY === "true") {
        recordMemorySample(mem);
    }

    return mem;
}


