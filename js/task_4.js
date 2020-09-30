function formatString(string, maxLength = 40) {
  // Write code under this line
  const dots = "...";
  return string.length >= maxLength
    ? string.slice(0, maxLength).concat(dots)
    : string;
}
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
console.log(
  formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 30)
);
