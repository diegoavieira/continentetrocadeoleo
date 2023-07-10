/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react';
import { FormikHelpers, FormikProps } from 'formik';

export default interface RdsFormProps<Values> {
  /**
   * Children.
   */
  children: ((props: FormikProps<Values>) => ReactNode) | ReactNode;
  /**
   * Initial values.
   */
  initialValues: Values;
  /**
   * Form ID.
   */
  id?: string;
  /**
   * A Yup Schema or a function that returns a Yup schema
   */
  validationSchema?: any | (() => any);
  /**
   * OnSubmit.
   */
  onSubmit: (values: Values, formikHelpers: FormikHelpers<Values>) => void | Promise<any>;
  /**
   * OnReset.
   */
  onReset?: (values: Values, formikHelpers: FormikHelpers<Values>) => void;
}
