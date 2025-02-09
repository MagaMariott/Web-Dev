if (condition) {
    // do this
    // ...and that
    // ...and that
}


if (n < 0) {alert(`Power ${n} is not supported`);} // Bad

if (n < 0)
    alert(`Power ${n} is not supported`); //  Never do that

if (n < 0) alert(`Power ${n} is not supported`); // acceptable


if (n < 0) {
    alert(`Power ${n} is not supported`); // best variant
  }


// backtick quotes ` allow to split the string into multiple lines
let str = `
  ECMA International's TC39 is a group of JavaScript developers,
  implementers, academics, and more, collaborating with the community
  to maintain and evolve the definition of JavaScript.
`;

if (
    id === 123 &&
    moonPhase === 'Waning Gibbous' &&
    zodiacSign === 'Libra'
  ) {
    letTheSorceryBegin();
}

  show(parameters,
    aligned, // 5 spaces padding at the left
    one,
    after,
    another
 ), {
 some
}


function pow(x, n) {
    let result = 1;
    //              <--
    for (let i = 0; i < n; i++) {
      result *= x;
    }
    //              <--
    return result;
}


for (let i = 0; i < 10; i++) {
  if (cond) {
    // <- one more nesting level
  }
}


for (let i = 0; i < 10; i++) {
    if (!cond) continue;
    // <- no extra nesting level
}


// Two constructs below are identical

// 1
function pow(x, n) {
    if (n < 0) {
      alert("Negative 'n' not supported");
    } else {
      let result = 1;
  
      for (let i = 0; i < n; i++) {
        result *= x;
      }
  
      return result;
    }
}

// 2
function pow(x, n) {
    if (n < 0) {
      alert("Negative 'n' not supported");
      return;
    }
  
    let result = 1;
  
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
  }