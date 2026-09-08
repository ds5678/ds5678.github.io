# C++ Translation

## AssetRipper.Translation.LlvmIR

This [tool](https://github.com/AssetRipper/AssetRipper.Translation.LlvmIR) translates [LLVM IR](https://llvm.org/docs/LangRef.html) to [.NET CIL](https://en.wikipedia.org/wiki/List_of_CIL_instructions), enabling conversion of C++ code to C#.

### How it works

[Clang](https://clang.llvm.org/) allows compiling to LLVM IR instead of more traditional outputs like static libraries. This intermediate representation is simple enough to enable robust translation of each individual instruction to an equivalent CIL instruction, or a short series of them. Then, some basic optimizations are applied to improve output quality, and [ILSpy](https://github.com/icsharpcode/ILSpy) decompiles it to pretty C#.

### Not emulation

Unlike emulation, this is real translation. The instructions aren't being run on a simulated CPU or anything like that. The generated output runs nearly as fast as the native compilation (C# is a slightly slower language than C++).

### AssetRipper.Conversions.FastPng

This [C# port](https://github.com/AssetRipper/AssetRipper.Conversions.FastPng) of [fpng](https://github.com/richgel999/fpng) is an example of my tool's capabilities. The library writes PNG files quickly and efficiently, much faster than alternatives like `System.Drawing.Common`.

## Hebron

I also did [some work](https://github.com/HebronFramework/Hebron/pulls?q=is%3Apr+author%3Ads5678+is%3Aclosed) on [Hebron](https://github.com/HebronFramework/Hebron), a C translation project.

### Differences from AssetRipper.Translation.LlvmIR

Hebron does source translation, which has benefits and drawbacks.

* Comments and local variable names are maintained.
* Compiler errors are possible.
* C only. C++ isn't supported.
