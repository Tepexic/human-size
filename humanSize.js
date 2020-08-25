function humanSize(b) {
  // default return when input is not valid
  const def = "0kB";

  // Parse input
  if (isNaN(b / 1000)) return def;
  if (b < 0) return def;

  // Prefix hash
  const prefix = {
    1: "k",
    2: "M",
    3: "G",
    4: "T",
    5: "P",
    6: "E",
    7: "Z",
    8: "Y",
  };

  // Prefix pointer/counter
  var i = 0;
  // Initialize size variable
  var B = b;

  // Iterate over the size variable until its integer part is 0
  do {
    // If the size is >1000 YB,  round it
    if (i > 7) return Math.round(B.toString()) + prefix[8] + "B";
    i += 1;
    B /= 1000;
  } while (Math.trunc(B / 1000) > 0);

  // Return size rounded to 1 decimal with correspoding prefix
  return round(B, 1).toString() + prefix[i] + "B";
}

// Function to round to a specific amount of digits, taken from https://www.30secondsofcode.org/js/s/round
function round(n, decimals = 0) {
  return Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);
}

module.exports = humanSize;
