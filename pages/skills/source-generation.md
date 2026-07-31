# Source Generation

Machine-written code is more scalable, reliable, and efficient than hand-written code.

## AssemblyDumper

The source generation for [AssetRipper](../projects/assetripper) uses [Unity type trees](../projects/other#type-trees) to generate statically-typed code for all 400+ asset classes across over a thousand versions of Unity.

## Roslyn

The [Roslyn compiler](https://github.com/dotnet/roslyn) allows developers to write [source generators](https://devblogs.microsoft.com/dotnet/introducing-c-source-generators/), which I extensively use in my projects.

## AssetRipper.Text.SourceGeneration

Because I frequently generate C# source code, I created a [library](https://github.com/AssetRipper/AssetRipper.Text.SourceGeneration) to improve the experience of doing so.

## AssetRipper.Text.Html

[AssetRipper.Text.Html](https://github.com/AssetRipper/AssetRipper.Text.Html) is a library I created for generating HTML content with C#.
