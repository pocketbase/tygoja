// GENERATED CODE - DO NOT MODIFY BY HAND
declare var $app: c.Handler;type _TygojaDict = { [key:string | number | symbol]: any; }
type _TygojaAny = any

/**
 * package a docs
 * lorem ipsum dolor...
 */
namespace a {
  interface Empty {
    [key:string]: any;
  }
  /**
   * unexported interface
   */
  interface interfaceA<T> {
    [key:string]: any;
    /**
     * some comment
     */
    /**
     * some comment above the function
     */
    Method0(): void
    Method1(): string // inline comment
    /**
     * multi
     * line
     * comment
     */
    Method2(argA: string): [T, number]
    Method3(argA: number, ...argB: string[]): [T, Array<string>]
  }
  /**
   * multi
   * line
   * comment
   */
  interface InterfaceB {
    [key:string]: any;
    /**
     * "replace" Method0 from interfaceA
     */
    Method0(): void
    CustomMethod(): time.Time
  }
  interface unexported {
    Field1: string
  }
  /**
   * structA comment
   */
  interface structA {
    Field1: string // after
    /**
     * multi
     * line
     * comment
     * with union type
     */
    Field2: string|Array<number>
  }
  interface structA {
    /**
     * method comment
     */
    Method1(arg1: number): void
  }
  interface structA {
    Method2(arg1: number, ...arg2: string[]): void
  }
  /**
   * structB comment
   */
  type _subhgpbH = unexported&structA
  interface StructB<T> extends _subhgpbH {
    Field3: T
  }
  interface StructB<T> {
    Method3(arg1: number): [number, string]
  }
  /**
   * type comment
   */
  interface SliceAlias<T> extends Array<T>{} // after
  /**
   * multi
   * line
   * comment
   */
  interface Handler<T> {(): [T, number]  } // after
}

/**
 * package b
 */
namespace b {
  interface Func1 {
    /**
     * single comment
     */
    (): void
  }
  interface Func2<T> {
    /**
     * multi
     * line
     * comment
     */
    (arg1: number): T
  }
  interface Func3 {
    /**
     * function that returns a function
     */
    (arg1: number): () => number
  }
}

namespace c {
  /**
   * func type comment
   */
  interface Handler {(): string  } // after
  /**
   * Example:
   * 
   * ```
   * 	Some
   * 	code
   * 	sample
   * ```
   */
  interface Example2 {
    Title: string
    Json: Raw
    Bytes: string|Array<number> // should be union
  }
  interface Example2 {
    DemoEx2(): time.Time
  }
}

