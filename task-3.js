// 3. Checking Array Membership with ‘includes’
// Instructions:

// Create an array of books containing different book.

// Use the includes method to check if the array contains a javascript book.

// Print a message to the console indicating whether the element is present in the array or not.


const books = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
console.log(books.includes('a'));
console.log(books.includes('j'));


if(books.includes('j')){
    console.log('Element is present in the array');
}
else{
    console.log('Element is not present in the array');
}