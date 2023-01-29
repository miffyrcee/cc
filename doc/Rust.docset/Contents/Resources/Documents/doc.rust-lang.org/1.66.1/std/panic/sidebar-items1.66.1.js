window.SIDEBAR_ITEMS = {"enum":[["BacktraceStyle","The configuration for whether and how the default panic hook will capture and display the backtrace."]],"fn":[["always_abort","Make all future panics abort directly without running the panic hook or unwinding."],["catch_unwind","Invokes a closure, capturing the cause of an unwinding panic if one occurs."],["get_backtrace_style","Checks whether the standard library’s panic hook will capture and print a backtrace."],["panic_any","Panic the current thread with the given message as the panic payload."],["resume_unwind","Triggers a panic without invoking the panic hook."],["set_backtrace_style","Configure whether the default panic hook will capture and display a backtrace."],["set_hook","Registers a custom panic hook, replacing any that was previously registered."],["take_hook","Unregisters the current panic hook, returning it."],["update_hook","Atomic combination of `take_hook` and `set_hook`. Use this to replace the panic handler with a new panic handler that does something and then executes the old handler."]],"struct":[["AssertUnwindSafe","A simple wrapper around a type to assert that it is unwind safe."],["Location","A struct containing information about the location of a panic."],["PanicInfo","A struct providing information about a panic."]],"trait":[["RefUnwindSafe","A marker trait representing types where a shared reference is considered unwind safe."],["UnwindSafe","A marker trait which represents “panic safe” types in Rust."]]};