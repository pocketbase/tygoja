// package b
package b

func func0() {}

// single comment
func Func1() {}

// multi
// line
// comment
func Func2[T any](arg1 int) (a T, b error) {
	return
}

// function that returns a function
func Func3(arg1 int) (a func() int) {
	return a
}

// function with ommited argument types
func Func4(arg0 string, arg1, arg2 int) {
	return
}

// function with reserved argument name and variadic type
func Func5(catch string, optional ...string) {
	return
}

// function with ommited argument names
func Func6(string, int, ...bool) {
	return
}
