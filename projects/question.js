var qHi = ["hello", "hi","whats up?"];
var arrayHi = ["Hi","Hello, Whats up?","How can i help you?", "What do you won't to know?"];
var  qNumber = ["number", "numbers","number?"];
var ansNumber = [`The interpreter acts as a simple calculator: you can type an expression at it and it will write the value. 
Expression syntax is straightforward: the operators +, -, * and / work just like in most other languages (for example, Pascal or C);
parentheses (()) can be used for grouping. For example:`,

`>>> 2 + 2<br>4`,
`>>> 50 - 5*6<br>20`,
`>>> (50 - 5*6) / 4<br>5.0`,
`>>> 8 / 5  # division always returns a floating point number<br>1.6`,

`With Python, it is possible to use the ** operator to calculate powers [1]:`,
`>>> 5 ** 2  # 5 squared<br>25`,
`>>> 2 ** 7  # 2 to the power of 7 128`,
`it is all what i know. If it is not satisfaction for you go there i have leran from this website: 
<a target="_blank" href='https://docs.python.org/3/tutorial/introduction.html#using-python-as-a-calculator'>Path to documentation</a>`];

var qString = ["string", "string?"];
var ansString = [`Besides numbers, Python can also manipulate strings, 
which can be expressed in several ways. They can be enclosed in single quotes ('...') or
double quotes ("...") with the same result [2]. \ can be used to escape quotes:`,
`>>> 'spam eggs'  # single quotes<br>
'spam eggs'`,
`>>> 'doesn\'t'  # use \' to escape the single quote...<br>
"doesn't"`,
`>>> "doesn't"  # ...or use double quotes instead<br>
"doesn't"`,
`>>> '"Yes," he said.'<br>
'"Yes," he said.'`,
`>>> "\"Yes,\" he said."<br>
'"Yes," he said.'`,
`>>> '"Isn\'t," she said.'<br>
'"Isn\'t," she said.'`,
`it is all what i know. If it is not satisfaction for you go there i have leran from this website: 
<a target="_blank" href='https://docs.python.org/3/tutorial/introduction.html#strings'>Path to documentation</a>`];               


var qList = ["list","lists"];
var ansList = [`Python knows a number of compound data types, used to group together other values.
				The most versatile is the list, which can be written as a list of comma-separated
				values (items) between square brackets. Lists might contain items of different types,
				but usually the items all have the same type.`,
				`>>> squares = [1, 4, 9, 16, 25]<br>
				>>> squares<br>
				[1, 4, 9, 16, 25]`,
				"Lists also support operations like concatenation:",
				`>>> squares + [36, 49, 64, 81, 100]<br>
				[1,4, 9, 16, 25, 36, 49, 64, 81, 100]`,
				`it is all what i know. If it is not satisfaction for you go there i have leran from this website:
				<a target="_blank" href='https://docs.python.org/3/tutorial/introduction.html#lists'>Path to documentation</a>`
				];

var qif = ["if"];
var ansif = ["Perhaps the most well-known statement type is the if statement. For example:",
				`>>> x = int(input("Please enter an integer: "))<br>
				Please enter an integer: 42`,
				`>>> if x < 0:<br>
				...     x = 0<br>
				...     print('Negative changed to zero')<br>
				... elif x == 0:<br>
				...     print('Zero')<br>
				... elif x == 1:<br>
				...     print('Single')<br>
				... else:<br>
				...     print('More')<br>
				...<br>
				More`, `it is all what i know. If it is not satisfaction for you go there i have leran from this website:
				<a target="_blank" href='https://docs.python.org/3/tutorial/controlflow.html#if-statements'>Path to documentation</a>`];

var qfor = ["for"];
var ansfor = [`The for statement in Python differs a bit from what you may be used to in C or Pascal. 
			Rather than always iterating over an arithmetic progression of numbers (like in Pascal),
			or giving the user the ability to define both the iteration step and halting condition (as C),
			Python’s for statement iterates over the items of any sequence (a list or a string), 
			in the order that they appear in the sequence. For example (no pun intended):`,
			`>>> # Measure some strings:<br>
			... words = ['cat', 'window', 'defenestrate']<br>
			>>> for w in words:<br>
			...     print(w, len(w))<br>
			...<br>
			cat 3<br>
			window 6<br>
			defenestrate 12`,
			`it is all what i know. If it is not satisfaction for you go there i have leran from this website:
			<a target="_blank" href='https://docs.python.org/3/tutorial/controlflow.html#for-statements'>Path to documentation</a>`
			];


var qwho = ["name", "you"];
var answho = ["I am helper for beginner programmer.", "My name is Gidion", "My father is Adrian Wiśniewski", "My mom is Jakub Kosinski", " I have a pet too, his name is Marcin Wieczorek"];
var qHelp = ["help", "help?","help me", "i need help", "i need your help"];
var ansHelp = ["You say help then la la la <br> I will help you", "<img style='width:50%'; src='img/help.gif'>","right now you can ask me about:",
				"how works numbers in python","how works string in python","how works lists in python","how works if statement in python", "You can just ask: \"string\",\"number\",\"list\", \"if\", \"for\""
				];

var qbye = ["bye", "good bye", "thanks for all", "bye bye", " i have to go"];
var ansbye = ["bye bye", "see you next time" ];