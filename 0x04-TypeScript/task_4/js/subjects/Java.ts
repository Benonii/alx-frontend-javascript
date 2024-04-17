namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  class Java extends Subjects.Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Java'
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingJava) {
        return this.teacher['firstName'];
      } else {
        return 'No available teacher';
      }
    }
  }
}
