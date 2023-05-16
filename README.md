# JS CRC32 (and CRC16)

<img src="/assets/images/graph-image.png" alt="package graph image" width="500">

A Javascript CRC checksum or hashing implementation that yields the same result as C and PHP CRC functions.


## Purpose

This package was created because other JavaScript CRC functions either tend to be inefficient, or don't match the CRC function output from implementations in C, or in PHP.

Included is a 32-bit and a 16-bit CRC (cyclic redundancy checksum) function. This function is often used to check for data integregity. It can also be used as a concise hash, however there are some chances for collision at scale.


## Usage

After installing and importing the package (npm and yarn entries coming soon), it can be used as follows

```js
crc32(str, [usePolynomialDivision])
```

Include a string to hash, and optionally elect to use polynomial division, which is set to `false` by default. Instead of polynomial division, the default is to use a pre-calculated lookup table, which is faster. This is also the implementation strategy used within the C and PHP source code.


## Collision resistance

CRC32 might be attractive as a hashing function because of its concise nature. However, collisions _should_ be expected at scale. For this reason it can be used as a hashing function at small scale, or as an effective checksum function.

At first it might seem that the chance of collision is low, because CRC32 results in fixed length 32-bit values. However, the birthday paradox should be considered when checking for the probability of collision between any two values, as a set grows.

### $`P = 1 - \frac{k!}{k^n (k-n)!}`$

where 
- `n` is the size of the set
- `k` is the total number of possible hashes in the algorithm (2^32)
- `P` is the probability of a collision

Applying this, if we have a set size of 1000 different strings, the probability of a collision between two of them is `0.01164%`, or `1 in 8600`. Clearly, this is a good function for checksums, but not an ideal function for most applications of hash functions.


## Roadmap

Other features that are coming soon include the following:

- Argument to toggle between CRC32a and CRC32b
- Argument to toggle between hexadecimal and decimal output
- CRC16 implementation (currently incomplete)
- Docs that explain how CRC32 works in more detail
