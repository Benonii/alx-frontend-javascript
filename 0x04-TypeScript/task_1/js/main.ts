interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface PrintFunction = (firstName: string, lastName: string) => void;

const printTeacher: PrintFunction = (firstName, lastName) => {
 console.log(`${firstName[0]}.${lastName}`);
};

interface StudentClass {
 workOnHomeWork(): string;
 displayName(): string;
}

interface StundentConstructor {
  firstName: string;
  lastName: string;
}

class StudentClass implements StudentClass {
  firstName: string;
  lastName: string;


  constructor({firstName, lastName}: StudentConstructor) {
    this.firstName = firstName,
    this.lastName = lastName,
  }

  workOnHomeWork(): string {
    return 'Currently working';
  };

  displayName(): string {
    return this.firstName;
  };
};
