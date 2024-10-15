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
}

// function with reserved argument name and variadic type
func Func5(catch string, optional ...string) {
}

// function with ommited argument names
func Func6(string, int, ...bool) {
}

// function with named return values
func Func7() (b int, c string) {
	return
}

// function with shortened return values
func Func8() (b, c string) {
	return
}

// function with named and shortened return values
func Func9() (a int, b, c string) {
	return
}
