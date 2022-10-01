import { Form } from 'react-bootstrap';

import { GenderFilterProps } from './types';

function GenderFilter(props: GenderFilterProps) {

  return (
    <div className="container mb-3 mt-3 fs-5 fw-bold text-light fs-3 p-0">
        <Form.Label>{props.labelName}</Form.Label>
        <Form.Select onChange={(event) => props.handleGender(event.target.value)}>
            <option value="all" >all</option>
            {props.genders.map((item, index) => 
                (   
                    <option key={index} value={item}>{item}</option>
                )
            )}
        </Form.Select>
    </div>
  )
}

export default GenderFilter;