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
	// with union type
	Field2 []byte
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

// StructB.Method3 comment
func (s *StructB[T]) Method3(arg1 int) (a int, b string, c error) {
	return
}

// structC with multiple mixed generic types
type StructC[A string, B, C any] struct {
	Field4 A
	Field5 B
	Field6 C
}

// StructC.Method4 comment
func (s *StructC[A, B, C]) Method4(arg1 A) (a B, b C, c error) {
	return
}
