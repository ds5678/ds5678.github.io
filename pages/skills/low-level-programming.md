# Low-level Programming

```cs
ref *(T*)null
```

Pointers do not scare me. I'm intimately confortable with managing memory lifetimes and ensuring that unsafe code is used safely.

## Native Interop

Projects like [Il2CppInterop](../projects/il2cpp-interop.md) and [my LibTorchSharp bindings library](../projects/libtorchsharp-bindings.md) extensively use unsafe code. [P/Invoke](https://learn.microsoft.com/en-us/dotnet/standard/native-interop/pinvoke) makes this necessary and unavoidable.

## Span

Part of being comfortable with unsafe code is knowing when not to use it. Avoidance is generally a good rule of thumb, and I've refactored several codebases to remove unsafe code and replace it with safe implementations. [Span and readonly counterpart](https://learn.microsoft.com/en-us/archive/msdn-magazine/2017/connect/csharp-all-about-span-exploring-a-new-net-mainstay) made this possible without compromising on performance.

For example, [TextureDecoder](../projects/texture-decoder.md) previously had portions written with unsafe code. This code was copied from other repositories and exhibited correct behavior during my testing. However, rewriting them to be safe code uncovered several out-of-range bugs in the original implementation.
