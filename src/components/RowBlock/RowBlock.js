import React from 'react';
import { Col, Row } from 'reactstrap';


const RowBlock = ({leftSide, rightSide}) => {

  return (
    <Row>
      <Col md='6'>
        {leftSide}
        </Col>
      <Col md='6'>
        {rightSide}
      </Col>
  </Row>
  )
}
  
export default RowBlock;