## Airport Challenge ##

Recreating the airport challenge in JavaScript which I originally wrote in Ruby. This project has allowed me to practise JavaScript syntax and testing using Jasmine.

### User Stories Implemented ###
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct a plane to land at an airport

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```

### Extension ###
- Currently landing and taking-off has no effect on the airport hanger: The plane is not pushed to the hanger array. Once this is implemented then the edge case of not allowing a plane to takeoff from an airport it's not current at could be implemented
