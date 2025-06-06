let courses = ['Intro to Web Programming', 'Client-Side JavaScript', 'Bitmap & Vector Graphics', 'Web UI Design with CSS', 'Relational Database'];
let courseList = 'My courses this term are ';
const msg = document.querySelector('#courses');
/* STEP 1a: A simple FOR loop
A simple loop of this structure needs an initializer (counter variable), an exit conditional, and and incrementor/decrementor */
for(let i= 0;i<courses.length;i++){
	if(i === courses.length-1){
		courseList += `and ${courses[i]}.`
	}else{
		courseList += `${courses[i]}, `;
	}
}
msg.textContent = courseList;
// STEP 1b: Add a conditional for the last item in the array so we can finish the sentence with a period.

/* STEP 2: Exit a loop with break */
let cities = ['Toronto', 'Montreal', 'Ottawa', 'Vancouver', 'Halifax'];
const result = document.querySelector('#searchResult');
const input = document.querySelector('input');
const btn = document.querySelector('button#cities');

btn.addEventListener('click', function() {
	var searchName = input.value.trim();
	input.value = '';
	input.focus();
	/* STEP 2a: Create a FOR loop to iterate through the cities array */
	//without breaks,loops can give wrong results.As soon as you find what are you looking for, you stop the loop using break;prevents unnecessary checks,prevents overwriting your results with incorrect value.
for(let i=0;i<cities.length;i++){
	console.log(cities[i]);
	if(searchName === cities[i]){
	result.textContent = `${searchName} is in the list of cities`;
		break;
	} else {
		result.textContent = `${searchName} The city you typed is not in the list of cities`;
	}

		/* STEP 2b: Build an IF/ELSE conditional that compares searchName with cities[i] */

}

});



/* STEP 3: Skip a loop iteration with continue */
const numberList = document.querySelector('#numberList');
let num = 50;
for (let i = 1; i <= num; i ++) {
	let sqRoot = Math.sqrt(i);
	/* STEP 3a: Build an IF statement that checks whether the square root of the number is NOT an integer */
	if (Math.floor(sqRoot) !== sqRoot) {
		/* STEP 3b: If the square root of the number is not an integer, we don't want to output it to the paragraph, so skip the rest of the instructions inside this loop and go back up to the FOR, using 'continue' */
		continue;
	}
	numberList.textContent += `${i} is a perfect square of ${sqRoot}\n`
}

/* STEP 4: WHILE and DO/WHILE loops */

let j = 0;
let outputWhile = '';
/* STEP 4a: WHILE loop to iterate through the cities array (created above in STEP 2) */

console.log(outputWhile);

let k = 0;
var outputDo = '';
/* STEP 4b: DO/WHILE loop - grab the above IF/ELSE and the 'i++', then create the very same output with DO/WHILE (uncomment the above 'i = 0', first) */

console.log(outputDo);
/* …now try to loop through the same array backwards! */

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code


//for ....of Loop(for arrays) Looping over Iterable values
let fruits = ['apple','banana','cherry'];
for(let x of fruits){
	console.log(x);
}

//Looping over Object Keys
//for ... in
let student ={name:"Mark",age:28};
for(let key in student){
	console.log(key + ': ' + student[key]);
}