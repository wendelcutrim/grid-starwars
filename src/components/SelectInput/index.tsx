import { Form } from 'react-bootstrap';

import { SelectInputProps } from './types';

function SelectInput(props: SelectInputProps) {
  /* console.log(props.event); */
 /*   console.log(dataInput); */

  return (
    <div className="container mb-3 mt-3 fs-5 fw-bold text-light fs-3 p-0">
        <Form.Label>{props.labelName}</Form.Label>
        {/*bg-dark mb-3 mt-3 fs-5 fw-bold text-light */}
        {/* <Form.Select onChange={(event) => console.log(event.target.value)}> */}
        <Form.Select onChange={(event) => {
          console.log(event.target.value);
          const value = props.event.filter((el: any) => el === event.target.value);
        }}>
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