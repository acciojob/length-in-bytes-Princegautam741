// script.js
const byteSize = (str) => {
  // Create a Blob object with the given string
  const blob = new Blob([str]);

  // Get the size property of the Blob object, representing the size in bytes
  const sizeInBytes = blob.size;

  // Return the size in bytes
  return sizeInBytes;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
