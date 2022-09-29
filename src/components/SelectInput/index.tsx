
import { Form } from 'react-bootstrap';

import { SelectInputProps } from './types';

function SelectInput(props: SelectInputProps) {
  return (
    <div className="container mb-3 mt-3 fs-5 fw-bold text-light fs-3">
        <Form.Label>{props.disabledInputText}</Form.Label>
        {/*bg-dark mb-3 mt-3 fs-5 fw-bold text-light */}
        <Form.Select>
            <option selected disabled>Search by {props.disabledInputText}</option>
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