package c

import "time"

// func type comment
type Handler func() string // after

type Raw []byte

type Example1 struct {
	Name string
}

// Example:
//
//	Some
//	code
//	sample
type Example2 struct {
	Title string
	Json  Raw
	Bytes []byte // should be union
}

func (e *Example1) DemoEx1() string {
	return ""
}

func (e *Example2) DemoEx2() time.Time {
	return time.Time{}
}

// Pointer as argument vs return type
func (e *Example2) DemoEx3(arg *Example1) (*Example1, error) {
	return nil, nil
}

// ommited types
func (e *Example2) DemoEx4(n1, n2, n3 string) {
}

// ommited names
func (e *Example2) DemoEx5(string, int) {
}

// named return values
func (e *Example2) DemoEx6() (b int, c string) {
	return
}

// shortened return values
func (e *Example2) DemoEx7() (b, c string) {
	return
}

// named and shortened return values
func (e *Example2) DemoEx8() (a int, b, c string) {
	return
}
