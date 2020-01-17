//friends array
let friends = ['Rich', 'Marty', 'Brian', 'Christy', 'Lena'];

//loop

    for (let i = 0; i < friends.length; i++) {

        console.log(friends[i].toUpperCase() + ':');
    
        for (let j = 5; j >= 1; j--) {
            if (j > 2) {
                console.log(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " line of code in the file ");
            } else if (j === 2) {
                console.log(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " line of code in the file ");
            } else if (j === 1) {
                console.log(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " line of code in the file ");

            }   
        }
   }
        
        
      

        