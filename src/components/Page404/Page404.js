import React from 'react'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'

const Page404 = () => {
	return (
		<Container className="d-flex justify-content-center align-items-center mt-5">
			<div className="text-center align-self-center mt-5">
				<h1 className="text-danger mb-3">404 Страница не найдена</h1>
				<Link className="text-primary " to="/">
					Вернуться на главную
				</Link>
			</div>
		</Container>
	)
}

export default Page404
