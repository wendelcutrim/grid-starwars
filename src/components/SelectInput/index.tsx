
import { Form } from 'react-bootstrap';

import { SelectInputProps } from './types';

function SelectInput(props: SelectInputProps) {
  return (
    <div className="container mb-3 mt-3 fs-5 fw-bold text-light fs-3 p-0">
        <Form.Label>{props.labelName}</Form.Label>
        {/*bg-dark mb-3 mt-3 fs-5 fw-bold text-light */}
        <Form.Select onChange={(event) => props.method(event.target.value)}>
            {/* {<option selected disabled>Search by {props.disabledInputText}</option>} */}
            {<option value={props.option} >{props.option}</option>}
            {props.data.map((item: string | number, index: number) => 
                (   
                    <option key={index} value={item}>{item}</option>
                )
            )}
        </Form.Select>
    </div>
  )
}

export default SelectInput