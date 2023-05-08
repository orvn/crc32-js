# JS CRC32 (and CRC16)

![package graph image](assets/images/graph-image.png)

A Javascript CRC checksum or hashing implementation that yields the same result as C and PHP CRC functions.


## Purpose

This package was created because other JavaScript CRC functions either tend to be inefficient, or don't match the CRC function output from implementations in C, or in PHP.

Included is a 32-bit and a 16-bit CRC (cyclic redundancy checksum) function. This function is often used to check for data integregity. It can also be used as a concise hash, however there are some chances for collision at scale.

## Collision resistance

TBD
