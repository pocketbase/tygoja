// package a docs
// lorem ipsum dolor...
package a

import "time"

// -------------------------------------------------------------------
// variables (note: currently are ignored)
// -------------------------------------------------------------------

var unexportedVar int = 123

// comment
var VarA = 123 // after

var VarB any = "test"

// external package type
var VarC time.Time = time.Now()

// chan
var VarD = make(chan int)

// composite
var VarE = map[string]func(){"test": func() {}}

// -------------------------------------------------------------------
// constants
// -------------------------------------------------------------------

const unexportedConst = "123"

// comment
const ConstA string = "test" // after

// multi
// line
// comment
const ConstB = 123

// some generic group comment
const (
	ConstC0 = iota
	ConstC1 // after
	ConstC2
)

// -------------------------------------------------------------------
// type alias with methods
// -------------------------------------------------------------------

// type comment
type SliceAlias[T any] []T // after

// func comment
func (s SliceAlias[T]) funcA() {
}

// multi
// line
// comment
func (s SliceAlias[T]) funcB(argA, argB int) {
}

func (s SliceAlias[T]) funcC(argA int, argB ...string) (a T, b int, c error) {
	return
}

// -------------------------------------------------------------------
// function type
// -------------------------------------------------------------------

// multi
// line
// comment
type Handler[T comparable] func() (T, int) // after
