export const SIZE_OF_DATA = 4;

export type TestParameter = {
    foo: number;
}

export function recordMemorySample(mem: Uint8Array) {
    console.log("Memory Sample", mem.length);
}

