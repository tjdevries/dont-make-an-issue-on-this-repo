#include "thing.h";

void* myFunction2(TestParameter* t) {
    if (t->foo == 0) {
        return 0;
    }

    size_t memory = 0;
    for (int i = 0; i < t->foo; ++i) {
        memory += i * i;
    }

    void* mem = malloc(memory);
    recordMemorySample(mem, memory);

    return mem;
}


