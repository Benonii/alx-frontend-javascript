namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subjects.Subject {
    getRequirements(): string {
      return "Here is the list of requirements for React'
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingReact) {
        return this.teacher['firstName'];
      } else {
        return 'No available teacher';
      }
    }
  }
}
