$(document).ready(function(){
	function Question(question, rightAnswer, otherAnswers){
		this.question = question;
		this.rightAnswer = rightAnswer;
		this.answers = otherAnswers;
		this.answers.push(rightAnswer);
		this.answerElements = [];

		this.display = function(){
			$("#answerRow").empty();
			for(var i = 0; i < this.answers.length; i++){
				answerElement = $("<div class='col-lg-6 col-md-6 col-sm-12 col-xs-12'>" + this.answers[i] + "</div>");
				$("#answerRow").append(answerElement);
				this.answerElements.push(answerElement);
				this.clickify(i);
			}
		}

		this.shuffle = function(){
			var currentIndex = this.answers.length, temporaryValue, randomIndex;
			while(0 !== currentIndex){
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex --;
				temporaryValue = this.answers[currentIndex];
				this.answers[currentIndex] = this.answers[randomIndex];
				this.answers[randomIndex] = temporaryValue;
			}
		return this;
		}

		this.clickify = function(index){
			if(this.answers[index] === this.rightAnswer){
				console.log(this.answerElements[index]);
				this.answerElements[index].on("click",function(index){this.onCorrect(index);});
			}else{
				console.log(this.answerElements[index]);
				this.answerElements[index].on("click",function(index){this.onIncorrect(index);});
			}
		}
		this.onCorrect = function(index){
			this.answerElements[index].css("background", "green");

			setTimeout(function(){
				nextQuestion();
			}, 3000);
		}

		this.onIncorrect = function(index){
			this.answerElements[index].css("background", "green");
			setTimeout(function(){
				nextQuestion();
			}, 3000);
		}


		this.shuffle();
	}

var questions = [];
questions.push(new Question("Name the following theorem: Every simply connected, closed 3-manifold is homeomorphic to the 3-sphere.", 
	"Poincare Conjecture", ["Twin Prime Conjecture", "Riemann Hypothesis", "Fundamental Theorem of Galois Theory"]));
questions.push(new Question("How many flavors of quarks are there?", "6", ["4", "8", "2"]));
questions.push(new Question("In 1964, this man proposed a particle that gave all matter mass.", "Peter Higgs", ["Richard Feynman", "Carl Sagan", "Albert Einstein", "Benoit Mandelbrot"]));
questions.push(new Question("How many elements are in a generating set for the symmetry group of a regular polygon", "2", ["3", "2N + 1"]));
questions.push(new Question("True or false: for every normal subgroup N of a group G and every element g in G, gN = Ng", "true", ["false"]));
questions.push(new Question("What is the capital of Uzbekistan", "Tashkent", ["Dushanbe", "Kabul", "Bishkek"]));
questions.push(new Question("What is the largest city in China in terms of population?", "Guangzhou", ["Beijing", "Shanghai", "Chongqing"]));
questions.push(new Question("What is the largest country in the world in terms of area?", "Russia", ["China", "Canada", "USA"]));
questions.push(new Question("What is the correct plural form of the word 'Octopus'?", "Octopodes", ["Octopi", "Octopuses", "Octopus"]));

console.log(questions);
nextQuestion();

function nextQuestion(){
	var randIndex = randNum(0, questions.length - 1);
	var question = questions[randIndex];
	question.display();
}



function randNum(start, end){
	return Math.floor(Math.random()*(end - start) + start + 1);
}


});


