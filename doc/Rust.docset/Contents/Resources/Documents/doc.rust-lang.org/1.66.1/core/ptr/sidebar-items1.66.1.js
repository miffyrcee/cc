window.SIDEBAR_ITEMS = {"fn":[["copy","Copies `count * size_of::<T>()` bytes from `src` to `dst`. The source and destination may overlap."],["copy_nonoverlapping","Copies `count * size_of::<T>()` bytes from `src` to `dst`. The source and destination must not overlap."],["drop_in_place","Executes the destructor (if any) of the pointed-to value."],["eq","Compares raw pointers for equality."],["from_exposed_addr","Convert an address back to a pointer, picking up a previously ‘exposed’ provenance."],["from_exposed_addr_mut","Convert an address back to a mutable pointer, picking up a previously ‘exposed’ provenance."],["from_raw_parts","Forms a (possibly-wide) raw pointer from a data address and metadata."],["from_raw_parts_mut","Performs the same functionality as [`from_raw_parts`], except that a raw `*mut` pointer is returned, as opposed to a raw `*const` pointer."],["hash","Hash a raw pointer."],["invalid","Creates an invalid pointer with the given address."],["invalid_mut","Creates an invalid mutable pointer with the given address."],["metadata","Extract the metadata component of a pointer."],["null","Creates a null raw pointer."],["null_mut","Creates a null mutable raw pointer."],["read","Reads the value from `src` without moving it. This leaves the memory in `src` unchanged."],["read_unaligned","Reads the value from `src` without moving it. This leaves the memory in `src` unchanged."],["read_volatile","Performs a volatile read of the value from `src` without moving it. This leaves the memory in `src` unchanged."],["replace","Moves `src` into the pointed `dst`, returning the previous `dst` value."],["slice_from_raw_parts","Forms a raw slice from a pointer and a length."],["slice_from_raw_parts_mut","Performs the same functionality as [`slice_from_raw_parts`], except that a raw mutable slice is returned, as opposed to a raw immutable slice."],["swap","Swaps the values at two mutable locations of the same type, without deinitializing either."],["swap_nonoverlapping","Swaps `count * size_of::<T>()` bytes between the two regions of memory beginning at `x` and `y`. The two regions must not overlap."],["write","Overwrites a memory location with the given value without reading or dropping the old value."],["write_bytes","Sets `count * size_of::<T>()` bytes of memory starting at `dst` to `val`."],["write_unaligned","Overwrites a memory location with the given value without reading or dropping the old value."],["write_volatile","Performs a volatile write of a memory location with the given value without reading or dropping the old value."]],"macro":[["addr_of","Create a `const` raw pointer to a place, without creating an intermediate reference."],["addr_of_mut","Create a `mut` raw pointer to a place, without creating an intermediate reference."]],"struct":[["Alignment","A type storing a `usize` which is a power of two, and thus represents a possible alignment in the rust abstract machine."],["DynMetadata","The metadata for a `Dyn = dyn SomeTrait` trait object type."],["NonNull","`*mut T` but non-zero and covariant."]],"trait":[["Pointee","Provides the pointer metadata type of any pointed-to type."]],"traitalias":[["Thin","Pointers to types implementing this trait alias are “thin”."]]};