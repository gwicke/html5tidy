// src/lib.rs
#![crate_type = "dylib"]

extern crate libc;
extern crate tendril;
extern crate html5ever;

use tendril::{StrTendril};
use libc::c_char;
use std::ffi::CStr;
use std::ffi::CString;

use html5ever::driver::ParseOpts;
use html5ever::tree_builder::TreeBuilderOpts;
use html5ever::{parse, one_input, serialize};
use html5ever::rcdom::RcDom;

#[no_mangle]
pub extern "C" fn html5tidy(input_ptr:  *const c_char) -> CString {
    let input_buf = unsafe { CStr::from_ptr(input_ptr).to_bytes() };
    let input = StrTendril::try_from_byte_slice(input_buf).unwrap();
    let dom: RcDom = parse(one_input(input), ParseOpts {
        tree_builder: TreeBuilderOpts {
            ..Default::default()
        },
        ..Default::default()
    });
    let mut out = Vec::new();
    serialize(&mut out, &dom.document, Default::default()).unwrap();
    CString::new(out).unwrap()
}
