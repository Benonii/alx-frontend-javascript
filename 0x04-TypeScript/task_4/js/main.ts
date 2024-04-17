import Teacher from "./Teacher"
import Cpp from "./Cpp"
import React from "./React"
import Java from "./Java"

namespace Subjects {
  export const cpp: Subjects.Cpp =  new Cpp();
  export const java: Subjects.Java =  new React();
  export const react: Subjects.React = new Java();

  export let cTeacher: Subjects.Teacher = {
	  firstName: "John",
	  lastName: "Doe",
	  experienceTeachingC: 10,
  };
  
  console.log("C++");
  cpp.setTeacher = cTeacher;
  console.log(cpp.getRequirements);
  console.log(cpp.getAvailableTeacher);

  console.log("Java");
  java.setTeacher = cTeacher;
  console.log(java.getRequirements);
  console.log(java.getAvailableTeacher);

  console.log("React");
  react.setTeacher = cTeacher;
  console.log(react.getRequirements);
  console.log(react.getAvailableTeacher);
};
