
/*CONTROLLER FUNCTION */
//get the values from the Page
function getValues(){
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    //validate input
    if(Number.isInteger(startValue) && Number.isInteger(endValue))
    {
        //call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
        //call displayNumbers
        displayNumbers(numbers); 
    }
    else
        {
            alert("You must enter integers.");
        }
}

/*LOGIC FUNCTIONS*/
//generate numbers from startValue to endValue
function generateNumbers(start, end){
    let values = [];
    range = end - start;
    for(let i=start; i <= end; i++){
        values.push(i);
    }
    return values;
}

/* DISPLAY OR VIEW FUNCTIONS*/
//display the numbers with the even numbers being bold
function displayNumbers(nums){
    let templateRows = "";
    for(let i = 0; i < nums.length; i++)
    {
        let className = "";
        let num = nums[i];
        if (num % 2 == 0)
        {
            className = "even";
        }
        else
        {
            className = "odd";
        }

        templateRows += `<tr><td class="${className}">${num}</td></tr>`;

    }
    document.getElementById("results").innerHTML = templateRows;
}