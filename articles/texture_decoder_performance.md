# Texture Decoder Performance Considerations

Texture decoding generally tends to be a performance hotspot due to its computational nature. In my [texture decoding library](https://github.com/AssetRipper/TextureDecoder) for [AssetRipper](https://github.com/AssetRipper/AssetRipper), performance was one of the key focuses while building the library.

## Numeric Conversion

One of the most common operations is converting one numerical type to another. However, writing it by hand would be tedious and prone to bugs, especially since I support all 17 primitive types in the .NET core library. Ignoring identity pairs, that would be 272 conversion methods, which is daunting, to say the least.

However, I had a plan to escape this. I wrote a source generator application to write this code for me.

## Future Improvements

There is always room for more improvement. One things that might give another boost to performance is the Vector128, Vector256, and Vector512 classes. I've been looking forward to investigating them in order to squeeze out more speed.