// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

/* Just the example for me to look at
test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
  });
*/


// Phone number expect true Test 1
test('Tests a valid phone number: 999-888-7777', () => {
    //get the first function in the functions array and plug in the number
    const validNumber = functions.isPhoneNumber('999-888-7777');
    expect(validNumber).toBe(true);
});

// Phone number expect true Test 2
test('Tests a valid phone number: 111-222-3333', () => {
    //get the first function in the functions array and plug in the number
    const validNumber = functions.isPhoneNumber('111-222-3333');
    expect(validNumber).toBe(true);
});

//Phone number expect false  test 1
test('Tests an invalid phone number: 123', () => {
    //get the first function in the functions array and plug in the number
    const validNumber = functions.isPhoneNumber('123');
    expect(validNumber).toBe(false);
});

//Phone number expect false test 2
test('Tests an invalid phone number: 444 444 5555', () => {
    //get the first function in the functions array and plug in the number
    const validNumber = functions.isPhoneNumber('444 444 5555');
    expect(validNumber).toBe(false);
});

//Email test expect true test 1
test('Tests a valid email: mark@ucsd.edu', () => {
    //get the first function in the functions array and plug in the number
    const validNumber = functions.isEmail('mark@uscd.edu');
    expect(validNumber).toBe(true);
});

//Email  test expect true test 2
test('Tests a valid email: sarah@gmail.com', () => {
    //get the first function in the functions array and plug in the number
    const validNumber = functions.isEmail('sarah@gmail.com');
    expect(validNumber).toBe(true);
});

//Email test expect false test 1
test('Tests an invalid email: mark@ucsd', () => {
    //get the first function in the functions array and plug in the number
    const validNumber = functions.isEmail('mark@uscd');
    expect(validNumber).toBe(false);
});

//Email test expect false test 2
test('Tests an invalid email: sarah.gmail.com', () => {
    //get the first function in the functions array and plug in the number
    const validNumber = functions.isEmail('sarah.gmail.com');
    expect(validNumber).toBe(false);
});

 //Password test expect true test 1
test('Tests a valid password: UCSD1', () => {
    //get the first function in the functions array and plug in the number
    const validNumber = functions.isStrongPassword('UCSD1');
    expect(validNumber).toBe(true);
});

//Password test expect true test 2
test('Tests a valid password: Unit_Test2', () => {
    //get the first function in the functions array and plug in the number
    const validNumber = functions.isStrongPassword('Unit_Test2');
    expect(validNumber).toBe(true);
});

//Password test expect false test 1
test('Tests an invalid password: 123', () => {
    //get the first function in the functions array and plug in the number
    const validNumber = functions.isStrongPassword('123');
    expect(validNumber).toBe(false);
});

//Email test expect false test 2
test('Tests an invalid password: ThisPasswordIsReallyFreakingLong', () => {
    //get the first function in the functions array and plug in the number
    const validNumber = functions.isStrongPassword('ThisPasswordIsReallyFreakingLong');
    expect(validNumber).toBe(false);
});

//Date test expect true test 1
test('Tests a valid date: 03/03/2001', () => {
    //get the first function in the functions array and plug in the number
    const validNumber = functions.isDate('03/03/2001');
    expect(validNumber).toBe(true);
});

//Date test expect true test 2
test('Tests a valid date: 11/11/2021', () => {
    //get the first function in the functions array and plug in the number
    const validNumber = functions.isDate('11/11/2001');
    expect(validNumber).toBe(true);
});

//Date test expect false test 1
test('Tests an invalid date: 1101/11/2021', () => {
    //get the first function in the functions array and plug in the number
    const validNumber = functions.isDate('1101/11/2001');
    expect(validNumber).toBe(false);
});

//Date test expect false test 2
test('Tests an invalid date: 123', () => {
    //get the first function in the functions array and plug in the number
    const validNumber = functions.isDate('123');
    expect(validNumber).toBe(false);
});


//Hex color test expect true test 1
test('Tests a valid hexColor: #800080', () => {
    //get the first function in the functions array and plug in the number
    const validNumber = functions.isHexColor('#800080');
    expect(validNumber).toBe(true);
});

//Hex color test expect true test 2
test('Tests a valid hexColor: #99aadd', () => {
    //get the first function in the functions array and plug in the number
    const validNumber = functions.isHexColor('#99aadd');
    expect(validNumber).toBe(true);
});

//Hex color test expect false test 1
test('Tests an invalid hexColor: 12', () => {
    //get the first function in the functions array and plug in the number
    const validNumber = functions.isHexColor('12');
    expect(validNumber).toBe(false);
});

//Hex color test expect false test 2
test('Tests an invalid hexColor: #0', () => {
    //get the first function in the functions array and plug in the number
    const validNumber = functions.isHexColor('#0');
    expect(validNumber).toBe(false);
});









