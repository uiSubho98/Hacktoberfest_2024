function countWords(text){
const words = text.trim().split(/\s+/);
  return text.trim() === "" ? 0 : words.length;
}


countWords("Hello Developers")
