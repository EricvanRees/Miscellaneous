# OOP in Python for beginners

[Course link](https://www.youtube.com/watch?v=iLRZi0Gu8Go) 

# OOP can seem daunting...
* Abstract classes
* Polymorphism
* Encapsulation
* Abstraction
* Instance attributes and methods vs Static attributes and methods
* Getters and Setters vs Properties
* And the list goes on...

# Prerequisites
You should now the basics of:
* Variables
* Functions
* If statements
* For loops

# What will you learn
* Creating classes and objects
* Attributes and methods
* Getter and Setter methods
* Properties
* Static attributes and methods
* Public protected and private access modifiers
* Abstract classes
* Encapsulation
* Abstraction
* Inheritance
* Polymorphism

# SETUP

VS Code Python extensions
* Black Formatter
* Pylance
* Python Debugger
* Python

# Code examples
[Github link](**https://github.com/DoableDanny/oop-in-python-course**)

# Classes, objects, attributes
Classes are blueprints for objects. They describe what an object should look like. You can create your own classes, the objects created from these classes are called class instances. Attributes are variables that store information about objects.

Example of combining different objects:

  class Dog:
    def __init__(self, name, breed):
      self.name = name
      self.breed = breed

    def bark(self):
      print("Whoof whoof)

  class Owner:
    def __init__(self, name, address, contact_number):
      self.name = name
      self.address = address
      self.contact_number = contact_number

  owner1 = Owner("Danny", "122 Springfield Drive", "999-122-122")
  dog1 = Dog("Bruce", "Scottish Terrier", owner1)
  dog1.bark() # access method on object
  // you can now access owner properties inside dog objects
  print(dog1.owner.name)

# More on the "self" keyword
"Self" gives access to the current object's data, such as in the F-string below:

  Example:

  class Person:
    def __init__(self, name, age):
      self.name = name
      self.age = age

    def greet(self):
      print("f"Hello, my name is {self.name} and I am {self.age} years old.")


  person1 = Person("Alice", 30)
  person1.greet()

  person2 = Person("Bob", 42)
  person2.greet()

# Different ways of accessing and modifying data in objects

There are two ways of getting and setting data:
1) Using getters and setters (Java-style)
2) Using properties

**Acessing data**

  class User:
    def __init__(self, username, email, password):
      self.username = username
      self.email = email
      self.password = password

    def say_hi_to_user(self, user):
      print(f"Sending message to {user.username}: Hi {user.username}, it's {self.username}"
      )


  user1 = User("dantheman", "dan@gmail.com", "123")
  user2 = User("batman", "bat@outlook.com", "abc")

  // user1 greets user2
  user1.say_hi_to_user(user2)
  // logs "Sending message to batman: Hi batman, it's dantheman"

**Modifying data in objects**

The first way of making data private is by prefixing it with an underscore. This makes a data attribute PROTECTED. It means you shouldn't read it outside of the class (or any of its subclasses).

user1 = User("dantheman", "dan@gmail.com", "123")

// change email
user1.email = "danny@gmail.com"

// make a class field protected by prefixing it with an underscore:
// this example uses a getter to access private class fields. This allows you to provide class methods to modify it instead of doing this outside of the class (the get_email method demonstrates this) 
// you should not access this field outside of a class, although you CAN (you can also change it to something else and bypass the method)

class User:
  def __init__(self, username, email, password):
    self.username = username
    self._email = email
    self.password = password

  def get_email(self):
    return self._email.lower().strip()

user1 = User("dantheman", "dan@gmail.com", "123")

// Python's "Consenting Adults" Philosophy states that its creators assumet that users will act responsibly and won't misuse or access protected class members unless it's absolutely necessary.

// Using a double underscore makes an attribute PRIVATE. Now, Python performs "name mangling" and changes the name of the attribute, and throws an error when it's used outside of the class:

  class User:
  def __init__(self, username, email, password):
    self.username = username
    self.__email = email
    self.password = password

  def get_email(self):
    return self.__email.lower().strip()
  
// Both private and protected attributes can be accessed within the class. Using a protected variable is enough to signal use within the class, offer better readibility and flexibility, making them the preferred choice in Python.

// Getters and setters allow you to read and change an attribute outside of the class

  from datetime import datetime

  class User:
    def __init__(self, username, email, password):
      self.username = username
      self._email = email
      self.password = password
    
    # create getter 
    def get_email(self):
    print(f"Email accessed at {datetime.now()}")
      return self._email

    # create setter
    def set_email(self, new_email):
      self._email = new_email

  #access the attribute through the getter instead of accessing it directly:
  user1 = User("dantheman", "dan@gmail.com", "123")
  print(user1.get_email)

  #set new email
  user1.set_email("danny@outlook.com")


