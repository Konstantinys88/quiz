

const btn = document.querySelector('.btn');

const arr = [
    {
        question: 'Сколько планет в солнечной системе ?',
        answer1: [1, 1],
        answer2: [2, 2],
        answer3: [8, "ok"],
        answer4: [9, 9],
    },
    {
        question: 'Как называется третья планета в солнечной системе ?',
        answer1: ['Марс', 'Марс'],
        answer2: ['Земля', 'ok'],
        answer3: ['Юпитер', 'Юпитер'],
        answer4: ['Меркурий', 'Меркурий'],
    },
    {
        question: 'Егор ?',
        answer1: ['Молоток', 'Молоток'],
        answer2: ['Топор', 'ok'],
        answer3: ['Болгарка', 'Болгарка'],
        answer4: ['Шмель', 'Шмель'],
    },
    {
        question: 'Олег ?',
        answer1: ['Чебурек', 'Чебурек'],
        answer2: ['Шмель', 'Шмель'],
        answer3: ['Вжик', 'ok'],
        answer4: ['Паладин', 'Паладин'],
    },
    {
        question: 'Костя ?',
        answer1: ['Молодец', 'ok'],
        answer2: ['Пират', 'Пират'],
        answer3: ['Абармостя', 'Абармостя'],
        answer4: ['Егор', 'Егор'],
    },
]

class Quiz {
    constructor(question, answer1, answer2, answer3, answer4, idFor1, idFor2, idFor3, idFor4) {
        this.question = question;
        this.answer1 = answer1;
        this.answer2 = answer2;
        this.answer3 = answer3;
        this.answer4 = answer4;
        this.idFor1 = idFor1;
        this.idFor2 = idFor2;
        this.idFor3 = idFor3;
        this.idFor4 = idFor4;

    }

    render() {
        const element = document.createElement('div');
        element.classList.add('form');
        element.innerHTML = `
        <form action="#" class="form">
            <span>Вопрос</span>
            <p>${this.question}</p>
            <ul>
                <li>
                    <input class="input" type="radio" name="test" id=${this.idFor1}><label for=${this.idFor1}>${this.answer1}</label>
                </li>
                <li>
                    <input class="input" type="radio" name="test" id=${this.idFor2}><label for=${this.idFor2}>${this.answer2}</label>
                </li>
                <li>
                    <input class="input" type="radio" name="test" id=${this.idFor3}><label for=${this.idFor3}>${this.answer3}</label>
                </li>
                <li>
                    <input class="input" type="radio" name="test" id=${this.idFor4}><label for=${this.idFor4}>${this.answer4}</label>
                </li>
            </ul>
        </form>
        `

        const parentselector = document.querySelector('.quiz');
        parentselector.prepend(element);

    }

    delete() {
        const del = document.querySelector('.form');
        del.remove();
    }

}

let quiz = new Quiz(
    arr[0].question,
    arr[0].answer1[0],
    arr[0].answer2[0],
    arr[0].answer3[0],
    arr[0].answer4[0],
    arr[0].answer1[1],
    arr[0].answer2[1],
    arr[0].answer3[1],
    arr[0].answer4[1],
);

quiz.render();

function renderQuiz() {

    let count = 0;
    let correctAnswers = 0;
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        const inputChecked = document.querySelector('input[type=radio][name=test]:checked')

        if (inputChecked) {
            count += 1;
        }

        if (inputChecked.id == 'ok') {
            correctAnswers += 1;
            console.log('Правилильных ответов ' + correctAnswers)
            alert('Ответ верный');
        } else {
            alert('Ответ не вернвый');
        }

        if ((count) === arr.length) {
            document.querySelector('.button').remove();

            const end = document.createElement('div');
            end.textContent = `Правильных ответов ${correctAnswers}`;
            const parentselector = document.querySelector('.quiz');
            parentselector.prepend(end);

        }

        new Quiz().delete();
        new Quiz(
            arr[count].question,
            arr[count].answer1[0],
            arr[count].answer2[0],
            arr[count].answer3[0],
            arr[count].answer4[0],
            arr[count].answer1[1],
            arr[count].answer2[1],
            arr[count].answer3[1],
            arr[count].answer4[1],
        ).render();
    })

}

renderQuiz();




