# AssetRipper.Bindings.LibTorchSharp

[This](https://github.com/AssetRipper/AssetRipper.Bindings.LibTorchSharp) is an alternate binding library for [LibTorchSharp](https://github.com/dotnet/TorchSharp/tree/main/src/Native), the native library portion of [TorchSharp](https://github.com/dotnet/TorchSharp).

## Differences from TorchSharp

This opinionated library requires unwavering vigilance to memory management, in exchange for maximum performance.

### .NET 10

This library is built targeting .NET 10, while TorchSharp multi-targets older versions, including .NET Standard 2.0.

### Allocations

TorchSharp relies on the garbage collector to protect against native memory leaks. This library eliminates managed allocations by relying on users to dispose any native objects they create.

```csharp
using Tensor tensor = new Tensor([1, 2, 3]);
```

That ensures that memory is deallocated as soon as it's no longer needed.

### Level of abstraction

This library exposes the native API directly and also offers a more user-friendly layer over top of that. TorchSharp is high-level and tries to mirror the PyTorch API almost exactly.

### Maintenance

Most of this library is procedurally generated.

* [ClangSharp](https://github.com/dotnet/clangsharp/) is used to generate the low-level interop code.
* A custom Roslyn source generator is used to create a mid-level layer on top of the interop code.

## Upstream Contributions

Work on this project has resulted in several [pull requests](https://github.com/dotnet/TorchSharp/pulls?q=is%3Apr+author%3Ads5678+is%3Aclosed) to the upstream repository.
