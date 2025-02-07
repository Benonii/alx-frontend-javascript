import createEmployeesObject from "./11-createEmployeesObject";
import createReportObject from './12-createReportObject';
import createIteratorObject from './100-createIteratorObject';
import iterateThroughObject from './101-iterateThroughObject';

const engineering = ['John Doe', 'Guillaume Salva'];
const design = ['Kanye East', 'Jay Li'];

test('iterateThroughObject returns the correct string', () => {
    const employees = {
      ...createEmployeesObject('engineering', engineering),
      ...createEmployeesObject('design', design),
    };
  
    const report = createReportObject(employees);
    const reportWithIterator = createIteratorObject(report);
    expect(iterateThroughObject(reportWithIterator)).toEqual('John Doe | Guillaume Salva | Kanye East | Jay Li');
  });
