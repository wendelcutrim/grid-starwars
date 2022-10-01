import { Form } from 'react-bootstrap';

import { BirthYearFilterProps } from './types';

function BirthYearFilter(props: BirthYearFilterProps) {

  return (
    <div className="container mb-3 mt-3 fs-5 fw-bold text-light fs-3 p-0">
        <Form.Label>{props.labelName}</Form.Label>
        <Form.Select onChange={(event) => props.handleBirthYear(event.target.value)}>
            <option value="all">all</option>
            {props.birthYearArray.map((item, index) => 
                (   
                    <option key={index} value={item}>{item}</option>
                )
            )}
        </Form.Select>
    </div>
  )
}

export default BirthYearFilter;