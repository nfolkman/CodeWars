/* Description: Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person.
 Note that name will be an array consisting of one or more values that should be joined together with one space between each,
  and the length of the name array in test cases will vary. */


  function sayHello( name, city, state ) {
    name = name.join(' ')
    return `Hello, ${name}! Welcome to ${city}, ${state}!`
    }
    
    /* test cases: 
    sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
    sayHello(['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois')
    sayHello(['Wallace','Russel','Osbourne'],'Albany','New York')   */