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

// function with multiple generic types
func Func3[A string, B, C any](arg1 A, arg2 B, arg3 int) (a A, b C) {
	return
}

// function that returns a function
func Func4(arg1 int) (a func() int) {
	return a
}

// function with ommited argument types
func Func5(arg0 string, arg1, arg2 int) {
}

// function with reserved argument name and variadic type
func Func6(catch string, optional ...string) {
}

// function with ommited argument names
func Func7(string, int, ...bool) {
}

// function with named return values
func Func8() (b int, c string) {
	return
}

// function with shortened return values
func Func9() (b, c string) {
	return
}

// function with named and shortened return values
func Func10() (a int, b, c string) {
	return
}
