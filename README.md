# html5tidy
An **experimental** binary node module based on [the Rust html5ever library](https://github.com/servo/html5ever). Cleans up HTML by parsing it to DOM & serializing it back.

Also, task [#1](https://github.com/gwicke/html5tidy/issues/1) is to actually free the returned buffer. 

Initial boilerplate was generated with `yo rust-ffi`, a [yeoman generator for rust/node bindings](https://github.com/oppenlander/generator-rust-ffi).