/**
 * Package time provides functionality for measuring and displaying time.
 * 
 * The calendrical calculations always assume a Gregorian calendar, with
 * no leap seconds.
 * 
 * # Monotonic Clocks
 * 
 * Operating systems provide both a “wall clock,” which is subject to
 * changes for clock synchronization, and a “monotonic clock,” which is
 * not. The general rule is that the wall clock is for telling time and
 * the monotonic clock is for measuring time. Rather than split the API,
 * in this package the Time returned by time.Now contains both a wall
 * clock reading and a monotonic clock reading; later time-telling
 * operations use the wall clock reading, but later time-measuring
 * operations, specifically comparisons and subtractions, use the
 * monotonic clock reading.
 * 
 * For example, this code always computes a positive elapsed time of
 * approximately 20 milliseconds, even if the wall clock is changed during
 * the operation being timed:
 * 
 * ```
 * 	start := time.Now()
 * 	... operation that takes 20 milliseconds ...
 * 	t := time.Now()
 * 	elapsed := t.Sub(start)
 * ```
 * 
 * Other idioms, such as time.Since(start), time.Until(deadline), and
 * time.Now().Before(deadline), are similarly robust against wall clock
 * resets.
 * 
 * The rest of this section gives the precise details of how operations
 * use monotonic clocks, but understanding those details is not required
 * to use this package.
 * 
 * The Time returned by time.Now contains a monotonic clock reading.
 * If Time t has a monotonic clock reading, t.Add adds the same duration to
 * both the wall clock and monotonic clock readings to compute the result.
 * Because t.AddDate(y, m, d), t.Round(d), and t.Truncate(d) are wall time
 * computations, they always strip any monotonic clock reading from their results.
 * Because t.In, t.Local, and t.UTC are used for their effect on the interpretation
 * of the wall time, they also strip any monotonic clock reading from their results.
 * The canonical way to strip a monotonic clock reading is to use t = t.Round(0).
 * 
 * If Times t and u both contain monotonic clock readings, the operations
 * t.After(u), t.Before(u), t.Equal(u), and t.Sub(u) are carried out
 * using the monotonic clock readings alone, ignoring the wall clock
 * readings. If either t or u contains no monotonic clock reading, these
 * operations fall back to using the wall clock readings.
 * 
 * On some systems the monotonic clock will stop if the computer goes to sleep.
 * On such a system, t.Sub(u) may not accurately reflect the actual
 * time that passed between t and u.
 * 
 * Because the monotonic clock reading has no meaning outside
 * the current process, the serialized forms generated by t.GobEncode,
 * t.MarshalBinary, t.MarshalJSON, and t.MarshalText omit the monotonic
 * clock reading, and t.Format provides no format for it. Similarly, the
 * constructors time.Date, time.Parse, time.ParseInLocation, and time.Unix,
 * as well as the unmarshalers t.GobDecode, t.UnmarshalBinary.
 * t.UnmarshalJSON, and t.UnmarshalText always create times with
 * no monotonic clock reading.
 * 
 * The monotonic clock reading exists only in Time values. It is not
 * a part of Duration values or the Unix times returned by t.Unix and
 * friends.
 * 
 * Note that the Go == operator compares not just the time instant but
 * also the Location and the monotonic clock reading. See the
 * documentation for the Time type for a discussion of equality
 * testing for Time values.
 * 
 * For debugging, the result of t.String does include the monotonic
 * clock reading if present. If t != u because of different monotonic clock readings,
 * that difference will be visible when printing t.String() and u.String().
 */
