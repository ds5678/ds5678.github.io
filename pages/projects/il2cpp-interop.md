# Il2CppInterop

## What is Il2CppInterop

[Il2CppInterop](https://github.com/BepInEx/Il2CppInterop) is a framework for bridging together Unity's [Il2Cpp](https://docs.unity3d.com/6000.5/Documentation/Manual/scripting-backends-il2cpp.html) and .NET's CoreCLR runtimes.

The framework allows the use of Il2Cpp domain and objects in it from a managed .NET domain. This is extremely important for the Unity modding community and has been a key pillar of most mod loaders for several years.

## Version 1 Contributions

I did not create Il2CppInterop, but I am a long-time contributor, both to [Il2CppInterop](https://github.com/BepInEx/Il2CppInterop/pulls?q=is%3Apr+author%3Ads5678+is%3Aclosed) and its predecessor [Il2CppAssemblyUnhollower](https://github.com/knah/Il2CppAssemblyUnhollower/pulls?q=is%3Apr+author%3Ads5678+is%3Aclosed). Here are a few of my more notable contributions:

* [Enable modders to use their injected classes inside asset bundles](https://github.com/knah/Il2CppAssemblyUnhollower/pull/38)
  * Prior to this pull request, injected components had to be added with code after the asset bundle was loaded.
* [Switch the assembly generator from Mono.Cecil to AsmResolver](https://github.com/BepInEx/Il2CppInterop/pull/124)
  * This was a massive refactor, but deeply needed in order to align with the rest of the ecosystem. I wrote a [tool](https://github.com/AssetRipper/AssetRipper.CIL/tree/main/AssetRipper.CIL.Validator) to verify that there were no regressions from my changes.
* [Improve the "unstripping" process](https://github.com/BepInEx/Il2CppInterop/pulls?q=is%3Apr+author%3Ads5678+is%3Aclosed+unstripping)
  * When an Il2Cpp game is compiled, unused code is stripped/trimmed from the build. Unstripping is the process of using Mono CIL instructions from public assemblies to fill method bodies in generated interop assemblies.

## Version 2

Despite the unquestionable usefulness of Il2CppInterop v1, it has some [friction points](https://github.com/BepInEx/Il2CppInterop/milestone/2):

* Inheritance - Interfaces are classes; abstract classes are not abstract; virtual methods are not virtual.
* Non-blittable structs - They are generated as classes, backed by a pointer to a boxed object.
* Object type - Objects are returned from generated interop methods as the declared return type, rather than the object's actual type.

I [rewrote](https://github.com/BepInEx/Il2CppInterop/pull/238) most of Il2CppInterop to address the above issues and create a (nearly) perfect type system that faithfully models the underlying system.
