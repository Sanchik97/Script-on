export default [
	{
		id: '1',
		nameOfScript: 'Холодный обзвон',
		questions: [
			{
				id: '1',
				answerId: '0',
				tips: 'Задайте вопрос',
				nameOfQuestion: 'Добрый день! Вам удобно говорить?'
			},
			{
				id: '2',
				answerId: '1',
				tips: 'Представьтесь и продолжите разговор',
				nameOfQuestion: 'Я звоню из компании {Название компании}'
			},
			{
				id: '3',
				answerId: '2',
				nameOfQuestion:
					'Мы предлагаем услуги в сфере {Сфера услуг компании}! Вы заинтересованы?'
			},
			{
				id: '4',
				answerId: '3',
				nameOfQuestion:
					'Мы звоним вам из компании {Название компании}, когда вам будет удобно с нами поговорить?'
			},
			{
				id: '5',
				answerId: '5',
				tips: 'Задайте вопрос',
				nameOfQuestion: 'Добрый день! Вам удобно говорить?'
			},
			{
				id: '6',
				answerId: '6',
				tips: 'Представьтесь и продолжите разговор',
				nameOfQuestion: 'Я звоню из компании {Название компании}'
			},
			{
				id: '7',
				answerId: '7',
				nameOfQuestion:
					'Мы предлагаем услуги в сфере {Сфера услуг компании}! Вы заинтересованы?'
			},
			{
				id: '8',
				answerId: '8',
				nameOfQuestion:
					'Мы звоним вам из компании {Название компании}, когда вам будет удобно с нами поговорить?'
			}
		],
		answers: [
			{
				id: '1',
				questionId: '1',
				nameOfAnswer: 'Да'
			},
			{
				id: '2',
				questionId: '1',
				nameOfAnswer: 'Нет'
			},
			{
				id: '3',
				questionId: '2',
				nameOfAnswer: 'Мне удобно говорить'
			},
			{
				id: '4',
				questionId: '2',
				nameOfAnswer: 'Мне не удобно разговаривать'
			},
			{
				id: '5',
				questionId: '2',
				nameOfAnswer: 'По какому вопросу вы обращаетесь?'
			},
			{
				id: '6',
				questionId: '6',
				nameOfAnswer: 'Да'
			}
		]
	},
	{
		id: '2',
		nameOfScript: 'Горячий обзвон',
		questions: [
			{
				id: '1',
				nameOfQuestion: 'Добрый день!'
			},
			{
				id: '2',
				nameOfQuestion: 'А когда вам удобно?:'
			}
		],
		answers: [
			{
				id: '1',
				questionId: '1',
				nameOfAnswer: 'Нет'
			},
			{
				id: '2',
				questionId: '1',
				nameOfAnswer: 'Да'
			},
			{
				id: '3',
				questionId: '2',
				nameOfAnswer: 'Вечером'
			}
		]
	}
]
