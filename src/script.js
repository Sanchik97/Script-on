export default [
	{
		id: '1',
		nameOfScript: 'Холодный обзвон',
		questions: [
			{
				id: '1',
				nameOfQuestion: 'Здрасти'
			},
			{
				id: '2',
				nameOfQuestion: 'К черту всё, я устал!'
			},
			{
				id: '3',
				nameOfQuestion: 'Можно предложить вам наши услуги?'
			},
			{
				id: '4',
				nameOfQuestion: 'Вы заинтересованы?'
			},
			{
				id: '5',
				nameOfQuestion: 'Могу я вам перезвонить попозже?'
			}
		],
		answers: [
			{
				id: '1',
				questionId: '1',
				nameOfAnswer: '123'
			},
			{
				id: '2',
				questionId: '1',
				nameOfAnswer: 'Да'
			},
			{
				id: '3',
				questionId: '2',
				nameOfAnswer: '321'
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
				id: 2,
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
