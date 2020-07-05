#include "thing.h";

void* myFunction3(TestParameter* t) {
    if (t->foo == 0) {
        return 0;
    }

    size_t memory = 0;
    int[4] mems = {1, 3, 7, 19};
    for (int i = 0; i < t->foo; ++i) {
        memory += mems[(i * t->foo) % 4];
    }

    void* mem = malloc(memory);
    recordMemorySample(mem, memory);

    return mem;
}


