//standard deviation function
//1. ⁠Write a pure function that can be used to calculate the standard deviation of a list of data 
//chosen at random and return that value. Reduce and map methods should be used for looping and
//mapping as necessary. A sample singular data would have the structure; { name:"Sample", value: "54" }

function standardDeviation(data) {
  const values = data.map(item => Number(item.value));

  const mean =
    values.reduce((a, b) => a + b, 0) / values.length;

  const variance =
    values.reduce((sum, value) =>
      sum + (value - mean) ** 2, 0) / (values.length - 1);

  return Math.sqrt(variance);
}

const data = [
  { name: "Sample", value: "54" },
  { name: "Sample", value: "70" },
  { name: "Sample", value: "84" }
];

console.log(standardDeviation(data));  

//student profile 
//⁠Using  an abstract representation of users/human beings, build a profile of every student in class 
//having the following characteristics; first name, last name, complexion, phone number, attendance
//(0-10), quizScores for 5 quizzes. quizScores should have a structure of({ quizNumber:1, score: 30 }
//). Quiz scores can be randomly generated. Once this is done, write a pure function that returns an
//analysis of all the students in  class returning the following data in a structured manner,
//average attendance score or the entire class, average quiz score for the entire class, average
//quiz score for each student in order of highest to lowest, student with the highest average score,
//student with the lowest student score.
const students = [
  {
    firstName: "temi",
    lastName: "david",
    complexion: "Dark",
    phoneNumber: "00000000000",
    attendance: 8,
    quizScores: [
      { quizNumber: 1, score: 20 },
      { quizNumber: 2, score: 25 },
      { quizNumber: 3, score: 30 },
      { quizNumber: 4, score: 22 },
      { quizNumber: 5, score: 28 }
    ]
  },

  {
    firstName: "james",
    lastName: "tona",
    complexion: "Fair",
    phoneNumber: "22222222222",
    attendance: 10,
    quizScores: [
      { quizNumber: 1, score: 30 },
      { quizNumber: 2, score: 28 },
      { quizNumber: 3, score: 25 },
      { quizNumber: 4, score: 27 },
      { quizNumber: 5, score: 29 }
    ]
  }
];


function analyzeStudents(students) {
  const averageAttendance =
    students.reduce((sum, student) => sum + student.attendance, 0) /
    students.length;

  const studentScores = students.map(student => {
    const totalScore = student.quizScores.reduce(
      (sum, quiz) => sum + quiz.score,
      0
    );

    return {
      name: student.firstName,
      averageScore: totalScore / student.quizScores.length
    };
  });

  studentScores.sort((a, b) => b.averageScore - a.averageScore);
  const averageQuizScore =
    studentScores.reduce((sum, student) => sum + student.averageScore, 0) /
    studentScores.length;

  return {
    averageAttendance,
    averageQuizScore,
    studentScores,
    highestStudent: studentScores[0],
    lowestStudent: studentScores[studentScores.length - 1]
  };
}

console.log(analyzeStudents(students));


//reverse a value
//3. ⁠Write a pure function that takes in a value and returns the same value in a reverse order. 
// E.g (length would be htgnel)
function reverseWord(word){
  return word.split("").reverse().join("");
}
 
console.log(reverseWord("Dance"));


//palindrome checker
//4. ⁠⁠Write a function that checks if  an input is a palindrome. A palindrome is a word that is the 
// same when spelled backwards and forwards e.g wow, racecar, Level, Stats
function isPalindrome(word) {
  return word === word.split("").reverse().join("");
}
 
console.log(isPalindrome("racecar"));
console.log(isPalindrome("how"));
 
//etranzact tax calculator
//5. ⁠Using eTranzact as a company, create an object with the following properties, totalRevenue,
//  totalExpenses, and a tax component as specified below. eTranzact has a special tax component of
//  1% for revenue between 0-1 million, 10% for revenue above 1 million and less than 5 million, 20% 
// for revenue greater than 5 million. Dynamically calculate their income before tax, income after
//  tax, total taxes paid,  gross margin (profit before tax/ total revenue)%, net margin(profit after
//  tax/total revenue)%. Your code should run the calculation 5 times for each month of the year
//  ensuring every tax component is reached at least once and a loss scenario is handled properly. 
// There is no such thing as a negative gross margin or net margin

function calculate(revenue, expenses) {
  let taxRate = 0;
  if (revenue <= 1000000) {
    taxRate = 0.01;
  } else if (revenue < 5000000) {
    taxRate = 0.10;
  } else {
    taxRate = 0.20;
  }
  
  const incomeBeforeTax = revenue - expenses;
  const totalTaxPaid = incomeBeforeTax > 0 ? incomeBeforeTax * taxRate : 0;
  const incomeAfterTax = incomeBeforeTax - totalTaxPaid;
  const grossMargin = incomeBeforeTax > 0 ? (incomeBeforeTax / revenue) * 100 : 0;
  const netMargin = incomeAfterTax > 0 ? (incomeAfterTax / revenue) * 100 : 0;

  return {
   company: "eTranzact",
   totalRevenue: revenue,
   totalExpenses: expenses,
   incomeBeforeTax,
   totalTaxPaid,
   incomeAfterTax,
   grossMargin,
   netMargin
 };
}

console.log(calculate(6000000, 2000000));
console.log(calculate(800000, 1000000));
console.log(calculate(500000, 300000));    
 
  
