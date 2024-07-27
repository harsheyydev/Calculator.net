var input_Val= document.getElementById('inputVal');
var sub_Val = document.getElementById('subval');
var historyDiv = document.getElementsByClassName('tab1')[0];

function getValue(val){

    console.log(val);
    if(input_Val.value == '0')
    {
        input_Val.value = val;
    }
    else{
        input_Val.value += val;
    }
    


}

function solve()
{
    var equation = input_Val.value;//8-2
    var ans = eval(equation);
    sub_Val.value = equation + '=';

    input_Val.value = ans;
    
    showHistory(equation, ans)
}

function clearAll()
{
    input_Val.value= '0';
    sub_Val.value= ' ';
}

function removeLastDigit()
{
    if(input_Val.value.length == 1)
    {
        input_Val.value = input_Val.value.slice(0, -1);
        input_Val.value = "0";
    }
    else
    {
        input_Val.value = input_Val.value.slice(0, -1);
    }
}

function showHistory(equation, ans)
{
    historyDiv.innerHTML += `
                <div class="his">
                    <p>${equation} =</p>
                    <p>${ans}</p>
                </div>
    `;
}
 

function clearHistory()
{
    var historyDivLen = document.querySelectorAll('.tab1 .his').length; 
    if(historyDivLen > 0)
    {
        var choice = confirm("Are u sure u want to delete his ?");
        if(choice)
            historyDiv.innerHTML = "";
    }
}