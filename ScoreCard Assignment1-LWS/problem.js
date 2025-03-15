let applesCount = 0;
let orangesCount = 0;


function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here

    // for counting apples
    for ( let i = 0; i <= apples.length; i++) {
        let apple = a + apples[i];
        
        if (apple >= s && apple <= t) {
            applesCount++;
        }
    }


    // for countimg oranges
    for (let i = 0; i <= oranges.length; i++) {
        let orange = b + oranges[i];
        
        if (orange >= s && orange <= t) {
            orangesCount++;
        }
    }

}

countApplesAndOranges(2, 3, 1, 5, [-2], [-1])

console.log(applesCount)
console.log(orangesCount)