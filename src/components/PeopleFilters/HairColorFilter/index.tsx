import { Form } from 'react-bootstrap';

import { HairColorFilterProps } from './types';

function HairColorFilter(props: HairColorFilterProps) {

  return (
    <div className="container mb-3 mt-3 fs-5 fw-bold text-light fs-3 p-0">
        <Form.Label>{props.labelName}</Form.Label>
        <Form.Select onChange={(event) => props.handleHairColor(event.target.value)}>
            <option value="all">all</option>
            {props.hairColorArray.map((item, index) => 
                (   
                    <option key={index} value={item}>{item}</option>
                )
            )}
        </Form.Select>
    </div>
  )
}

export default HairColorFilter;