namespace time {
  interface Time {
    /**
     * String returns the time formatted using the format string
     * 
     * ```
     * 	"2006-01-02 15:04:05.999999999 -0700 MST"
     * ```
     * 
     * If the time has a monotonic clock reading, the returned string
     * includes a final field "m=±<value>", where value is the monotonic
     * clock reading formatted as a decimal number of seconds.
     * 
     * The returned string is meant for debugging; for a stable serialized
     * representation, use t.MarshalText, t.MarshalBinary, or t.Format
     * with an explicit format string.
     */
    String(): string
  }
  interface Time {
    /**
     * GoString implements fmt.GoStringer and formats t to be printed in Go source
     * code.
     */
    GoString(): string
  }
  interface Time {
    /**
     * Format returns a textual representation of the time value formatted according
     * to the layout defined by the argument. See the documentation for the
     * constant called Layout to see how to represent the layout format.
     * 
     * The executable example for Time.Format demonstrates the working
     * of the layout string in detail and is a good reference.
     */
    Format(layout: string): string
  }
  interface Time {
    /**
     * AppendFormat is like Format but appends the textual
     * representation to b and returns the extended buffer.
     */
    AppendFormat(b: string|Array<number>, layout: string): string|Array<number>
  }
  /**
   * A Time represents an instant in time with nanosecond precision.
   * 
   * Programs using times should typically store and pass them as values,
   * not pointers. That is, time variables and struct fields should be of
   * type time.Time, not *time.Time.
   * 
   * A Time value can be used by multiple goroutines simultaneously except
   * that the methods GobDecode, UnmarshalBinary, UnmarshalJSON and
   * UnmarshalText are not concurrency-safe.
   * 
   * Time instants can be compared using the Before, After, and Equal methods.
   * The Sub method subtracts two instants, producing a Duration.
   * The Add method adds a Time and a Duration, producing a Time.
   * 
   * The zero value of type Time is January 1, year 1, 00:00:00.000000000 UTC.
   * As this time is unlikely to come up in practice, the IsZero method gives
   * a simple way of detecting a time that has not been initialized explicitly.
   * 
   * Each Time has associated with it a Location, consulted when computing the
   * presentation form of the time, such as in the Format, Hour, and Year methods.
   * The methods Local, UTC, and In return a Time with a specific location.
   * Changing the location in this way changes only the presentation; it does not
   * change the instant in time being denoted and therefore does not affect the
   * computations described in earlier paragraphs.
   * 
   * Representations of a Time value saved by the GobEncode, MarshalBinary,
   * MarshalJSON, and MarshalText methods store the Time.Location's offset, but not
   * the location name. They therefore lose information about Daylight Saving Time.
   * 
   * In addition to the required “wall clock” reading, a Time may contain an optional
   * reading of the current process's monotonic clock, to provide additional precision
   * for comparison or subtraction.
   * See the “Monotonic Clocks” section in the package documentation for details.
   * 
   * Note that the Go == operator compares not just the time instant but also the
   * Location and the monotonic clock reading. Therefore, Time values should not
   * be used as map or database keys without first guaranteeing that the
   * identical Location has been set for all values, which can be achieved
   * through use of the UTC or Local method, and that the monotonic clock reading
   * has been stripped by setting t = t.Round(0). In general, prefer t.Equal(u)
   * to t == u, since t.Equal uses the most accurate comparison available and
   * correctly handles the case when only one of its arguments has a monotonic
   * clock reading.
   */
  interface Time {
  }
  interface Time {
    /**
     * After reports whether the time instant t is after u.
     */
    After(u: Time): boolean
  }
  interface Time {
    /**
     * Before reports whether the time instant t is before u.
     */
    Before(u: Time): boolean
  }
  interface Time {
    /**
     * Equal reports whether t and u represent the same time instant.
     * Two times can be equal even if they are in different locations.
     * For example, 6:00 +0200 and 4:00 UTC are Equal.
     * See the documentation on the Time type for the pitfalls of using == with
     * Time values; most code should use Equal instead.
     */
    Equal(u: Time): boolean
  }
  interface Time {
    /**
     * IsZero reports whether t represents the zero time instant,
     * January 1, year 1, 00:00:00 UTC.
     */
    IsZero(): boolean
  }
  interface Time {
    /**
     * Date returns the year, month, and day in which t occurs.
     */
    Date(): [number, Month, number]
  }
  interface Time {
    /**
     * Year returns the year in which t occurs.
     */
    Year(): number
  }
  interface Time {
    /**
     * Month returns the month of the year specified by t.
     */
    Month(): Month
  }
  interface Time {
    /**
     * Day returns the day of the month specified by t.
     */
    Day(): number
  }
  interface Time {
    /**
     * Weekday returns the day of the week specified by t.
     */
    Weekday(): Weekday
  }
  interface Time {
    /**
     * ISOWeek returns the ISO 8601 year and week number in which t occurs.
     * Week ranges from 1 to 53. Jan 01 to Jan 03 of year n might belong to
     * week 52 or 53 of year n-1, and Dec 29 to Dec 31 might belong to week 1
     * of year n+1.
     */
    ISOWeek(): number
  }
  interface Time {
    /**
     * Clock returns the hour, minute, and second within the day specified by t.
     */
    Clock(): number
  }
  interface Time {
    /**
     * Hour returns the hour within the day specified by t, in the range [0, 23].
     */
    Hour(): number
  }
  interface Time {
    /**
     * Minute returns the minute offset within the hour specified by t, in the range [0, 59].
     */
    Minute(): number
  }
  interface Time {
    /**
     * Second returns the second offset within the minute specified by t, in the range [0, 59].
     */
    Second(): number
  }
  interface Time {
    /**
     * Nanosecond returns the nanosecond offset within the second specified by t,
     * in the range [0, 999999999].
     */
    Nanosecond(): number
  }
  interface Time {
    /**
     * YearDay returns the day of the year specified by t, in the range [1,365] for non-leap years,
     * and [1,366] in leap years.
     */
    YearDay(): number
  }
  interface Time {
    /**
     * Add returns the time t+d.
     */
    Add(d: Duration): Time
  }
  interface Time {
    /**
     * Sub returns the duration t-u. If the result exceeds the maximum (or minimum)
     * value that can be stored in a Duration, the maximum (or minimum) duration
     * will be returned.
     * To compute t-d for a duration d, use t.Add(-d).
     */
    Sub(u: Time): Duration
  }
  interface Time {
    /**
     * AddDate returns the time corresponding to adding the
     * given number of years, months, and days to t.
     * For example, AddDate(-1, 2, 3) applied to January 1, 2011
     * returns March 4, 2010.
     * 
     * AddDate normalizes its result in the same way that Date does,
     * so, for example, adding one month to October 31 yields
     * December 1, the normalized form for November 31.
     */
    AddDate(years: number, months: number, days: number): Time
  }
  interface Time {
    /**
     * UTC returns t with the location set to UTC.
     */
    UTC(): Time
  }
  interface Time {
    /**
     * Local returns t with the location set to local time.
     */
    Local(): Time
  }
  interface Time {
    /**
     * In returns a copy of t representing the same time instant, but
     * with the copy's location information set to loc for display
     * purposes.
     * 
     * In panics if loc is nil.
     */
    In(loc: Location): Time
  }
  interface Time {
    /**
     * Location returns the time zone information associated with t.
     */
    Location(): (Location | undefined)
  }
  interface Time {
    /**
     * Zone computes the time zone in effect at time t, returning the abbreviated
     * name of the zone (such as "CET") and its offset in seconds east of UTC.
     */
    Zone(): [string, number]
  }
  interface Time {
    /**
     * ZoneBounds returns the bounds of the time zone in effect at time t.
     * The zone begins at start and the next zone begins at end.
     * If the zone begins at the beginning of time, start will be returned as a zero Time.
     * If the zone goes on forever, end will be returned as a zero Time.
     * The Location of the returned times will be the same as t.
     */
    ZoneBounds(): Time
  }
  interface Time {
    /**
     * Unix returns t as a Unix time, the number of seconds elapsed
     * since January 1, 1970 UTC. The result does not depend on the
     * location associated with t.
     * Unix-like operating systems often record time as a 32-bit
     * count of seconds, but since the method here returns a 64-bit
     * value it is valid for billions of years into the past or future.
     */
    Unix(): number
  }
  interface Time {
    /**
     * UnixMilli returns t as a Unix time, the number of milliseconds elapsed since
     * January 1, 1970 UTC. The result is undefined if the Unix time in
     * milliseconds cannot be represented by an int64 (a date more than 292 million
     * years before or after 1970). The result does not depend on the
     * location associated with t.
     */
    UnixMilli(): number
  }
  interface Time {
    /**
     * UnixMicro returns t as a Unix time, the number of microseconds elapsed since
     * January 1, 1970 UTC. The result is undefined if the Unix time in
     * microseconds cannot be represented by an int64 (a date before year -290307 or
     * after year 294246). The result does not depend on the location associated
     * with t.
     */
    UnixMicro(): number
  }
  interface Time {
    /**
     * UnixNano returns t as a Unix time, the number of nanoseconds elapsed
     * since January 1, 1970 UTC. The result is undefined if the Unix time
     * in nanoseconds cannot be represented by an int64 (a date before the year
     * 1678 or after 2262). Note that this means the result of calling UnixNano
     * on the zero Time is undefined. The result does not depend on the
     * location associated with t.
     */
    UnixNano(): number
  }
  interface Time {
    /**
     * MarshalBinary implements the encoding.BinaryMarshaler interface.
     */
    MarshalBinary(): string|Array<number>
  }
  interface Time {
    /**
     * UnmarshalBinary implements the encoding.BinaryUnmarshaler interface.
     */
    UnmarshalBinary(data: string|Array<number>): void
  }
  interface Time {
    /**
     * GobEncode implements the gob.GobEncoder interface.
     */
    GobEncode(): string|Array<number>
  }
  interface Time {
    /**
     * GobDecode implements the gob.GobDecoder interface.
     */
    GobDecode(data: string|Array<number>): void
  }
  interface Time {
    /**
     * MarshalJSON implements the json.Marshaler interface.
     * The time is a quoted string in RFC 3339 format, with sub-second precision added if present.
     */
    MarshalJSON(): string|Array<number>
  }
  interface Time {
    /**
     * UnmarshalJSON implements the json.Unmarshaler interface.
     * The time is expected to be a quoted string in RFC 3339 format.
     */
    UnmarshalJSON(data: string|Array<number>): void
  }
  interface Time {
    /**
     * MarshalText implements the encoding.TextMarshaler interface.
     * The time is formatted in RFC 3339 format, with sub-second precision added if present.
     */
    MarshalText(): string|Array<number>
  }
  interface Time {
    /**
     * UnmarshalText implements the encoding.TextUnmarshaler interface.
     * The time is expected to be in RFC 3339 format.
     */
    UnmarshalText(data: string|Array<number>): void
  }
  interface Time {
    /**
     * IsDST reports whether the time in the configured location is in Daylight Savings Time.
     */
    IsDST(): boolean
  }
  interface Time {
    /**
     * Truncate returns the result of rounding t down to a multiple of d (since the zero time).
     * If d <= 0, Truncate returns t stripped of any monotonic clock reading but otherwise unchanged.
     * 
     * Truncate operates on the time as an absolute duration since the
     * zero time; it does not operate on the presentation form of the
     * time. Thus, Truncate(Hour) may return a time with a non-zero
     * minute, depending on the time's Location.
     */
    Truncate(d: Duration): Time
  }
  interface Time {
    /**
     * Round returns the result of rounding t to the nearest multiple of d (since the zero time).
     * The rounding behavior for halfway values is to round up.
     * If d <= 0, Round returns t stripped of any monotonic clock reading but otherwise unchanged.
     * 
     * Round operates on the time as an absolute duration since the
     * zero time; it does not operate on the presentation form of the
     * time. Thus, Round(Hour) may return a time with a non-zero
     * minute, depending on the time's Location.
     */
    Round(d: Duration): Time
  }
}

