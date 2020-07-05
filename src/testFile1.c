#include "thing.h";

void* myFunction1(TestParameter* t) {
    if (t->foo == 0) {
        return 0;
    }

    size_t memory = t->foo * sizeof(size_t);
    void* mem = malloc(memory);
    recordMemorySample(mem, memory);

    return mem;
}


