
## Simple project to explore Jest test lib.
In this project we create a simple `db` file to simulate store and retrive datas.
<br>
Create module `lib` that will correctly treat communication with `db` file.
<br>
Simulate some simple tests using `jest.fn()` and `jest.spyOn()`.
<br>
Feel free to comment, question and improve this project.


## Difference between Mock jest.fn() and Spy jest.spyOn()

### jest.fn()
* You want to mock a function and really don't care about the original implementation of that function
* Often you just mock the return value
* This is very helpful if you want to remove dependencies to the backend (e.g. when calling backend API) or third party libraries in your tests

* It is also extremly helpful if you want to make real unit tests. You don't care about if certain function that gets called by the unit you test is working properly, because thats not part of it's responsibility.

### jest.spyOn()
* The original implementation of the function is relevant for your test, but:
* You want to add your own implementation just for a specific scenario and then reset it again via mockRestore()
* You just want to see if the function was called

* I think this is especially helpful for integration tests, but not only for them!

_Refferences:_ 

- https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c

- https://stackoverflow.com/questions/57643808/what-is-the-difference-between-jest-fn-and-jest-spyon-methods-in-jest