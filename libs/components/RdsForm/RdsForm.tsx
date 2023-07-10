import { Form, Formik, FormikProps } from 'formik';
import React, { forwardRef, Ref } from 'react';
import RdsFormProps from './RdsForm.props';

/**
 * [RdsForm Examples](https://diegoavieira.github.io/rdsystem/components/rds-form)
 */
const RdsForm = <Values,>(
  { children, validationSchema, initialValues, onSubmit, onReset, id }: RdsFormProps<Values>,
  ref: Ref<FormikProps<Values>>
) => {
  return (
    <Formik
      data-testid="rds-form"
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
      onReset={onReset}
      innerRef={ref}
    >
      {(props) => (
        <Form id={id} autoComplete="off" noValidate>
          {typeof children === 'function' ? children(props) : children}
        </Form>
      )}
    </Formik>
  );
};

export default forwardRef(RdsForm);
