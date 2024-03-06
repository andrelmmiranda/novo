const Parser = require('expr-eval').Parser;

const formula = "peso/(altura*altura)";
const variables = {
	"altura": 1.78,
	"peso": 78
}


const runFormula = (formula, variables) => {
	return Parser.parse(formula).evaluate(variables);
}

console.log(runFormula(formula, variables));