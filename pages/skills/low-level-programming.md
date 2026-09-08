# Low-level Programming

```cs
ref *(T*)null
```

Pointers do not scare me. I'm intimately confortable with managing memory lifetimes and ensuring that unsafe code is used safely.

## Native Interop

Projects like [Il2CppInterop](../projects/il2cpp-interop.md) and [my LibTorchSharp bindings library](../projects/libtorchsharp-bindings.md) extensively use [P/Invoke](https://learn.microsoft.com/en-us/dotnet/standard/native-interop/pinvoke) and unsafe code. Being vigilant about memory safety and maximizing guardrails against misuse is essential because unsafe code is unforgiving.

* For my LibTorchSharp bindings, almost all unsafe code is [machine-generated](./source-generation.md), so users can use a higher level API without pointers.
* Il2CppInterop similarly insulates users from pointers with source-generated wrapper code. This is especially important because the Unity Il2Cpp API is unwieldly.

## Span

Part of being comfortable with unsafe code is knowing when not to use it. Avoidance is generally a good rule of thumb, and I've refactored several codebases to remove unsafe code and replace it with safe implementations. [Span and its readonly counterpart](https://learn.microsoft.com/en-us/archive/msdn-magazine/2017/connect/csharp-all-about-span-exploring-a-new-net-mainstay) made this possible without compromising on performance.

For example, [TextureDecoder](../projects/texture-decoder.md) previously had portions written with unsafe code. This code was adapted from other repositories and exhibited correct behavior during my testing. However, rewriting them to be safe code uncovered several out-of-range bugs in the original implementation.
