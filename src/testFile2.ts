import {MemoryInfo, recordMemorySample} from "./types";

export function myFunction2(t: MemoryInfo): Uint8Array | null {
    if (t.foo === 0) {
        return null;
    }

    let len = 0;
    for (let i = 0; i < t.foo; ++i) {
        len += i * i * t.size;
    }
    const mem = new Uint8Array(len);
    if (process.env.RECORD_MEMORY === "true") {
        recordMemorySample(mem);
    }

    return mem;
}


