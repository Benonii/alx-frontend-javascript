namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject.Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp'
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingC) {
        return this.teacher.firstName;
      } else {
        return 'No available teacher';
      }
    }
  }
}
