import handleProfileSignup from './6-final-user';

test("handleProfileSignup returns the right array", async () => {
    const queue = await handleProfileSignup('John', 'Doe', 'Gerald.jpg');
    expect(queue).toEqual([
      {
        status: 'fulfilled',
        value: { firstName: 'John', lastName: 'Doe' }
      },
      { status: 'rejected', value: 'Error: Gerald.jpg cannot be processed' }
    ]);
});
