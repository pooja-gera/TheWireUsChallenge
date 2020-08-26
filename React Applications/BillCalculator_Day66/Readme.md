## Calculator Part2

Hope you have completed the previous challenge and ready for the next one.So lets contine with our Calculator Part2.

Next will be Calculator.js, our main part

**Challenge Hints:**

1. Initialise calculator buttons value and tipPercentage .

2. Create a class component to initialise value to state
                      (*buttons: btnsValue,
			clickedBtn: '',
			billTotal: '',
			numberOfPeople: 1,
			percentages: tipPercentages,
			tipPercent: tipPercentages[0],
			tipTotal: 0,
			costPP: 0*) 
   and call various methods that will be defined later(this can be done later after defining the methods) 
   
 3. Here you need to create 4 methods :
        i)    onClickButton()-Initialise state value to be **clickedBtn: this.state.buttons[i]**  and define function which calls the updateBillTotal(i) method
        ii)   updatePartyCount(sum) - here calculate no of people in the party.
        iii) getTipPercentage(i)- Initialise * newState = this.state.percentages[i]* and setState the tipPercent as newstate .call method **calculateCosts()**
        iv)  calculateCosts() -Here calculate the total bill and divide among each person.
        
4. At last render  and return everything from the component.

Complete this and See you in the next Challenge

Continue...

For References:

1. https://reactjs.org/docs/getting-started.html

2. https://www.w3schools.com/react/
