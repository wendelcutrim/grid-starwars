import { Form } from 'react-bootstrap';

import { FormFiltersProps } from './types';

function FormFilters({ children }: FormFiltersProps) {
  return (
    <Form className="d-flex flex-row justify-content-around align-items-center gap-5 mt-3">
        {children}
    </Form>
  );
};

export default FormFilters;