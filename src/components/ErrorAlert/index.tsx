import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

interface ErrorAlertProps {
    text: string;
}

function ErrorAlert({text}: ErrorAlertProps) {

  return (
    <Alert variant="danger" className="mt-4">
        <Alert.Heading><h1 className='text-bolder'>Oh snap! You got an error!</h1></Alert.Heading>
        <p>
          {text}
        </p>
    </Alert>
  )
}

export default ErrorAlert