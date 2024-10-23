function countWords(text) {
  // Trim whitespace and split by one or more spaces
  const words = text.trim().split(/\s+/);
  return text.trim() === "" ? 0 : words.length;
}

// Example usage
const input = "Hello world! This is a word counting program.";
console.log("Word Count:", countWords(input)); // Output: Word Count: 7