namespace c {
  interface Raw extends Array<number>{}
}

/**
 * Package time provides functionality for measuring and displaying time.
 * 
 * The calendrical calculations always assume a Gregorian calendar, with
 * no leap seconds.
 * 
 * # Monotonic Clocks
 * 
 * Operating systems provide both a “wall clock,” which is subject to
 * changes for clock synchronization, and a “monotonic clock,” which is
 * not. The general rule is that the wall clock is for telling time and
 * the monotonic clock is for measuring time. Rather than split the API,
 * in this package the Time returned by time.Now contains both a wall
 * clock reading and a monotonic clock reading; later time-telling
 * operations use the wall clock reading, but later time-measuring
 * operations, specifically comparisons and subtractions, use the
 * monotonic clock reading.
 * 
 * For example, this code always computes a positive elapsed time of
 * approximately 20 milliseconds, even if the wall clock is changed during
 * the operation being timed:
 * 
 * ```
 * 	start := time.Now()
 * 	... operation that takes 20 milliseconds ...
 * 	t := time.Now()
 * 	elapsed := t.Sub(start)
 * ```
 * 
 * Other idioms, such as time.Since(start), time.Until(deadline), and
 * time.Now().Before(deadline), are similarly robust against wall clock
 * resets.
 * 
 * The rest of this section gives the precise details of how operations
 * use monotonic clocks, but understanding those details is not required
 * to use this package.
 * 
 * The Time returned by time.Now contains a monotonic clock reading.
 * If Time t has a monotonic clock reading, t.Add adds the same duration to
 * both the wall clock and monotonic clock readings to compute the result.
 * Because t.AddDate(y, m, d), t.Round(d), and t.Truncate(d) are wall time
 * computations, they always strip any monotonic clock reading from their results.
 * Because t.In, t.Local, and t.UTC are used for their effect on the interpretation
 * of the wall time, they also strip any monotonic clock reading from their results.
 * The canonical way to strip a monotonic clock reading is to use t = t.Round(0).
 * 
 * If Times t and u both contain monotonic clock readings, the operations
 * t.After(u), t.Before(u), t.Equal(u), and t.Sub(u) are carried out
 * using the monotonic clock readings alone, ignoring the wall clock
 * readings. If either t or u contains no monotonic clock reading, these
 * operations fall back to using the wall clock readings.
 * 
 * On some systems the monotonic clock will stop if the computer goes to sleep.
 * On such a system, t.Sub(u) may not accurately reflect the actual
 * time that passed between t and u.
 * 
 * Because the monotonic clock reading has no meaning outside
 * the current process, the serialized forms generated by t.GobEncode,
 * t.MarshalBinary, t.MarshalJSON, and t.MarshalText omit the monotonic
 * clock reading, and t.Format provides no format for it. Similarly, the
 * constructors time.Date, time.Parse, time.ParseInLocation, and time.Unix,
 * as well as the unmarshalers t.GobDecode, t.UnmarshalBinary.
 * t.UnmarshalJSON, and t.UnmarshalText always create times with
 * no monotonic clock reading.
 * 
 * The monotonic clock reading exists only in Time values. It is not
 * a part of Duration values or the Unix times returned by t.Unix and
 * friends.
 * 
 * Note that the Go == operator compares not just the time instant but
 * also the Location and the monotonic clock reading. See the
 * documentation for the Time type for a discussion of equality
 * testing for Time values.
 * 
 * For debugging, the result of t.String does include the monotonic
 * clock reading if present. If t != u because of different monotonic clock readings,
 * that difference will be visible when printing t.String() and u.String().
 */
