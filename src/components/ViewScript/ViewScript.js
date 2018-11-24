import React from 'react'
import { Container } from 'reactstrap'

const ViewScript = props => {
    
	console.log(props)

	return <Container>{props.match.params.id}</Container>
}

export default ViewScript
