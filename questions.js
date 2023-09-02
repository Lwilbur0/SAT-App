const imagePaths = {
    './q1.png': require('./q1.png'),
    './q2.png': require('./q2.png'),
    './q3.png': require('./q3.png'),
    './q4.png': require('./q4.png'),
    './q5.png': require('./q5.png'),
    './q6.png': require('./q6.png'),
    './q7.png': require('./q7.png'),
    './q8.png': require('./q8.png'),
    './q9.png': require('./q9.png'),
    './q10.png': require('./q10.png'),
    './q11.png': require('./q11.png'),
    './q12.png': require('./q12.png'),
    './q13.png': require('./q13.png'),
    './q14.png': require('./q14.png'),
    './q15.png': require('./q15.png'),
    './q16.png': require('./q16.png'),
    './q17.png': require('./q17.png'),
    './q18.png': require('./q18.png'),
    './q19.png': require('./q19.png'),
    './q20.png': require('./q20.png'),
    './q21.png': require('./q21.png'),
    './q22.png': require('./q22.png'),
    './q23.png': require('./q23.png'),
    './q24.png': require('./q24.png'),
    './q25.png': require('./q25.png'),
    // './q26.png': require('./q26.png'),
    // './q27.png': require('./q27.png'),
    // './q28.png': require('./q28.png'),
    // './q29.png': require('./q29.png'),
    // './q30.png': require('./q30.png'),
    // './q31.png': require('./q31.png'),
    // './q32.png': require('./q32.png'),
    // './q33.png': require('./q33.png'),
    // './q34.png': require('./q34.png'),
    // './q35.png': require('./q35.png'),
    // './q36.png': require('./q36.png'),
    // './q37.png': require('./q37.png'),
    // './q38.png': require('./q38.png'),
    // './q39.png': require('./q39.png'),
    // './q40.png': require('./q40.png'),
    // './q41.png': require('./q41.png'),
    // './q42.png': require('./q42.png'),
    // './q43.png': require('./q43.png'),
    // './q44.png': require('./q44.png'),
    // './q45.png': require('./q45.png'),
    // './q46.png': require('./q46.png'),
    // './q47.png': require('./q47.png'),
    // './q48.png': require('./q48.png'),
    // './q49.png': require('./q49.png'),
    // './q50.png': require('./q50.png')

}
export default [
    {
        question: "What value of x satisfies the equation $\\frac{4 x^2}{x^2-9}-\\frac{2 x}{x+3}=\\frac{1}{x-3}$?",
        image: null,
        options:[
            {
                id:"0",
                options:"A",
                answer:"-3",
            },
            {
                id:"1",
                options:"B",
                answer:"$-\\frac{1}{2}$",
            },
            {
                id:"2",
                options:"C",
                answer:"$\\frac{1}{2}$",
            },
            {
                id:"3",
                options:"D",
                answer:"3",
            },
        ],
        correctAnswerIndex: 2,
        explanation: "Choice C is correct. Each fraction in the given equation can be expressed with the common denominator $x^2-9$. Multiplying $\\frac{2 x}{x+3}$ by $\\frac{x-3}{x-3}$ yields $\\frac{2 x^2-6 x}{x^2-9}$, and multiplying $\\frac{1}{x-3}$ by $\\frac{x+3}{x+3}$ yields $\\frac{x+3}{x^2-9}$. Therefore, the given equation can be written as $\\frac{4 x^2}{x^2-9}-\\frac{2 x^2-6 x}{x^2-9}=\\frac{x+3}{x^2-9}$. Multiplying each fraction by the denominator results in the equation $4 x^2-\\left(2 x^2-6 x\\right)=x+3$, or $2 x^2+6 x=x+3$. This equation can be solved by setting a quadratic expression equal to 0, then solving for $x$. Subtracting $x+3$ from both sides of this equation yields $2 x^2+5 x-3=0$. The expression $2 x^2+5 x-3$ can be factored, resulting in the equation $(2 x-1)(x+3)=0$. By the zero product property, $2 x-1=0$ or $x+3=0$. To solve for $x$ in $2 x-1=0,1$ can be added to both sides of the equation, resulting in $2 x=1$. Dividing both sides of this equation by 2 results in $x=\\frac{1}{2}$. Solving for $x$ in $x+3=0$ yields $x=-3$. However, this value of $x$ would result in the second fraction of the original equation having a denominator of 0. Therefore, $x=-3$ is an extraneous solution. Thus, the only value of $x$ that satisfies the given equation is $x=\\frac{1}{2}$. Choice A is incorrect and may result from solving $x+3=0$ but not realizing that this solution is extraneous because it would result in a denominator of 0 in the second fraction. Choice B is incorrect and may result from a sign error when solving $2 x-1=0$ for $x$. Choice D is incorrect and may result from a calculation error.",
        calculator: false,
    },
    {
        question: "Which of the following is equivalent to $\\sqrt[4]{x^2+8 x+16}$, where x>0?",
        image: null,
        options:[
            {
                id:"0",
                options:"A",
                answer:"$(x+4)^4$",
            },
            {
                id:"1",
                options:"B",
                answer:"$(x+4)^2$",
            },
            {
                id:"2",
                options:"C",
                answer:"$(x+4)$",
            },
            {
                id:"3",
                options:"D",
                answer:"$(x+4)^{\\frac{1}{2}}$",
            },
        ],
        correctAnswerIndex: 3,
        explanation: "Choice D is correct. The given expression can also be written as $\\left(x^2+8 x+16\\right)^{\\frac{1}{4}}$. The trinomial $x^2+8 x+16$ can be rewritten in factored form as $(x+4)^2$. Thus, the entire expression can be rewritten as $\\left((x+4)^2\\right)^{\\frac{1}{4}}$. Simplifying the exponents yields $(x+4)^{\\frac{1}{2}}$. Choices A, B, and C are incorrect and may result from errors made when simplifying the exponents in the expression $\\left((x+4)^2\\right)^{\\frac{1}{4}}$.",
        calculator: false,
    },
    {
        question: "The formula above gives the monthly payment m needed to pay off a loan of P dollars at r percent annual interest over N months. Which of the following gives P in terms of m, r, and N?",
        image: imagePaths["./q3.png"],
        options:[
            {
            id:"0",
            options:"A",
            answer:"$P=\\frac{(\\frac{r}{1,200})(1+\\frac{r}{1,200})^N}{(1+\\frac{r}{1,200})^N-1} m$",
            },
            {
            id:"1",
            options:"B",
            answer:"$P=\\frac{(1+\\frac{r}{1,200})^N-1}{(\\frac{r}{1,200})(1+\\frac{r}{1,200})^N} m$",
            },
            {
            id:"2",
            options:"C",
            answer:"$P=(\\frac{r}{1,200}) m$",
            },
            {
            id:"3",
            options:"D",
            answer:"$P=(\\frac{1,200}{r}) m$",
            },
        ],
        correctAnswerIndex: 1,
        explanation: "Choice B is correct. Since the right-hand side of the equation is $P$ times the expression $\\frac{(\\frac{r}{1,200})(1+\\frac{r}{1,200})^N}{(1+\\frac{r}{1,200})^N-1}$, multiplying both sides of the equation by the reciprocal of this expression results in $\\frac{(1+\\frac{r}{1,200})^N-1}{(\\frac{r}{1,200})(1+\\frac{r}{1,200})^N} m=P$. Choice A is incorrect and is the result of multiplying both sides of the equation by the rational expression $\\frac{(\\frac{r}{1,200})(1+\\frac{r}{1,200})^N}{(1+\\frac{r}{1,200})^N-1}$ rather than by the reciprocal of this expression $\\frac{(1+\\frac{r}{1,200})^N-1}{(\\frac{r}{1,200})(1+\\frac{r}{1,200})^N}$. Choices C and D are incorrect and are likely the result of errors while trying to solve for $P$.",
        calculator: false,
    },
    {
        question: "If $\\frac{a}{b}=2$, what is the value of $\\frac{4b}{a}$?",
        image: null,
        options:[
          {
            id:"0",
            options:"A",
            answer:"0",
          },
          {
            id:"1",
            options:"B",
            answer:"1",
          },
          {
            id:"2",
            options:"C",
            answer:"2",
          },
          {
            id:"3",
            options:"D",
            answer:"4",
          },
        ],
        correctAnswerIndex: 2,
        explanation: "Choice C is correct. Since $\\frac{a}{b}=2$, it follows that $\\frac{b}{a}=\\frac{1}{2}$. Multiplying both sides of the equation by 4 gives $4\\left(\\frac{b}{a}\\right)=4\\left(\\frac{1}{2}\\right)$, or $\\frac{4b}{a}=2$.\n\nChoice A is incorrect because if $\\frac{4b}{a}=0$, then $\\frac{a}{b}$ would be undefined. Choice B is incorrect because if $\\frac{4b}{a}=1$, then $\\frac{a}{b}=4$. Choice D is incorrect because if $\\frac{4b}{a}=4$, then $\\frac{a}{b}=1$.",
        calculator: false,
      },
      {
        question: "If x>3, which of the following is equivalent to the expression $\\frac{1}{\\frac{1}{x+2}+\\frac{1}{x+3}}$?",
        image: null,
        options:[
          {
            id:"0",
            options:"A",
            answer:"$\\frac{2x+5}{x^2+5x+6}$",
          },
          {
            id:"1",
            options:"B",
            answer:"$\\frac{x^2+5x+6}{2x+5}$",
          },
          {
            id:"2",
            options:"C",
            answer:"$2x+5$",
          },
          {
            id:"3",
            options:"D",
            answer:"$x^2+5x+6$",
          },
        ],
        correctAnswerIndex: 1,
        explanation: "Choice B is correct. To rewrite $\\frac{1}{\\frac{1}{x+2}+\\frac{1}{x+3}}$, multiply by $\\frac{(x+2)(x+3)}{(x+2)(x+3)}$. This results in the expression $\\frac{(x+2)(x+3)}{(x+2)+(x+3)}$, which is equivalent to the expression in choice B.\n\nChoices A, C, and D are incorrect and could be the result of common algebraic errors that arise while manipulating a complex fraction.",
        calculator: false,
      },
    {
        question: "In the equations above, b and c represent the price per pound, in dollars, of beef and chicken, respectively, x weeks after July 1 during last summer. What was the price per pound of beef when it was equal to the price per pound of chicken?",
        image: imagePaths['./q4.png'],
        options:[
          {
            id:"0",
            options:"A",
            answer:"2.60",
          },
          {
            id:"1",
            options:"B",
            answer:"2.85",
          },
          {
            id:"2",
            options:"C",
            answer:"2.95",
          },
          {
            id:"3",
            options:"D",
            answer:"3.35",
          },
        ],
        correctAnswerIndex: 3,
        explanation: "Choice D is correct. To determine the price per pound of beef when it was equal to the price per pound of chicken, we need to find the value of $x$ (the number of weeks after July 1) when the two prices were equal. The prices were equal when $b=c$, which gives us the equation $2.35+0.25=1.75+0.40x$. Simplifying this equation, we have $0.60=0.15x$, and solving for $x$, we find $x=4$. Substituting $x=4$ into the equation for $b$, we get $b=2.35+0.25(4)=3.35$ dollars per pound.\n\nChoice A is incorrect. It results from substituting the value 1, not 4, for $x$ in the equation $b=2.35+0.25x$. Choice B is incorrect. It results from substituting the value 2, not 4, for $x$ in the equation $b=2.35+0.25x$. Choice C is incorrect. It results from substituting the value 3, not 4, for $x$ in the equation $c=1.75+0.40x$.",
        calculator: false,
      },
    {
        question: "Which of the following is equal to $a^{\\frac{2}{3}}$, for all values of a? ",
        image: null,
        options:[
            {
                id:"0",
                options:"A",
                answer:"$\\sqrt{a^{\\frac{1}{3}}}$",
            },
            {
                id:"1",
                options:"B",
                answer:"$\\sqrt{a^3}$",
            },
            {
                id:"2",
                options:"C",
                answer:"$\\sqrt[3]{a^{\\frac{1}{2}}}$",
            },
            {
                id:"0",
                options:"D",
                answer:"$\\sqrt[3]{a^2}$",
            },
        ],
        correctAnswerIndex: 3,
        explanation: "Choice $\\mathrm{D}$ is correct. By definition, $a^{\\frac{m}{n}}=\sqrt[n]{a^m}$ for any positive integers $m$ and $\\mathrm{n}$. It follows, therefore, that $a^{\\frac{2}{3}}=\sqrt[3]{a^2}$. Choice $\\mathrm{A}$ is incorrect. By definition, $a^{\\frac{1}{n}}=\sqrt[n]{a}$ for any positive integer $n$. Applying this definition as well as the power property of exponents to the expression $\sqrt{a^{\\frac{1}{3}}}$ yields $\sqrt{a^{\\frac{1}{3}}}=\left(a^{\\frac{1}{3}}\right)^{\\frac{1}{2}}=a^{\\frac{1}{6}}$. Because $a^{\\frac{1}{6}} \neq a^{\\frac{2}{3}}, \sqrt{a^{\\frac{1}{3}}}$ is not the correct answer. Choice B is incorrect. By definition, $a^{\\frac{1}{n}}=\sqrt[n]{a}$ for any positive integer $n$. Applying this definition as well as the power property of exponents to the expression $\sqrt{a^3}$ yields $\sqrt{a^3}=\left(a^3\right)^{\\frac{1}{2}}=a^{\\frac{3}{2}}$. Because $a^{\\frac{3}{2}} \neq a^{\\frac{2}{3}}, \sqrt{a^3}$ is not the correct answer. Choice $\\mathrm{C}$ is incorrect. By definition, $a^{\\frac{1}{n}}=\sqrt[n]{a}$ for any positive integer $n$. Applying this definition as well as the power property of exponents to the expression $\sqrt[3]{a^{\\frac{1}{2}}}$ yields $\sqrt[3]{a^{\\frac{1}{2}}}=\left(a^{\\frac{1}{2}}\right)^{\\frac{1}{3}}=a^{\\frac{1}{6}}$. Because $a^{\\frac{1}{6}} \neq a^{\\frac{2}{3}}, \sqrt[3]{a^{\\frac{1}{2}}}$ is not the correct answer.",
        calculator: false
    },
    {
        question: "The line y=kx+4, where k is a constant, is graphed in the $x y$-plane. If the line contains the point $(c, d)$, where $c \\neq 0$ and $d \\neq 0$, what is the slope of the line in terms of $c$ and $d$ ≠ ?",
        image: null,
        options:[
            {
                id:"0",
                options:"A",
                answer:"$\\frac{d-4}{c}$",
            },
            {
                id:"1",
                options:"B",
                answer:"$\\frac{c-4}{d}$",
            },
            {
                id:"2",
                options:"C",
                answer:"$\\frac{4-d}{c}$",
            },
            {
                id:"0",
                options:"D",
                answer:"$\\frac{4-c}{d}$",
            },
        ],
        correctAnswerIndex: 0,
        explanation: "Choice $A$ is correct. The linear equation $y=k x+4$ is in slope-intercept form, and so the slope of the line is $k$. Since the line contains the point $(c, d)$, the coordinates of this point satisfy the equation $y=k x+4$; therefore, $d=k c+4$. Solving this equation for the slope, $\\mathrm{k}$, gives $k=\\frac{d-4}{c}$. Choices B, C, and D are incorrect and may be the result of errors in substituting the coordinates of $(c, d)$ in $y=k x+4$ or of errors in solving for $\\mathrm{k}$ in the resulting equation.",
        calculator: false,
    },
    {
        question: "If $3x-y=12$, what is the value of $\\frac{8^x}{2^y}$?",
        image: null,
        options:[
          {
            id:"0",
            options:"A",
            answer:"$2^{12}$",
          },
          {
            id:"1",
            options:"B",
            answer:"$4^4$",
          },
          {
            id:"2",
            options:"C",
            answer:"$8^2$",
          },
          {
            id:"3",
            options:"D",
            answer:"The value cannot be determined from the information given.",
          },
        ],
        correctAnswerIndex: 0,
        explanation: "Choice A is correct. One approach is to express $\\frac{8^x}{2^y}$ so that the numerator and denominator are expressed with the same base. Since 2 and 8 are both powers of 2, substituting $2^3$ for 8 in the numerator of $\\frac{8^x}{2^y}$ gives $\\frac{(2^3)^x}{2^y}$, which can be rewritten as $\\frac{2^{3x}}{2^y}$. Since the numerator and denominator of $\\frac{2^{3x}}{2^y}$ have a common base, this expression can be rewritten as $2^{3x-y}$. It is given that $3x-y=12$, so one can substitute 12 for the exponent $3x-y$, given that the expression $\\frac{8^x}{2^y}$ is equal to $2^{12}$.\n\nChoice B is incorrect. The expression $\\frac{8^x}{2^y}$ can be rewritten as $\\frac{2^{3x}}{2^y}$, or $2^{3x-y}$. If the value of $2^{3x-y}$ is $4^4$, which can be rewritten as $2^8$, then $2^{3x-y}=2^8$, which results in $3x-y=8$, not 12.\n\nChoice C is incorrect. If the value of $\\frac{8^x}{2^y}$ is $8^2$, then $2^{3x-y}=8^2$, which results in $3x-y=6$, not 12.\n\nChoice D is incorrect because the value of $\\frac{8^x}{2^y}$ can be determined.",
        calculator: false,
      },
      {
        question: "If $\\frac{5}{x}=\\frac{15}{x+20}$, what is the value of $\\frac{x}{5}$?",
        image: null,
        options:[
          {
            id:"0",
            options:"A",
            answer:"10",
          },
          {
            id:"1",
            options:"B",
            answer:"5",
          },
          {
            id:"2",
            options:"C",
            answer:"2",
          },
          {
            id:"3",
            options:"D",
            answer:"$\\frac{1}{2}$",
          },
        ],
        correctAnswerIndex: 2,
        explanation: "Choice C is correct. Multiplying each side of $\\frac{5}{x}=\\frac{15}{x+20}$ by $x(x+20)$ gives $5(x+20)=15x$. Using the distributive property to eliminate the parentheses yields $5x+100=15x$, and then subtracting $5x$ from each side of the equation $5x+100=15x$ gives $100=10x$. Finally, dividing both sides of the equation $100=10x$ by 10 gives $10=x$. Therefore, the value of $\\frac{x}{5}$ is $\\frac{10}{5}=2$.\n\nChoice A is incorrect because it is the value of $x$, not $\\frac{x}{5}$. Choices B and D are incorrect and may be the result of errors in arithmetic operations on the given equation.",
        calculator: false,
      },
      {
        question: "In the figure above, lines k, I, and m intersect at a point. If x+y=u+w, which of the following must be true?\nI. x=z\nII. y=w\nIII. z=t",
        image: imagePaths['./q5.png.'],
        options:[
          {
            id:"0",
            options:"A",
            answer:"I and II only",
          },
          {
            id:"1",
            options:"B",
            answer:"I and III only",
          },
          {
            id:"2",
            options:"C",
            answer:"II and III only",
          },
          {
            id:"3",
            options:"D",
            answer:"I, II, and III",
          },
        ],
        correctAnswerIndex: 1,
        explanation: "Choice B is correct. Since the angles marked $y^{\circ}$ and $u^{\circ}$ are vertical angles, $y=u$. Substituting $y$ for $u$ in the equation $x+y=u+w$ gives $x=w$. Since the angles marked $w^{\circ}$ and $z^{\circ}$ are vertical angles, $w=z$. Therefore, by the transitive property, $x=z$, and so I must be true.\n\nThe equation in II need not be true. For example, if $x=w=z=t=70$ and $y=u=40$, then all three pairs of vertical angles in the figure have equal measure and the given condition $x+y=u+w$ holds. But it is not true in this case that $y$ is equal to w. Therefore, II need not be true.\n\nSince the top three angles in the figure form a straight angle, it follows that $x+y+z=180$. Similarly, $w+u+t=180$, and so $x+y+z=w+u+t$. Subtracting the sides of the given equation $x+y=u+w$ from the corresponding sides of $x+y+z=w+u+t$ gives $z=t$. Therefore, III must be true. Since only I and III must be true, the correct answer is choice B.\n\nChoices A, C, and D are incorrect because each of these choices includes II, which need not be true.",
        calculator: false,
      },
      {
        question: "In the quadratic equation above, a is a nonzero constant. The graph of the equation in the xy-plane is a parabola with vertex (c, d). Which of the following is equal to d?",
        image: imagePaths['./q6.png'],
        options:[
          {
            id:"0",
            options:"A",
            answer:"$-9a$",
          },
          {
            id:"1",
            options:"B",
            answer:"$-8a$",
          },
          {
            id:"2",
            options:"C",
            answer:"$-5a$",
          },
          {
            id:"3",
            options:"D",
            answer:"$-2a$",
          },
        ],
        correctAnswerIndex: 0,
        explanation: "Choice A is correct. The parabola with equation $y=a(x-2)(x+4)$ crosses the $x$-axis at the points $(-4,0)$ and $(2,0)$. By symmetry, the $x$-coordinate of the vertex of the parabola is halfway between the $x$-coordinates of $(-4,0)$ and $(2,0)$. Thus, the $x$-coordinate of the vertex is $\\frac{-4+2}{2}=-1$. This is the value of $c$. To find the $y$-coordinate of the vertex, substitute $-1$ for $x$ in $y=a(x-2)(x+4)$; $y=a(-1-2)(-1+4)=a(-3)(3)=-9a$. Therefore, the value of $d$ is $-9a$.\n\nChoice B is incorrect because the value of the constant term in the equation is not the $y$-coordinate of the vertex, unless there were no linear terms in the quadratic. Choice C is incorrect and may be the result of a sign error in finding the $x$-coordinate of the vertex. Choice D is incorrect because the negative of the coefficient of the linear term in the quadratic equation is not the $y$-coordinate of the vertex.",
        calculator: false,
      },
      {
        question: "The equation $\\normalsize \\frac{24 x^2+25 x-47}{a x-2}=-8 x-3-\\frac{53}{a x-2}$ is true for all values of $x \\neq \\frac{2}{a}$, where a is a constant. What is the value of a?",
        image: null,
        options:[
          {
            id:"0",
            options:"A",
            answer:"-16",
          },
          {
            id:"1",
            options:"B",
            answer:"-3",
          },
          {
            id:"2",
            options:"C",
            answer:"3",
          },
          {
            id:"3",
            options:"D",
            answer:"16",
          },
        ],
        correctAnswerIndex: 1,
        explanation: "Choice B is correct. Since $24 x^2+25 x-47$ divided by $a x-2$ is equal to $-8 x-3$ with remainder -53 , it is true that $(-8 x-3)(a x-2)-53=24 x^2+25 x-47$. This can be rewritten as $-8 a x^2+16 x-3 a x+6-53=24 x^2+25 x-47$. Since the coefficients of the $x^2$-term have to be equal on both sides of the equation, $-8 a=24$, or $a=-3$. Therefore, the value of $a$ is -3.\n\nChoices A, C, and D are incorrect and may be the result of either a conceptual misunderstanding or a computational error when trying to solve for the value of $a$.",
        calculator: false,
      },
      {
        question: "The function f is defined by a polynomial. Some values of x and f(x) are shown in the table above. Which of the following must be a factor of f(x)?",
        image: imagePaths['./q7.png'],
        options:[
          {
            id:"0",
            options:"A",
            answer:"$x-2$",
          },
          {
            id:"1",
            options:"B",
            answer:"$x-3$",
          },
          {
            id:"2",
            options:"C",
            answer:"$x-4$",
          },
          {
            id:"3",
            options:"D",
            answer:"$x-5$",
          },
        ],
        correctAnswerIndex: 2,
        explanation: "Choice C is correct. If $x-b$ is a factor of $f(x)$, then $f(b)$ must equal 0. Based on the table, $f(4)=0$. Therefore, $x-4$ must be a factor of $f(x).\n\nChoice A is incorrect because $f(2) \\neq 0$. Choice B is incorrect because no information is given about the value of $f(3)$, so $x-3$ may or may not be a factor of $f(x)$. Choice D is incorrect because $f(5) \\neq 0$.",
        calculator: false,
      },
      {
        question: "The expression $\\frac{x^{-2} y^{\\frac{1}{2}}}{x^{\\frac{1}{3}} y^{-1}}$, where x>1 and y>1, is equivalent to which of the following?",
        image: null,
        options:[
          {
            id:"0",
            options:"A",
            answer:"$\\frac{\\sqrt{y}}{\\sqrt[3]{x^2}}$",
          },
          {
            id:"1",
            options:"B",
            answer:"$\\frac{y \\sqrt{y}}{\\sqrt[3]{x^2}}$",
          },
          {
            id:"2",
            options:"C",
            answer:"$\\frac{y \\sqrt{y}}{x \\sqrt{x}}$",
          },
          {
            id:"3",
            options:"D",
            answer:"$\\frac{y \\sqrt{y}}{x^2 \\sqrt[3]{x}}$",
          },
        ],
        correctAnswerIndex: 3,
        explanation: "Choice D is correct. For $x>1$ and $y>1$, $x^{\\frac{1}{3}}$ and $y^{\\frac{1}{2}}$ are equivalent to $\\sqrt[3]{x}$ and $\\sqrt{y}$, respectively. Also, $x^{-2}$ and $y^{-1}$ are equivalent to $\\frac{1}{x^2}$ and $\\frac{1}{y}$, respectively. Therefore, the given expression can be rewritten as $\\frac{y \\sqrt{y}}{x^2 \\sqrt[3]{x}}$.\n\nChoices A, B, and C are incorrect because these choices are not equivalent to the given expression for $x>1$ and $y>1$.",
        calculator: false,
      },
      {
        question: "Which of the following is an equation of line l in the xy-plane above?",
        image: imagePaths['./q8.png'],
        options:[
          {
            id:"0",
            options:"A",
            answer:"x=1",
          },
          {
            id:"1",
            options:"B",
            answer:"y=1",
          },
          {
            id:"2",
            options:"C",
            answer:"y=x",
          },
          {
            id:"3",
            options:"D",
            answer:"y=x+1",
          },
        ],
        correctAnswerIndex: 3,
        explanation: "Choice D is correct. From the graph, the $y$-intercept of line $\\ell$ is $(0,1)$. The line also passes through the point $(1,2)$. Therefore, the slope of the line is $\\frac{2-1}{1-0}=\\frac{1}{1}$. In slope-intercept form, the equation for line $\\ell$ is $y=m x+b$, where $m$ is the slope and $b$ is the $y$-intercept. The resulting equation for line $\\ell$ is $y=1 x+1$, or $y=x+1$.\n\nChoice A is incorrect. This is the equation of the vertical line that passes through the point $(1,0)$. Choice B is incorrect. This is the equation of the horizontal line that passes through the point $(0,1)$. Choice C is incorrect. The line defined by this equation has y-intercept $(0,0)$, whereas line $\\ell$ has y-intercept $(0,1)$.",
        calculator: false,
      },
      {
        question: "The equation above shows how a temperature F, measured in degrees Fahrenheit, relates to a temperature C, measured in degrees Celsius. Based on the equation, which of the following must be true?\nI. A temperature increase of 1 degree Fahrenheit is equivalent to a temperature increase of $\\frac{5}{9}$ degree Celsius.\nII. A temperature increase of 1 degree Celsius is equivalent to a temperature increase of 1.8 degrees Fahrenheit.\n III. A temperature increase of $\\frac{5}{9}$ degree Fahrenheit is equivalent to a temperature increase of 1 degree Celsius.",
        image: imagePaths['./q9.png'],
        options:[
          {
            id:"0",
            options:"A",
            answer:"I only",
          },
          {
            id:"1",
            options:"B",
            answer:"II only",
          },
          {
            id:"2",
            options:"C",
            answer:"III only",
          },
          {
            id:"3",
            options:"D",
            answer:"I and II only",
          },
        ],
        correctAnswerIndex: 3,
        explanation: "Choice D is correct. If C is graphed against F, the slope of the line is equal to 5/9 degrees Celsius/degrees Fahrenheit, which means that for an increase of 1 degree Fahrenheit, the increase is 5/9 of 1 degree Celsius. Thus, statement I is true. This is the equivalent to saying that an increase of 1 degree Celsius is equal to an increase of 9/5 degrees Fahrenheit.\n\nSince 9/5=1.8, statement II is true. On the other hand, statement III is not true, since a temperature increase of 9/5 degrees Fahrenheit, not 5/9 degree Fahrenheit, is equal to a temperature increase of 1 degree Celsius.\n\nChoices A, B, and C are incorrect because each of these choices omits a true statement or includes a false statement.",
        calculator: false,
      },
      {
        question: "Which of the following is equivalent to the expression $x^2+6x+4$?\n\\u00A0\n",
        image: null,
        options:[
          {
            id:"0",
            options:"A",
            answer:"$(x+3)^2+5$",
          },
          {
            id:"1",
            options:"B",
            answer:"$(x+3)^2-5$",
          },
          {
            id:"2",
            options:"C",
            answer:"$(x-3)^2+5$",
          },
          {
            id:"3",
            options:"D",
            answer:"$(x-3)^2-5$",
          },
        ],
        correctAnswerIndex: 1,
        explanation: "Choice B is correct. The given quadratic expression is in standard form, and each answer choice is in vertex form. Completing the square converts the expression from standard form to vertex form. The first step is to rewrite the expression as follows: $x^2+6 x+4=x^2+6 x+9+4-9$. The first three terms of the revised expression can be rewritten as a perfect square as follows: $x^2+6 x+9+4-9=(x+3)^2+4-9$. Combining the constant terms gives $(x+3)^2-5$.\n\nChoice A is incorrect. Squaring the binomial and simplifying the expression in choice A gives $x^2+6 x+9+5$. Combining like terms gives $x^2+6 x+14$, not $x^2+6 x+4$. Choice C is incorrect. Squaring the binomial and simplifying the expression in choice C gives $x^2-6 x+9+5$. Combining like terms gives $x^2-6 x+14$, not $x^2+6 x+4$. Choice D is incorrect. Squaring the binomial and simplifying the expression in choice D gives $x^2-6 x+9-5$. Combining like terms gives $x^2-6 x+4$, not $x^2+6 x+4$.",
        calculator: false,
      },
      {
        question: "The table above shows some values of the functions w and t. For which value of x is $w(x)+t(x)=x$?",
        image: imagePaths['./q11.png'],
        options: [
            {
                id: "0",
                options: "A",
                answer: "1",
            },
            {
                id: "1",
                options: "B",
                answer: "2",
            },
            {
                id: "2",
                options: "C",
                answer: "3",
            },
            {
                id: "3",
                options: "D",
                answer: "4",
            },
        ],
        correctAnswerIndex: 1,
        explanation: "Choice B is correct. This question can be answered by making a connection between the table and the algebraic equation. Each row of the table gives a value of $x$ and its corresponding values in both $w(x)$ and $t(x)$. For instance, the first row gives $x=1$ and the corresponding values $w(1)=-1$ and $t(1)=-3$. The row in the table where $x=2$ is the only row that has the property $x=w(x)+t(x): 2=3+(-1)$. Therefore, choice B is the correct answer.\n\nChoice A is incorrect because when $x=1$, the equation $w(x)+t(x)=x$ is not true. According to the table, $w(1)=-1$ and $t(1)=-3$. Substituting the values of each term when $x=1$ gives $-1+(-3)=1$, an equation that is not true.\n\nChoice C is incorrect because when $x=3$, the equation $w(x)+t(x)=x$ is not true. According to the table, $w(3)=4$ and $t(3)=1$. Substituting the values of each term when $x=3$ gives $4+1=3$, an equation that is not true.\n\nChoice D is incorrect because when $x=4$, the equation $w(x)+t(x)=x$ is not true. According to the table, $w(4)=3$ and $t(4)=3$. Substituting the values of each term when $x=4$ gives $3+3=4$, an equation that is not true.",
        calculator: false,
    },
    {
        question: "The function f is defined by f(x)=(x+3)(x+1). The graph of f in the xy-plane is a parabola. Which of the following intervals contains the x-coordinate of the vertex of the graph of f?",
        image: null,
        options: [
            {
                id: "0",
                options: "A",
                answer: "-4<x<-3",
            },
            {
                id: "1",
                options: "B",
                answer: "-3<x<1",
            },
            {
                id: "2",
                options: "C",
                answer: "1<x<3",
            },
            {
                id: "3",
                options: "D",
                answer: "3<x<4",
            },
        ],
        correctAnswerIndex: 1,
        explanation: "Choice B is correct. The graph of a quadratic function in the $xy$-plane is a parabola. The axis of symmetry of the parabola passes through the vertex of the parabola. Therefore, the vertex of the parabola and the midpoint of the segment between the two $x$-intercepts of the graph have the same $x$-coordinate. Since $f(-3)=f(-1)=0$, the $x$-coordinate of the vertex is $\\frac{(-3)+(-1)}{2}=-2$. Of the shown intervals, only the interval in choice B contains $-2$. Choices A, C, and D are incorrect and may result from either calculation errors or misidentification of the graph's $x$-intercepts.",
        calculator: false,
    },
    {
        question: "The expression $\\frac{1}{3} x^2-2$ can be rewritten as $\\frac{1}{3}(x-k)(x+k)$, where k is a positive constant. What is the value of k?",
        image: null,
        options: [
            {
                id: "0",
                options: "A",
                answer: "2",
            },
            {
                id: "1",
                options: "B",
                answer: "6",
            },
            {
                id: "2",
                options: "C",
                answer: "$\\sqrt{2}$",
            },
            {
                id: "3",
                options: "D",
                answer: "$\\sqrt{6}$",
            },
        ],
        correctAnswerIndex: 3,
        explanation: "Choice D is correct. Factoring out the coefficient $\\frac{1}{3}$, the given expression can be rewritten as $\\frac{1}{3}(x^2-6)$. The expression $x^2-6$ can be approached as a difference of squares and rewritten as $(x-\\sqrt{6})(x+\\sqrt{6})$. Therefore, $k$ must be $\\sqrt{6}$. Choice A is incorrect. If $k$ were 2, then the expression given would be rewritten as $\\frac{1}{3}(x-2)(x+2)$, which is equivalent to $\\frac{1}{3} x^2-\\frac{4}{3}$, not $\\frac{1}{3} x^2-2$. Choice B is incorrect. This may result from incorrectly factoring the expression and finding $(x-6)(x+6)$ as the factored form of the expression. Choice C is incorrect. This may result from incorrectly distributing the $\\frac{1}{3}$ and rewriting the expression as $\\frac{1}{3}(x^2-2)$.",
        calculator: false,
    },
    {
        question: "In the equation above, k is a constant. If x=9, what is the value of k?",
        image: imagePaths['./q12.png'],
        options: [
            {
                id: "0",
                options: "A",
                answer: "1",
            },
            {
                id: "1",
                options: "B",
                answer: "7",
            },
            {
                id: "2",
                options: "C",
                answer: "16",
            },
            {
                id: "3",
                options: "D",
                answer: "79",
            },
        ],
        correctAnswerIndex: 3,
        explanation: "Choice D is correct. Substituting 9 for $x$ in the equation $\\sqrt{k+2}-x=0$ gives $\\sqrt{k+2}-9=0$, which can be rewritten as $\\sqrt{k+2}=9$. It follows that $k+2$ must equal 81; thus, $k=79$. Choices $A, B$, and $C$ are incorrect because substituting any of these values for $k$ in the equation $\\sqrt{k+2}-9=0$ gives a false statement. For example, if $k=7$, the equation becomes $\\sqrt{(7+2)}-9=\\sqrt{9}-9=3-9=0$, which is false.",
        calculator: false,
    },
    {
        question: "Which of the following is equivalent to $\\frac{4 x^2+6 x}{4 x+2}$?",
        image: null,
        options: [
            {
                id: "0",
                options: "A",
                answer: "$x$",
            },
            {
                id: "1",
                options: "B",
                answer: "$x+4$",
            },
            {
                id: "2",
                options: "C",
                answer: "$x-\\frac{2}{4 x+2}$",
            },
            {
                id: "3",
                options: "D",
                answer: "$x+1-\\frac{2}{4 x+2}$",
            },
        ],
        correctAnswerIndex: 3,
        explanation: "Choice D is correct. Dividing $4 x^2+6 x$ by $4 x+2$ gives $x+1$. Therefore, the expression $\\frac{4 x^2+6 x}{4 x+2}$ is equivalent to $x+1-\\frac{2}{4 x+2}$. Alternate approach: The numerator of the given expression, $4 x^2+6 x$, can be rewritten in terms of the denominator, $4 x+2$, as follows: $4 x^2+2 x+4 x+2-2$, or $x(4 x+2)+(4 x+2)-2$. So the given expression can be rewritten as $\\frac{x(4 x+2)+(4 x+2)-2}{4 x+2}=x+1-\\frac{2}{4 x+2}$. Choices A and B are incorrect and may result from incorrectly factoring the numerator and denominator of the expression $\\frac{4 x^2+6 x}{4 x+2}$ and then incorrectly identifying common factors in the two factored expressions. Choice $C$ is incorrect and may result from a variety of mistakes made when performing long division.",
        calculator: false,
    },
    {
        question: "What are the solutions of the quadratic equation $4x^2-8 x-12=0$?",
        image: null,
        options: [
            {
                id: "0",
                options: "A",
                answer: "x=-1 and x=-3",
            },
            {
                id: "1",
                options: "B",
                answer: "$x=-1$ and $x=3$",
            },
            {
                id: "2",
                options: "C",
                answer: "x=1 and x=-3",
            },
            {
                id: "3",
                options: "D",
                answer: "x=1 and x=3",
            },
        ],
        correctAnswerIndex: 1,
        explanation: "Choice B is correct. Dividing both sides of the quadratic equation $4 x^2-8 x-12=0$ by 4 yields $x^2-2 x-3=0$. The equation $x^2-2 x-3=0$ can be factored as $(x+1)(x-3)=0$. This equation is true when $x+1=0$ or $x-3=0$. Solving for $x$ gives the solutions to the original quadratic equation: $x=-1$ and $x=3$. Alternate approach: After dividing both sides of the given equation by 4 , the equation obtained can be rewritten as $x^2-2 x+1=4$, or equivalently $(x-1)^2=4$. Therefore, $x-1$ must either equal $-2$ or $2$, so $x$ must either equal $-1$ or $3$. Choices A and C are incorrect because -3 is not a solution of $4 x^2-8 x-12=0$, and 1 is not a solution of $4 x^2-8 x-12=0$. Choice D is incorrect because 1 is not a solution of $4 x^2-8 x-12=0$.",
        calculator: false,
    },
    // {
    //     question: "If $' \\textstyle{ a^{2}+b^{2}=z}'$ ‍ and $ab=y$, which of the following is equivalent to $4z+8y$?",
    //     image: null,
    //     options: [
    //         {
    //             id: "0",
    //             options: "A",
    //             answer: "$(a+2b)^2$",
    //         },
    //         {
    //             id: "1",
    //             options: "B",
    //             answer: "$(2a+2b)^2$",
    //         },
    //         {
    //             id: "2",
    //             options: "C",
    //             answer: "$(4a+4b)^2$",
    //         },
    //         {
    //             id: "3",
    //             options: "D",
    //             answer: "$(4a+8b)^2$",
    //         },
    //     ],
    //     correctAnswerIndex: 1,
    //     explanation: "Choice B is correct. Substituting $a^2+b^2$ for $z$ and $ab$ for $y$ into the expression $4z+8y$ gives $4(a^2+b^2)+8ab$. Simplifying further, we have $4a^2+4b^2+8ab$, which can be factored as $4(a^2+2ab+b^2)$. Since $a^2+2ab+b^2=(a+b)^2$, it follows that $4z+8y$ is equivalent to $(2a+2b)^2$. Choices A, C, and D are incorrect because they do not correctly represent the given expression.",
    //     calculator: false,
    // },
    {
        question: "Which is equivalent to $ 9^{\\frac{3}{4}}$?",
        image: null,
        options: [
            {
                id: "0",
                options: "A",
                answer: "$\\sqrt[3]{9}$",
            },
            {
                id: "1",
                options: "B",
                answer: "$\\sqrt[4]{9}$",
            },
            {
                id: "2",
                options: "C",
                answer: "$\\sqrt{3}$",
            },
            {
                id: "3",
                options: "D",
                answer: "$3 \\sqrt{3}$",
            },
        ],
        correctAnswerIndex: 3,
        explanation: "Choice D is correct. Since $9$ can be rewritten as $3^2$, $9^\\frac{3}{4}$ is equivalent to $\\sqrt[4]{9^3}$. Applying the properties of exponents, this can be written as $\\sqrt[4]{3^6}$, which can further be rewritten as $\\sqrt{3^3}$, an expression that is equivalent to $3 \\sqrt{3}$. Choice A is incorrect; it is equivalent to $9^\\frac{1}{3}$. Choice B is incorrect; it is equivalent to $9^\\frac{1}{4}$. Choice C is incorrect; it is equivalent to $3^\\frac{1}{2}$.",
        calculator: false,
    },
    {
        question: "If $\\sqrt{x}+\\sqrt{9}=\\sqrt{64}$, what is the value of x?",
        image: null,
        options: [
            {
                id: "0",
                options: "A",
                answer: "$\\sqrt{5}$",
            },
            {
                id: "1",
                options: "B",
                answer: "5",
            },
            {
                id: "2",
                options: "C",
                answer: "25",
            },
            {
                id: "3",
                options: "D",
                answer: "55",
            },
        ],
        correctAnswerIndex: 2,
        explanation: "Choice C is correct. The two numerical expressions in the given equation can be simplified as $\\sqrt{9}=3$ and $\\sqrt{64}=8$, so the equation can be rewritten as $\\sqrt{x}+3=8$, or $\\sqrt{x}=5$. Squaring both sides of the equation gives $x=25$. Choice A is incorrect and may result from a misconception about how to square both sides of $\\sqrt{x}=5$ to determine the value of $x$. Choice B is incorrect. The value of $\\sqrt{x}$, not $x$, is 5. Choice D is incorrect and represents a misconception about the properties of radicals. While it is true that $55+9=64$, it is not true that $\\sqrt{55}+\\sqrt{9}=\\sqrt{64}$.",
        calculator: false,
    },
    {
        question: "The equation below has a, b, c, and d as constants and is equal to 0. If the equation has roots -1, -3, and 5, which of the following is a factor of           $ a x^3+b x^2+c x+d$?",
        image: null,
        options:[
            {
                id:"0",
                options:"A",
                answer:"$\\normalsize x-1$",
            },
            {
                id:"1",
                options:"B",
                answer:"$x+1$",
            },
            {
                id:"2",
                options:"C",
                answer:"$x-3$",
            },
            {
                id:"3",
                options:"D",
                answer:"$x+5$",
            },
        ],
        correctAnswerIndex: 1,
        explanation: "Choice B is correct. The factor theorem states that a polynomial equation with roots $-1,-3$, and 5 must have factors of $(x+1)$, $(x+3)$ and $(x-5)$. Of the answer choices provided, only $x+1$ appears from this list of possible factors.\n\nChoices A, C, and D are incorrect because a third-degree equation cannot have more than three roots. Based on the factor theorem, choice A implies that 1 is a root of the equation, choice C implies that 3 is a root of the equation, and choice D implies that -5 is a root of the equation. However, none of these roots appears in the given list.",
        calculator: false,
    },
    {
        question: "In air, the speed of sound S, in meters per second, is a linear function of the air temperature T, in degrees Celsius, and is given by $ S(T)=0.6 T+331.4$. Which of the following statements is the best interpretation of the number 331.4 in this context?",
        image: null,
        options:[
            {
                id:"0",
                options:"A",
                answer:"The speed of sound at $0^{\\circ} \\mathrm{C}$",
            },
            {
                id:"1",
                options:"B",
                answer:"The speed of sound at $0.6^{\\circ} \\mathrm{C}$",
            },
            {
                id:"2",
                options:"C",
                answer:"The increase in the speed of sound that corresponds to an increase of $1^{\\circ} \\mathrm{C}$",
            },
            {
                id:"3",
                options:"D",
                answer:"The increase in the speed of sound that corresponds to an increase of $0.6^{\\circ} \\mathrm{C}$",
            },
        ],
        correctAnswerIndex: 0,
        explanation: "Choice A is correct. The constant term 331.4 in $S(T)=0.6 T+331.4$ is the value of $S$ when $T=0$. The value $T=0$ corresponds to a temperature of $0^{\circ} \mathrm{C}$. Since $S(T)$ represents the speed of sound, 331.4 is the speed of sound, in meters per second, when the temperature is $0^{\circ} \mathrm{C}$.\n\nChoice B is incorrect. When $T=0.6^{\circ} \mathrm{C}, S(T)=0.6(0.6)+331.4=331.76$, not 331.4 , meters per second. Choice C is incorrect. Based on the given function, the speed of sound increases by 0.6 meters per second for every increase of temperature by $1^{\circ} \mathrm{C}$, as shown by the equation $0.6(T+1)+331.4=(0.6 T+331.4)+0.6$. Choice D is incorrect. An increase in the speed of sound, in meters per second, that corresponds to an increase of $0.6^{\circ} \mathrm{C}$ is $0.6(0.6)=0.36$",
        calculator: false,
    },
    {
        question: "The vertex of the parabola in the xy-plane above is (0, c). Which of the following is true about the parabola with the equation\n\n$y=-a(x-b)^2+c ?$\nA. The vertex is (b, c) and the graph opens upward.\nB. The vertex is (b, c) and the graph opens downward.\nC. The vertex is (-b, c) and the graph opens upward.\nD. The vertex is (-b, c) and the graph opens downward.",
        image: imagePaths['./q14.png'],
        options:[
            {
                id:"0",
                options:"A",
                answer:"The vertex is (b, c) and the graph opens upward.",
            },
            {
                id:"1",
                options:"B",
                answer:"The vertex is (b, c) and the graph opens downward.",
            },
            {
                id:"2",
                options:"C",
                answer:"The vertex is (-b, c) and the graph opens upward.",
            },
            {
                id:"3",
                options:"D",
                answer:"The vertex is (-b, c) and the graph opens downward.",
            },
        ],
        correctAnswerIndex: 1,
        explanation: "Choice B is correct. Since the shown parabola opens upward, the coefficient of $x^2$ in the equation $y=a x^2+c$ must be positive. Given that $a$ is positive, $-a$ is negative, and therefore the graph of the equation $y=-a(x-b)^2+c$ will be a parabola that opens downward. The vertex of this parabola is $(b, c)$, because the maximum value for $y$ of $c$ is reached when $x=b$. Therefore, the answer must be choice B.\n\nChoices A and C are incorrect. The coefficient of $x^2$ in the equation $y=-a(x-b)^2+c$ is negative. Therefore, the parabola with this equation opens downward, not upward. Choice D is incorrect because the vertex of this parabola is $(b, c)$, not $(-b, c)$, because the maximum value for $y$ of $c$ is reached when $x=b$.",
        calculator: false,
    },
    {
        question: "Which of the following expressions is equivalent to $\\frac{x^2-2 x-5}{x-3}$ ?",
        image: null,
        options:[
            {
                id:"0",
                options:"A",
                answer:"$x-5-\\frac{20}{x-3}$",
            },
            {
                id:"1",
                options:"B",
                answer:"$x-5-\\frac{10}{x-3}$",
            },
            {
                id:"2",
                options:"C",
                answer:"$x+1-\\frac{8}{x-3}$",
            },
            {
                id:"3",
                options:"D",
                answer:"$x+1-\\frac{2}{x-3}$",
            },
        ],
        correctAnswerIndex: 3,
        explanation: "Choice $D$ is correct. The numerator of the given expression can be rewritten in terms of the denominator, $x-3$, as follows: $x^2-2 x-5=x^2-3 x+x-3-2$, which is equivalent to $x(x-3)+(x-3)-2$. So the given expression is equivalent to $\\frac{x(x-3)+(x-3)-2}{x-3}=\\frac{x(x-3)}{x-3}+\\frac{x-3}{x-3}-\\frac{2}{x-3}$. Since the given expression is defined for $x \\neq 3$, the expression can be rewritten as $x+1-\\frac{2}{x-3}$\n\nLong division can also be used as an alternate approach. Choices A, B, and C are incorrect and may result from errors made when dividing the two polynomials or making use of structure.",
        calculator: false,
    },
    {
        question: "If $\\frac{8}{x}=160$, what is the value of $x$ ?",
        image: null,
        options:[
            {
                id:"0",
                options:"A",
                answer:"1,280",
            },
            {
                id:"1",
                options:"B",
                answer:"80",
            },
            {
                id:"2",
                options:"C",
                answer:"20",
            },
            {
                id:"3",
                options:"D",
                answer:"0.05",
            },
        ],
        correctAnswerIndex: 3,
        explanation: "Choice $D$ is correct. Multiplying both sides of the given equation by $x$ yields $160 x=8$. Dividing both sides of the equation $160 x=8$ by 160 results in $x=\\frac{8}{160}$. Reducing $\\frac{8}{160}$ to its simplest form gives $x=\\frac{1}{20}$, or its decimal equivalent 0.05 .\n\nChoice A is incorrect and may result from multiplying, instead of dividing, the left-hand side of the given equation by 160 . Choice B is incorrect and may result from a computational error. Choice $C$ is incorrect. This is the value of $\\frac{1}{x}$.",
        calculator: false,
    },
    {
        question: "In the equation above, T represents Brittany's total take-home pay, in dollars, for her first week of work, where h represents the number of hours she worked that week and 1,000 represents a sign-on bonus. If Brittany's total take-home pay was 1,576, for how many hours was Brittany paid for her first week of work?",
        image: null,
        options:[
            {
                id:"0",
                options:"A",
                answer:"16",
            },
            {
                id:"1",
                options:"B",
                answer:"32",
            },
            {
                id:"2",
                options:"C",
                answer:"55",
            },
            {
                id:"3",
                options:"D",
                answer:"88",
            },
        ],
        correctAnswerIndex: 1,
        explanation: "Choice B is correct. Since Brittany's total take-home pay was $1,576$, the value 1,576 can be substituted for $T$ in the given equation $T=1,000+18h$ to give $1,576=1,000+18h$. Subtracting 1,000 from both sides of this equation gives $576=18h$. Dividing both sides of this equation by 18 gives $32=h$. Therefore, Brittany was paid for 32 hours for her first week of work.\n\nChoice A is incorrect. This is half the number of hours Brittany was paid for. Choice C is incorrect and may result from dividing 1,000 by 18 . Choice D is incorrect and may result from dividing 1,576 by 18.",
        calculator: false,
    },
    {
        question: "Which of the following is NOT a factor of the polynomial $2 x^3+11 x^2+5 x$?",
        image: null,
        options:[
            {
                id:"0",
                options:"A",
                answer:"x",
            },
            {
                id:"1",
                options:"B",
                answer:"x+5",
            },
            {
                id:"2",
                options:"C",
                answer:"2x+1",
            },
            {
                id:"3",
                options:"D",
                answer:"2x+5",
            },
        ],
        correctAnswerIndex: 3,
        explanation: "Choice D is correct. Since each term in the given polynomial expression has a common factor of x, the expression can first be rewritten as $x(2 x^2+11 x+5)$. The expression $2 x^2+11 x+5$ can be factored completely by finding two integers with a product of 10 (the leading coefficient multiplied by the constant term) and a sum of 11 (the coefficient of the middle term). Since $1(10)=10$ and $1+10=11$, the two integers are 10 and 1. Thus, $2 x^2+11 x+5$ can be rewritten as $2 x^2+10 x+1 x+5$. Factoring this expression by grouping yields $(x+5)(2 x+1)$. The three factors for the given expression are x, x+5, and 2x+1. Choice D is the only choice that isn't a factor of the given polynomial. Choices A, B, and C are incorrect because each presents one of the factors of the given polynomial expression.",
        calculator: false,
    },
    {
        question: "What is the solution to the equation $\\frac{2(x+1)}{x+5}=1-\\frac{1}{x+5}$?",
        image: null,
        options:[
            {
                id:"0",
                options:"A",
                answer:"0",
            },
            {
                id:"1",
                options:"B",
                answer:"2",
            },
            {
                id:"2",
                options:"C",
                answer:"3",
            },
            {
                id:"3",
                options:"D",
                answer:"5",
            },
        ],
        correctAnswerIndex: 1,
        explanation: "Choice B is correct. Since $\\frac{x+5}{x+5}$ is equivalent to 1, the right-hand side of the given equation can be rewritten as $\\frac{x+5}{x+5}-\\frac{1}{x+5}$, or $\\frac{x+4}{x+5}$. Since the left- and right-hand sides of the equation $\\frac{2(x+1)}{x+5}=\\frac{x+4}{x+5}$ have the same denominator, it follows that $2(x+1)=x+4$. Applying the distributive property of multiplication to the expression $2(x+1)$ yields $2(x)+2(1)$, or $2 x+2$. Therefore, $2 x+2=x+4$. Subtracting $x$ and 2 from both sides of this equation yields $x=2$. Choices A, C, and D are incorrect. If $x=0$, then $\\frac{2(0+1)}{0+5}=1-\\frac{1}{0+5}$. This can be rewritten as $\\frac{2}{5}=\\frac{4}{5}$, which is a false statement. Therefore, 0 isn't a solution to the given equation. Substituting 3 and 5 into the given equation yields similarly false statements.",
        calculator: false,
    },
    {
        question: "A scientist tested a group of adults aged 30 to 85 . The graph shows the quadratic function S, which models their scores on a language test as a function of their age x, in years. Which of the following could define S?",
        image: imagePaths['./q15.png'],
        options:[
            {
                id:"0",
                options:"A",
                answer:"$-\\frac{1}{320}(x-50)^2+55$",
            },
            {
                id:"1",
                options:"B",
                answer:"$-\\frac{1}{320}(x-55)^2+50$",
            },
            {
                id:"2",
                options:"C",
                answer:"$\\frac{1}{320}(x-50)^2+55$",
            },
            {
                id:"3",
                options:"D",
                answer:"$\\frac{1}{320}(x-55)^2+50$",
            },
        ],
        correctAnswerIndex: 1,
        explanation: "Choice B is correct. The vertex form of a quadratic function $y=f(x)$ in the xy-plane is represented by the equation $f(x)=a(x-h)^2+k$, where $(h, k)$ represents the vertex. A positive value of $a$ results in a vertex that's the lowest point of the graph of $y=f(x)$, and a negative value of $a$ results in a vertex that's the highest point of the graph of $y=f(x)$. The vertex of the given graph has its highest point at approximately $(55,50)$. Therefore, $a$ must be negative. The equation $S(x)=-\\frac{1}{320}(x-55)^2+50$ represents a graph with a vertex at $(55,50)$ with a value of $a$ that is negative. Choice $A$ is incorrect. The vertex of the graph is $(55,50)$, not $(50,55)$. Choice $C$ is incorrect. The positive value of $a$ results in the vertex being the lowest point of the graph instead of the highest. Choice $D$ is incorrect and may result from using an incorrect vertex point and a positive value of $a$, which would result in the vertex being the lowest point of the graph instead of the highest.",
        calculator: false,
    },
    {
        question: "The table above gives selected values of a polynomial function p. Based on the values in the table, which of the following must be a factor of p?",
        image: imagePaths['./q16.png'],
        options:[
            {
                id:"0",
                options:"A",
                answer:"$(x-3)$",
            },
            {
                id:"1",
                options:"B",
                answer:"$(x+3)$",
            },
            {
                id:"2",
                options:"C",
                answer:"$(x-1)(x+2)$",
            },
            {
                id:"3",
                options:"D",
                answer:"$(x+1)(x-2)$",
            },
        ],
        correctAnswerIndex: 3,
        explanation: "Choice D is correct. According to the table, when $x$ is -1 or $2$, $p(x)=0$. Therefore, two $x$-intercepts of the graph of $p$ are $(-1,0)$ and $(2,0)$. Since $(-1,0)$ and $(2,0)$ are $x$-intercepts, it follows that $(x+1)$ and $(x-2)$ are factors of the polynomial equation. This is because when $x=-1$, the value of $x+1$ is 0. Similarly, when $x=2$, the value of $x-2$ is 0. Therefore, the product $(x+1)(x-2)$ is a factor of the polynomial function $p$. Choice A is incorrect. The factor $x-3$ corresponds to an $x$-intercept of $(3,0)$, which isn't present in the table. Choice B is incorrect. The factor $x+3$ corresponds to an $x$-intercept of $(-3,0)$, which isn't present in the table. Choice $C$ is incorrect. The factors $x-1$ and $x+2$ correspond to $x$-intercepts $(1,0)$ and $(-2,0)$, respectively, which aren't present in the table.",
        calculator: false,
    },
    {
        question: "What value of x satisfies the equation $\\frac{4 x^2}{x^2-9}-\\frac{2 x}{x+3}=\\frac{1}{x-3}$?",
        image: null,
        options:[
            {
                id:"0",
                options:"A",
                answer:"-3",
            },
            {
                id:"1",
                options:"B",
                answer:"$-\\frac{1}{2}$",
            },
            {
                id:"2",
                options:"C",
                answer:"$\\frac{1}{2}$",
            },
            {
                id:"3",
                options:"D",
                answer:"3",
            },
        ],
        correctAnswerIndex: 2,
        explanation: "Choice C is correct. Each fraction in the given equation can be expressed with the common denominator $x^2-9$. Multiplying $\\frac{2 x}{x+3}$ by $\\frac{x-3}{x-3}$ yields $\\frac{2 x^2-6 x}{x^2-9}$, and multiplying $\\frac{1}{x-3}$ by $\\frac{x+3}{x+3}$ yields $\\frac{x+3}{x^2-9}$. Therefore, the given equation can be written as $\\frac{4 x^2}{x^2-9}-\\frac{2 x^2-6 x}{x^2-9}=\\frac{x+3}{x^2-9}$. Multiplying each fraction by the denominator results in the equation $4 x^2-\\left(2 x^2-6 x\\right)=x+3$, or $2 x^2+6 x=x+3$. This equation can be solved by setting a quadratic expression equal to 0, then solving for $x$. Subtracting $x+3$ from both sides of this equation yields $2 x^2+5 x-3=0$. The expression $2 x^2+5 x-3$ can be factored, resulting in the equation $(2 x-1)(x+3)=0$. By the zero product property, $2 x-1=0$ or $x+3=0$. To solve for $x$ in $2 x-1=0,1$ can be added to both sides of the equation, resulting in $2 x=1$. Dividing both sides of this equation by 2 results in $x=\\frac{1}{2}$. Solving for $x$ in $x+3=0$ yields $x=-3$. However, this value of $x$ would result in the second fraction of the original equation having a denominator of 0. Therefore, $x=-3$ is an extraneous solution. Thus, the only value of $x$ that satisfies the given equation is $x=\\frac{1}{2}$. Choice A is incorrect and may result from solving $x+3=0$ but not realizing that this solution is extraneous because it would result in a denominator of 0 in the second fraction. Choice B is incorrect and may result from a sign error when solving $2 x-1=0$ for $x$. Choice D is incorrect and may result from a calculation error.",
        calculator: false,
    },
    {
        question: "Which of the following is equivalent to $\\sqrt[4]{x^2+8 x+16}$, where x>0?",
        image: null,
        options:[
            {
                id:"0",
                options:"A",
                answer:"$(x+4)^4$",
            },
            {
                id:"1",
                options:"B",
                answer:"$(x+4)^2$",
            },
            {
                id:"2",
                options:"C",
                answer:"$(x+4)$",
            },
            {
                id:"3",
                options:"D",
                answer:"$(x+4)^{\\frac{1}{2}}$",
            },
        ],
        correctAnswerIndex: 3,
        explanation: "Choice D is correct. The given expression can also be written as $\\left(x^2+8 x+16\\right)^{\\frac{1}{4}}$. The trinomial $x^2+8 x+16$ can be rewritten in factored form as $(x+4)^2$. Thus, the entire expression can be rewritten as $\\left((x+4)^2\\right)^{\\frac{1}{4}}$. Simplifying the exponents yields $(x+4)^{\\frac{1}{2}}$. Choices A, B, and C are incorrect and may result from errors made when simplifying the exponents in the expression $\\left((x+4)^2\\right)^{\\frac{1}{4}}$.",
        calculator: false,
    },
    {
        question: "The equation $A=1,321+0.3433 m$ can be used to estimate the body surface area A, in square centimeters, of a child with mass m, in grams, where $3,000 \\leq m \\leq 30,000$. Which of the following statements is consistent with the equation?",
        image: null,
        options:[
            {
                id:"0",
                options:"A",
                answer:"For each increase of 1 gram in mass, A increases by approximately 0.3433 square centimeter.",
            },
            {
                id:"1",
                options:"B",
                answer:"For each increase of 0.3433 gram in mass, A increases by approximately 1 square centimeter.",
            },
            {
                id:"2",
                options:"C",
                answer:"For each increase of 1 gram in mass, A increases by approximately 1,321 square centimeters.",
            },
            {
                id:"3",
                options:"D",
                answer:"For each increase of 1,321 grams in mass, A increases by approximately 1 square centimeter.",
            },
        ],
        correctAnswerIndex: 0,
        explanation: "Choice A is correct. The equation can be represented by a linear graph, where the slope represents the ratio of the change in the dependent variable for every l-unit change in the independent variable. In this context, the slope is the change in A, the body surface area in square centimeters, for every increase by 1 in m, the mass in grams. In the equation, the slope is represented by the coefficient m of the independent variable, which is 0.3433 . Thus, for each increase of 1 gram in mass, A increases by approximately 0.3433 square centimeter. Choice B is incorrect and may result from incorrectly interpreting the slope in this context. Choices C and D are incorrect. These choices compare a mass, in grams, to an area, in square centimeters. However, the value 1,321 refers only to the initial estimated body surface area A, in square centimeters.",
        calculator: false,
    },
    {
        question: "The graph in the xy-plane of the linear function f contains the point (3,4). For every increase of 5 units in x, f(x) increases by 3 units. Which of the following equations defines the function?",
        image: null,
        options:[
            {
                id:"0",
                options:"A",
                answer:"$f(x)=-\\frac{5}{3} x+9$",
            },
            {
                id:"1",
                options:"B",
                answer:"$f(x)=-\\frac{3}{5} x+\\frac{29}{5}$",
            },
            {
                id:"2",
                options:"C",
                answer:"$f(x)=\\frac{3}{5} x+\\frac{11}{5}$",
            },
            {
                id:"3",
                options:"D",
                answer:"$f(x)=\\frac{5}{3} x-1$",
            },
        ],
        correctAnswerIndex: 2,
        explanation: "Choice C is correct. The slope of the graph of a linear function $f$ in the $xy$-plane is defined as the change in $f(x)$ divided by the change in $x$. Since it's given that $f(x)$ increases by 3 units for every increase of 5 units in $x$, the slope is $\\frac{3}{5}$. Therefore, the function can be written in slope-intercept form as $f(x)=\\frac{3}{5}x+b$, where $b$ is a constant. Since the graph of the function contains the point $(3,4)$, $f(3)=4$. Substituting these values for $x$ and $f(x)$ into the slope-intercept form of the equation yields $4=\\frac{3}{5}(3)+b$, which can be rewritten as $4=\\frac{9}{5}+b$. Subtracting $\\frac{9}{5}$ from each side of the equation yields $b=\\frac{11}{5}$. Substituting $b=\\frac{11}{5}$ into the equation $f(x)=\\frac{3}{5}x+b$ yields $f(x)=\\frac{3}{5}x+\\frac{11}{5}$. Choices A, B, and D are incorrect and may result from misinterpreting the definition of the slope of a line.",
        calculator: false,
    },
    {
        question: "Which of the following expressions is equivalent to\n$\\frac{f(x)}{g(x)}$, for x>3?",
        options:[
            {
                id:"0",
                options:"A",
                answer:"$\\frac{1}{x+1}$",
            },
            {
                id:"1",
                options:"B",
                answer:"$\\frac{x+3}{x+1}$",
            },
            {
                id:"2",
                options:"C",
                answer:"$\\frac{x(x-3)}{x+1}$",
            },
            {
                id:"3",
                options:"D",
                answer:"$\\frac{x(x+3)}{x+1}$",
            },
        ],
        correctAnswerIndex: 3,
        explanation: "Choice D is correct. Since $x^3-9x=x(x+3)(x-3)$ and $x^2-2x-3=(x+1)(x-3)$, the fraction $\\frac{f(x)}{g(x)}$ can be written as $\\frac{x(x+3)(x-3)}{(x+1)(x-3)}$. It is given that $x>3$, so the common factor $x-3$ is not equal to 0. Therefore, the fraction can be further simplified to $\\frac{x(x+3)}{x+1}$. Choices A, B, and C are incorrect and may result from errors in factoring or omitting terms.",
        calculator: false,
        image: imagePaths['./q17.png']
    },
    {
        question: "What is the solution set of the equation $\\sqrt{2x+6}+4=x+3$?",
        image: null,
        options:[
            {
                id:"0",
                options:"A",
                answer:"$\\{-1\\}$",
            },
            {
                id:"1",
                options:"B",
                answer:"$\\{5\\}$",
            },
            {
                id:"2",
                options:"C",
                answer:"$\\{-1,5\\}$",
            },
            {
                id:"3",
                options:"D",
                answer:"$\\{0,-1,5\\}$",
            },
        ],
        correctAnswerIndex: 1,
        explanation: "Choice B is correct. By subtracting 4 from both sides, we get $\\sqrt{2x+6}=x-1$. Squaring both sides yields $2x+6=x^2-2x+1$, which simplifies to $x^2-4x-5=0$. Factoring the quadratic gives $(x-5)(x+1)=0$, so the solutions are $x=5$ and $x=-1$. However, when substituting $x=-1$ into the original equation, it leads to a false statement, while $x=5$ satisfies the equation. Therefore, the solution set is $\\{5\\}$. Choices A, C, and D are incorrect because they include values that do not satisfy the equation.",
        calculator: false
    },
    {
        question: "If $\\frac{2a}{b}=\\frac{1}{2}$, what is the value of $\\frac{b}{a}$?",
        image: null,
        options:[
            {
                id:"0",
                options:"A",
                answer:"$\\frac{1}{8}$",
            },
            {
                id:"1",
                options:"B",
                answer:"$\\frac{1}{4}$",
            },
            {
                id:"2",
                options:"C",
                answer:"2",
            },
            {
                id:"3",
                options:"D",
                answer:"4",
            },
        ],
        correctAnswerIndex: 3,
        explanation: "Choice D is correct. Dividing both sides of the equation $\\frac{2a}{b}=\\frac{1}{2}$ by 2 gives $\\frac{a}{b}=\\frac{1}{4}$. Taking the reciprocal of both sides yields $\\frac{b}{a}=4$. Choice A is incorrect because it represents $\\frac{a}{2b}$, not $\\frac{b}{a}$. Choice B is incorrect because it represents $\\frac{a}{b}$, not $\\frac{b}{a}$. Choice C is incorrect because it represents $\\frac{b}{2a}$, not $\\frac{b}{a}$.",
        calculator: false
    },
    {
        question: "In the xy-plane above, lines k, l, and p are shown. Which of the following lists the slopes of the lines from least to greatest?",
        image: imagePaths['./q18.png'],
        options:[
            {
                id:"0",
                options:"A",
                answer:"The slope of l, the slope of k, the slope of p",
            },
            {
                id:"1",
                options:"B",
                answer:"The slope of p, the slope of k, the slope of l",
            },
            {
                id:"2",
                options:"C",
                answer:"The slope of k, the slope of l, the slope of p",
            },
            {
                id:"3",
                options:"D",
                answer:"The slope of k, the slope of p, the slope of l",
            },
        ],
        correctAnswerIndex: 3,
        explanation: "Choice D is correct. Based on visual inspection of the lines in the $xy$-plane, the slope of $k$ is negative because the $y$-values decrease as the $x$-values increase. The slopes of $\ell$ and $p$ are positive because the $y$-values increase as the $x$-values increase. Lines $p$ and $\ell$ both pass through the origin. Furthermore, for any fixed positive $x$-coordinate, the $y$-coordinate of the corresponding point on $p$ is less than the $y$-coordinate of the corresponding point on $\ell$. Hence, the slope of $p$ is less than the slope of $\ell$. Therefore, the slopes of the lines from least to greatest can be ordered as the slope of $k$, the slope of $p$, the slope of $\ell$.",
        calculator: false
    },
    {
        question: "An oceanographer uses the equation $s=\\frac{3}{2} p$ to model the speed s, in knots, of an ocean wave, where p represents the period of the wave, in seconds. Which of the following represents the period of the wave in terms of the speed of the wave?",
        image: null,
        options:[
            {
                id:"0",
                options:"A",
                answer:"$p=\\frac{2}{3} s$",
            },
            {
                id:"1",
                options:"B",
                answer:"$p=\\frac{3}{2} s$",
            },
            {
                id:"2",
                options:"C",
                answer:"$p=\\frac{2}{3}+s$",
            },
            {
                id:"3",
                options:"D",
                answer:"$p=\\frac{3}{2}+s$",
            },
        ],
        correctAnswerIndex: 0,
        explanation: "Choice A is correct. It's given that $p$ represents the period of the ocean wave, so the equation $s=\\frac{3}{2} p$ can be solved for $p$ to represent the period of the wave in terms of the speed of the wave. Multiplying both sides of the equation by the reciprocal of $\\frac{3}{2}$ will isolate $p$. This yields $\\frac{2}{3} s=\\frac{2}{3}\\left(\\frac{3}{2} p\\right)$, which simplifies to $\\frac{2}{3} s=p$. Therefore, $p=\\frac{2}{3} s$.\n\nChoices B, C, and D are incorrect and may result from errors made when rearranging the equation to solve for $p$.",
        calculator: false
    },
    {
        question: "Which of the following could be the equation of the graph above?",
        image: imagePaths['./q19.png'],
        options:[
            {
                id:"0",
                options:"A",
                answer:"$y=x(x-2)(x+3)$",
            },
            {
                id:"1",
                options:"B",
                answer:"$y=x^2(x-2)(x+3)$",
            },
            {
                id:"2",
                options:"C",
                answer:"$y=x(x+2)(x-3)$",
            },
            {
                id:"3",
                options:"D",
                answer:"$y=x^2(x+2)(x-3)$",
            },
        ],
        correctAnswerIndex: 1,
        explanation: "Choice B is correct. The $x$-coordinates of the $x$-intercepts of the graph are $-3,0$, and 2 . This means that if $y=f(x)$ is the equation of the graph, where $f$ is a polynomial function, then $(x+3), x$, and $(x-2)$ are factors of $f$. Of the choices given, A and $B$ have the correct factors. However, in choice $A, x$ is raised to the first power, and in choice $B, x$ is raised to the second power. At $x=0$, the graph touches the $x$-axis but doesn't cross it. This means that $x$, as a factor of $f$, is raised to an even power. If $x$ were raised to an odd power, then the graph would cross the $x$-axis. Alternatively, in choice $B, f$ is a fourth-degree polynomial. The $y$-coordinates of points on the graph become large and positive as $x$ becomes large and negative; this is consistent with a fourth-degree polynomial, but not with a third-degree polynomial. Therefore, of the choices given, only choice B could be the equation of the graph.\n\nChoice $A$ is incorrect. The graph of the equation in this answer choice has the correct factors. However, at $x=0$ the graph of the equation in this choice crosses the $x$-axis; the graph shown touches the $x$-axis but doesn't cross it. Choices $C$ and $D$ are incorrect and are likely the result of misinterpreting the relationship between the $x$-intercepts of a graph of a polynomial function and the factors of the polynomial expression.",
        calculator: false
    },
    {
        question: "Which of the following consists of the y-coordinates of all the points that satisfy the system of inequalities above?",
        image: imagePaths['./q20.png'],
        options:[
            {
                id:"0",
                options:"A",
                answer:"$y>6$",
            },
            {
                id:"1",
                options:"B",
                answer:"$y>4$",
            },
            {
                id:"2",
                options:"C",
                answer:"$y>\\frac{5}{2}$",
            },
            {
                id:"3",
                options:"D",
                answer:"$y>\\frac{3}{2}$",
            },
        ],
        correctAnswerIndex: 1,
        explanation: "Choice B is correct. Subtracting the same number from each side of an inequality gives an equivalent inequality. Hence, subtracting 1 from each side of the inequality $2 x>5$ gives $2 x-1>4$. So the given system of inequalities is equivalent to the system of inequalities $y>2 x-1$ and $2 x-1>4$, which can be rewritten as $y>2 x-1>4$. Using the transitive property of inequalities, it follows that $y>4$.\n\nChoice A is incorrect because there are points with a $y$-coordinate less than 6 that satisfy the given system of inequalities. For example, $(3,5.5)$ satisfies both inequalities. Choice $C$ is incorrect. This may result from solving the inequality $2 x>5$ for $x$, then replacing $x$ with $y$. Choice $D$ is incorrect because this inequality allows $y$-values that are not the $y$-coordinate of any point that satisfies both inequalities. For example, $y=2$ is contained in the set $y>\\frac{3}{2}$; however, if 2 is substituted into the first inequality for $y$, the result is $x<\\frac{3}{2}$. This cannot be true because the second inequality gives $x>\\frac{5}{2}$.",
        calculator: false
    },
    {
        question: "The graph above shows the distance traveled d, in feet, by a product on a conveyor belt m minutes after the product is placed on the belt. Which of the following equations correctly relates $\\mathrm{d}$ and $\\mathrm{m}$?",
        image: imagePaths['./q21.png'],
        options:[
            {
                id:"0",
                options:"A",
                answer:"$d=2m$",
            },
            {
                id:"1",
                options:"B",
                answer:"$d=\\frac{1}{2}m$",
            },
            {
                id:"2",
                options:"C",
                answer:"$d=m+2$",
            },
            {
                id:"3",
                options:"D",
                answer:"$d=2m+2$",
            },
        ],
        correctAnswerIndex: 0,
        explanation: "Choice A is correct. The line passes through the origin. Therefore, this is a relationship of the form $d=km$, where $k$ is a constant representing the slope of the graph. To find the value of $k$, choose a point $(m, d)$ on the graph of the line other than the origin and substitute the values of $m$ and $d$ into the equation. For example, if the point $(2,4)$ is chosen, then $4=k(2)$, and $k=2$. Therefore, the equation of the line is $d=2m$.\n\nChoice B is incorrect and may result from calculating the slope of the line as the change in time over the change in distance traveled instead of the change in distance traveled over the change in time. Choices C and D are incorrect because each of these equations represents a line with a $d$-intercept of 2. However, the graph shows a line with a $d$-intercept of 0.",
        calculator: false
    },
    {
        question: "In the figure above, RT=TU. What is the value of x?",
        image: imagePaths['./q22.png'],
        options:[
            {
                id:"0",
                options:"A",
                answer:"72",
            },
            {
                id:"1",
                options:"B",
                answer:"66",
            },
            {
                id:"2",
                options:"C",
                answer:"64",
            },
            {
                id:"3",
                options:"D",
                answer:"58",
            },
        ],
        correctAnswerIndex: 2,
        explanation: "Choice C is correct. Since $RT=TU$, it follows that $\\triangle RTU$ is an isosceles triangle with base RU. Therefore, $\\angle TRU$ and $\\angle TUR$ are the base angles of an isosceles triangle and are congruent. Let the measures of both $\\angle TRU$ and $\\angle TUR$ be $t^\\circ$. According to the triangle sum theorem, the sum of the measures of the three angles of a triangle is $180^\\circ$. Therefore, $114^\\circ+2t^\\circ=180^\\circ$, so $t=33$. Note that $\\angle TUR$ is the same angle as $\\angle SUV$. Thus, the measure of $\\angle SUV$ is $33^\\circ$. According to the triangle exterior angle theorem, an external angle of a triangle is equal to the sum of the opposite interior angles. Therefore, $x^\\circ$ is equal to the sum of the measures of $\\angle VUS$ and $\\angle SUV$; that is, $31^\\circ+33^\\circ=64^\\circ$. Thus, the value of $x$ is 64.\n\nChoice B is incorrect. This is the measure of $\\angle STR$, but $\\angle STR$ is not congruent to $\\angle SVR$. Choices A and D are incorrect and may result from a calculation error.",
        calculator: false
    },
    {
        question: "Oil and gas production in a certain area dropped from 4 million barrels in 2000 to 1.9 million barrels in 2013. Assuming that the oil and gas production decreased at a constant rate, which of the following linear functions f best models the production, in millions of barrels, t years after the year 2000?",
        image: null,
        options:[
            {
                id:"0",
                options:"A",
                answer:"$f(t)=\\frac{21}{130} t+4$",
            },
            {
                id:"1",
                options:"B",
                answer:"$f(t)=\\frac{19}{130} t+4$",
            },
            {
                id:"2",
                options:"C",
                answer:"$f(t)=-\\frac{21}{130} t+4$",
            },
            {
                id:"3",
                options:"D",
                answer:"$f(t)=-\\frac{19}{130} t+4$",
            },
        ],
        correctAnswerIndex: 2,
        explanation: "Choice C is correct. It is assumed that the oil and gas production decreased at a constant rate. Therefore, the function $f$ that best models the production $t$ years after the year 2000 can be written as a linear function, $f(t)=mt+b$, where $m$ is the rate of change of the oil and gas production and $b$ is the oil and gas production, in millions of barrels, in the year 2000. Since there were 4 million barrels of oil and gas produced in 2000, $b=4$. The rate of change, $m$, can be calculated as $\\frac{4-1.9}{0-13}=-\\frac{2.1}{13}$, which is equivalent to $-\\frac{21}{130}$, the rate of change in choice $C$.\n\nChoices A and B are incorrect because each of these functions has a positive rate of change. Since the oil and gas production decreased over time, the rate of change must be negative. Choice $D$ is incorrect. This model may result from misinterpreting 1.9 million barrels as the amount by which the production decreased.",
        calculator: false
    },
    {
        question: "In the figure above, segments AE and BD are parallel. If angle BDC measures $58^{\\circ}$ and angle ACE measures $62^{\\circ}$, what is the measure of angle CAE?",
        image: imagePaths['./q23.png'],
        options:[
            {
                id:"0",
                options:"A",
                answer:"$58^{\\circ}$",
            },
            {
                id:"1",
                options:"B",
                answer:"$60^{\\circ}$",
            },
            {
                id:"2",
                options:"C",
                answer:"$62^{\\circ}$",
            },
            {
                id:"3",
                options:"D",
                answer:"$120^{\\circ}$",
            },
        ],
        correctAnswerIndex: 1,
        explanation: "Choice B is correct. It's given that angle ACE measures $62^{\\circ}$. Since segments AE and BD are parallel, angles BDC and CEA are congruent. Therefore, angle CAE measures $58^{\\circ}$. The sum of the measures of angles ACE, CEA, and CAE is $180^{\\circ}$ since the sum of the interior angles of triangle ACE is equal to $180^{\\circ}$. Let the measure of angle CAE be $x^{\\circ}$. Therefore, $62+58+x=180$, which simplifies to $x=60$. Thus, the measure of angle CAE is $60^{\\circ}$.\n\nChoice A is incorrect. This is the measure of angle AEC, not that of angle CAE. Choice C is incorrect. This is the measure of angle ACE, not that of CAE. Choice D is incorrect. This is the sum of the measures of angles ACE and CEA.",
        calculator: false
    },
    {
        question: "In the given triangle, AB=AC and angle ABC has a measure of $67^{\\circ}$. What is the value of x?",
        image: imagePaths['./q24.png'],
        options:[
            {
                id:"0",
                options:"A",
                answer:"36",
            },
            {
                id:"1",
                options:"B",
                answer:"46",
            },
            {
                id:"2",
                options:"C",
                answer:"58",
            },
            {
                id:"3",
                options:"D",
                answer:"70",
            },
        ],
        correctAnswerIndex: 1,
        explanation: "Choice B is correct. Since AB=AC, the measures of their corresponding angles, angle ABC and angle ACB, are equal. Since angle ABC has a measure of $67^{\circ}$, the measure of angle ACB is also $67^{\circ}$. Since the sum of the measures of the interior angles in a triangle is $180^{\circ}$, it follows that $67+67+x=180$, or $134+x=180$. Subtracting 134 from both sides of this equation yields $x=46$. Choices A, C, and D are incorrect and may result from calculation errors.",
        calculator: false
    },
    {
        question: "The graph of y=f(x) is shown in the xy-plane above. Which of the following could define f?",
        image: imagePaths['./q25.png'],
        options:[
            {
                id:"0",
                options:"A",
                answer:"$f(x)=\\frac{1}{x-1}-1$",
            },
            {
                id:"1",
                options:"B",
                answer:"$f(x)=\\frac{1}{x-1}+1$",
            },
            {
                id:"2",
                options:"C",
                answer:"$f(x)=\\frac{1}{x+1}-1$",
            },
            {
                id:"3",
                options:"D",
                answer:"$f(x)=\\frac{1}{x+1}+1$",
            },
        ],
        correctAnswerIndex: 3,
        explanation: "Choice D is correct. The graph shown has a vertical asymptote at $x=-1$, indicating that the equation is undefined when $x=-1$. Among the given options, only the equation $f(x)=\\frac{1}{x+1}+1$ contains the fraction $\\frac{1}{x+1}$, which is undefined for $x=-1$ due to the denominator $x+1$ being equal to 0 at $x=-1$. Choices A, B, and C can be eliminated based on this reasoning. Additionally, the graph has a horizontal asymptote at $y=1$, indicating that the parent function $g(x)=\\frac{1}{x+1}$ has been translated up one unit, which aligns with the equation $f(x)=\\frac{1}{x+1}+1$. Therefore, choice D is the correct answer.",
        calculator: false,
    },
    {
        question: "Which of the following is equivalent to $r^{\\frac{2}{5}} \\cdot \\sqrt{r}$, where $r>0$?",
        image: null,
        options:[
            {
                id:"0",
                options:"A",
                answer:"$\\frac{1}{5}$",
            },
            {
                id:"1",
                options:"B",
                answer:"$r^{\\frac{3}{10}}$",
            },
            {
                id:"2",
                options:"C",
                answer:"$r^{\\frac{3}{7}}$",
            },
            {
                id:"3",
                options:"D",
                answer:"$r^{\\frac{9}{10}}$",
            },
        ],
        correctAnswerIndex: 3,
        explanation: "Choice D is correct. The radical expression $\\sqrt{r}$ can be rewritten as a power with a fractional exponent: $r^{\\frac{1}{2}}$. Using the product of powers property, multiplying $\\left(\\frac{2}{5}\\right)\\left(\\frac{1}{2}\\right)$ gives $r^{\\frac{2}{5}+\\frac{1}{2}}$. Adding $\\frac{2}{5}+\\frac{1}{2}$ yields $\\frac{4}{10}+\\frac{5}{10}$, or $\\frac{9}{10}$. Therefore, $r^{\\frac{2}{5}} \\cdot \\sqrt{r}=r^{\\frac{9}{10}}$.\n\nChoice A is incorrect and may result from multiplying, rather than adding, the exponents. Choice B is incorrect and may result from conceptual or calculation errors. Choice C is incorrect and may result from adding the numerators and denominators in $\\frac{2}{5}$ and $\\frac{1}{2}$ instead of adding equivalent fractions with like denominators.",
        calculator: false,
    },
    {
        question: "The function f is defined by $f(x)=x^2$, and the function g is defined by $g(x)=x^2+3$. Which of the following translations of the graph of f in the xy-plane results in the graph of g ?",
        image: null,
        options:[
            {
                id:"0",
                options:"A",
                answer:"A translation 3 units downward",
            },
            {
                id:"1",
                options:"B",
                answer:"A translation 3 units upward",
            },
            {
                id:"2",
                options:"C",
                answer:"A translation 3 units to the left",
            },
            {
                id:"3",
                options:"D",
                answer:"A translation 3 units to the right",
            },
        ],
        correctAnswerIndex: 1,
        explanation: "Choice B is correct. It is given that $f(x)=x^2$ and $g(x)=x^2+3$. It follows that adding 3 to $f(x)$ gives $g(x)$. Adding 3 to each value of the function $f$ corresponds to a vertical shift in the graph of $f$. Therefore, a translation 3 units upward of the graph of $f$ results in the graph of $g$.\n\nChoice A is incorrect. This translation results in the graph of $y=x^2-3$. Choice C is incorrect. This translation results in the graph of $y=(x+3)^2$. Choice D is incorrect. This translation results in the graph of $y=(x-3)^2$.",
        calculator: false,
    },
]