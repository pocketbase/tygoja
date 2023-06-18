package a

import "time"

type Empty interface{}

// unexported interface
type interfaceA[T any] interface {
	// some comment
	unexportedFunc()

	// some comment above the function
	Method0()

	Method1() string // inline comment

	// multi
	// line
	// comment
	Method2(argA, argB string) (T, int)

	Method3(argA int, argB ...string) (T, []string, error)
}

// multi
// line
// comment
type InterfaceB interface {
	Empty
	interfaceA[int]

	// "replace" Method0 from interfaceA
	Method0()

	CustomMethod() time.Time
}
