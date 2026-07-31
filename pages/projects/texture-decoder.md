# TextureDecoder

[AssetRipper.TextureDecoder](https://github.com/AssetRipper/AssetRipper.TextureDecoder) is an open-source C# library, part of the broader [AssetRipper](./assetripper) project ecosystem, that provides an API for decoding textures. This decoder handles the low-level work of turning compressed texture formats into usable RGBA pixel data.

## Performance

My texture decoding library puts a strong emphasis on efficiency.

* Color conversion relies heavily on [generic math](https://learn.microsoft.com/en-us/dotnet/standard/generics/math) for concise, abstract implementations without any runtime penalty.
* Allocations during the decoding process are minimal because garbage collection is a drain on performance.
* All data types are structs and contain the minimum number of bytes.

## Testing

The project has a large test suite, much of it [source-generated](../skills/source-generation).
