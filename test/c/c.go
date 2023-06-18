package c

import "time"

type Handler func() string

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
}

func (e *Example1) DemoEx1() string {
	return ""
}

func (e *Example2) DemoEx2() time.Time {
	return time.Time{}
}
