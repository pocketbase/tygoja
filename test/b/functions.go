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
