// Example object d
let d = {
    W: 'Value for W',
    X: 'Value for X'
};

// Conditional statement
if ("W" in d || "U" in d) {
    // Execute this block if either "W" or "U" is in object d
    console.log("Condition met");
} else {
    // Execute this block if neither "W" nor "U" is in object d
    console.log("Condition not met");
}
