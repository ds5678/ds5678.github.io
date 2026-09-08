# Source Generation

Machine-written code is more scalable, reliable, maintainable, and efficient than hand-written code. Whenever feasible, I write generators for code instead of taking a manual approach.

## AssemblyDumper

The source generation for [AssetRipper](../projects/assetripper) uses [Unity type trees](../projects/other#type-trees) to generate statically-typed code for all 400+ asset classes across over a thousand versions of Unity. This source generation is one of the things that puts AssetRipper ahead of its competitors. The reduced maintenance, compile-time enforcement, and expanded capabilities enables development to move faster without sacrificing quality.

## Roslyn

The [Roslyn compiler](https://github.com/dotnet/roslyn) offers an extensible API that allows developers to write [source generators](https://devblogs.microsoft.com/dotnet/introducing-c-source-generators/), which I prolifically use in my projects.

## AssetRipper.Text.SourceGeneration

Because I frequently generate C# source code, I created a [library](https://github.com/AssetRipper/AssetRipper.Text.SourceGeneration) to improve the experience of doing so. Here's an example:

```cs
// with
using (new CurlyBrackets(writer))
{
    // Inner code
}

// without
writer.WriteLine('{');
writer.Indent++;
// Inner code
writer.Indent--
writer.WriteLine('}');
```

## AssetRipper.Text.Html

[AssetRipper.Text.Html](https://github.com/AssetRipper/AssetRipper.Text.Html) is a library I created for generating HTML content with C#.

```cs
// Fluent API
new Img(writer).WithSrc("www.example.com").Close();
using (new A(writer).WithClass("btn").End())
{
	// Inner content
}

// Initialization API
new Img(writer) { Src = "www.example.com" }.Close();
using (new A(writer) { Class = "btn" }.End())
{
	// Inner content
}
```
