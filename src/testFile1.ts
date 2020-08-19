import {MemoryInfo, recordMemorySample} from "./types";

export function myFunction1(t: MemoryInfo): Uint8Array | null {
    if (t.foo === 0) {
        return null;
    }

    const len = t.foo * t.size;
    const mem = new Uint8Array(len);
    if (process.env.RECORD_MEMORY === "true") {
        recordMemorySample(mem);
    }

    return mem;
}


