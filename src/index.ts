// Basic Types
let id: number = 5
let company: string = 'Traversy Media'
let isPublished: boolean = true
let x: any = 'Hello'
x = true

let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, 'Hello']

// Tuple
let person: [number, string, boolean] = [1, 'hello', false]
// Tuple Array
let employee: [number, string][]
employee = [
  [1, 'Brad'],
  [2, 'John'],
  [3, 'Jill'],
]

// Union
let pid: string | number = '22'

// Enum - It defines set of named constants (number | string) - Default: number
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

// Objects
type User = {
  id: number
  name: string
}

const user: User = {
  id: 1,
  name: 'John',
}

// Type can be use with premitives
type Point = number | string
const p1: Point = 1

// Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

// Functions
function addNum(x: number, y: number): number {
  return x + y
}

// Void
function log(message: string | number): void {
  console.log(message)
}

// Interfaces
interface UserInterface {
  readonly id: number // readonly
  name: string
  age?: number // Optional
}

const user1: UserInterface = {
  id: 1,
  name: 'John',
}

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y

// Classes
interface PersonInterface {
  id: number
  name: string
  register(): string
}

class Person implements PersonInterface {
  id: number // public, private, protected
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register() {
    return `${this.name} is now registered`
  }
}

const brad = new Person(1, 'Brad')
const mike = new Person(2, 'Mike')

class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name) // Initialize parent class instance vars & const
    this.position = position
  }
}

const emp = new Employee(3, 'Shawn', 'Developer')

// Generics - Use to build reuseable components and use placeholders
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['brad', 'john', 'jill'])

strArray.push('hello')