namespace time {
  /**
   * A Month specifies a month of the year (January = 1, ...).
   */
  interface Month extends Number{}
  interface Month {
    /**
     * String returns the English name of the month ("January", "February", ...).
     */
    String(): string
  }
  /**
   * A Weekday specifies a day of the week (Sunday = 0, ...).
   */
  interface Weekday extends Number{}
  interface Weekday {
    /**
     * String returns the English name of the day ("Sunday", "Monday", ...).
     */
    String(): string
  }
  /**
   * A Duration represents the elapsed time between two instants
   * as an int64 nanosecond count. The representation limits the
   * largest representable duration to approximately 290 years.
   */
  interface Duration extends Number{}
  interface Duration {
    /**
     * String returns a string representing the duration in the form "72h3m0.5s".
     * Leading zero units are omitted. As a special case, durations less than one
     * second format use a smaller unit (milli-, micro-, or nanoseconds) to ensure
     * that the leading digit is non-zero. The zero duration formats as 0s.
     */
    String(): string
  }
  interface Duration {
    /**
     * Nanoseconds returns the duration as an integer nanosecond count.
     */
    Nanoseconds(): number
  }
  interface Duration {
    /**
     * Microseconds returns the duration as an integer microsecond count.
     */
    Microseconds(): number
  }
  interface Duration {
    /**
     * Milliseconds returns the duration as an integer millisecond count.
     */
    Milliseconds(): number
  }
  interface Duration {
    /**
     * Seconds returns the duration as a floating point number of seconds.
     */
    Seconds(): number
  }
  interface Duration {
    /**
     * Minutes returns the duration as a floating point number of minutes.
     */
    Minutes(): number
  }
  interface Duration {
    /**
     * Hours returns the duration as a floating point number of hours.
     */
    Hours(): number
  }
  interface Duration {
    /**
     * Truncate returns the result of rounding d toward zero to a multiple of m.
     * If m <= 0, Truncate returns d unchanged.
     */
    Truncate(m: Duration): Duration
  }
  interface Duration {
    /**
     * Round returns the result of rounding d to the nearest multiple of m.
     * The rounding behavior for halfway values is to round away from zero.
     * If the result exceeds the maximum (or minimum)
     * value that can be stored in a Duration,
     * Round returns the maximum (or minimum) duration.
     * If m <= 0, Round returns d unchanged.
     */
    Round(m: Duration): Duration
  }
  interface Duration {
    /**
     * Abs returns the absolute value of d.
     * As a special case, math.MinInt64 is converted to math.MaxInt64.
     */
    Abs(): Duration
  }
  /**
   * A Location maps time instants to the zone in use at that time.
   * Typically, the Location represents the collection of time offsets
   * in use in a geographical area. For many Locations the time offset varies
   * depending on whether daylight savings time is in use at the time instant.
   */
  interface Location {
  }
  interface Location {
    /**
     * String returns a descriptive name for the time zone information,
     * corresponding to the name argument to LoadLocation or FixedZone.
     */
    String(): string
  }
}
