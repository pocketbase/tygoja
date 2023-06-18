package a

type unexported struct {
	field0 string
	Field1 string
}

// structA comment
type structA struct {
	Field1 string // after

	// multi
	// line
	// comment
	Field2 string
}

func (s structA) method0() {}

// method comment
func (s structA) Method1(arg1 int) {}

func (s *structA) Method2(arg1 int, arg2 ...string) {} // after

// structB comment
type StructB[T any] struct {
	*unexported
	structA

	Field3 T
}

func (s *StructB[T]) Method3(arg1 int) (a int, b string, c error) {
	return
}
