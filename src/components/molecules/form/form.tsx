import React from "react";
import * as yup from "yup";
import BaseSchema from "yup/lib/schema";
import { Formik, FormikHelpers, FormikProps, FormikValues } from "formik";
import { tailwind } from "@/utils/tailwind/tailwind-utils";

export type FormNames<FormValuesType> = {
  [key in keyof FormValuesType]: string;
};

export type FormSchema<FormValuesType> = {
  [key in keyof FormValuesType]: BaseSchema;
};

export type FormHelpers<FormValuesType> = FormikHelpers<FormValuesType>;

export type FormRenderProps<FormValuesType> = FormikProps<FormValuesType> & {
  submitButtonDisabled: boolean;
};

export type FormConfig<FormValuesType> = {
  names: FormNames<FormValuesType>;
  initialValues: FormValuesType;
  validationSchema?: FormSchema<FormValuesType>;
  innerRef?: React.Ref<FormikProps<FormValuesType>>;
  onSubmit: (
    values: FormValuesType,
    helpers: FormHelpers<FormValuesType>
  ) => void;
};

type FormProps<FormValuesType> = {
  id?: string;
  config: FormConfig<FormValuesType>;
  htmlFormProps?: JSX.IntrinsicElements["form"];
  className?: string;
  children: (
    props: FormRenderProps<FormValuesType>,
    names: FormNames<FormValuesType>
  ) => React.ReactElement;
};

/**
 * Form component using Formik library
 * It handles the submit using the formik config prop `handleSubmit`
 * and it is only called if the form validation passes.
 *
 * This is a wrapper to allow validating fields only after the first submit
 * because Formik validates on any "blur" event (when the field loses its focus), so
 * the field would show an error even if the user just clicked somewhere else in the window
 *
 * @param className form className to override
 * @param children Formik children render prop (see Formik for more details)
 * @param formikProps Formik configuration props (including initial values, validation schema, handle submit method, etc)
 * @param htmlFormProps HTML form props (to override props like onKeyPressDown)
 * @constructor
 */
export function NewForm<FormValuesType extends FormikValues>({
  id,
  config,
  className,
  htmlFormProps = {},
  children,
}: FormProps<FormValuesType>) {
  const {
    names,
    initialValues,
    validationSchema,
    innerRef,
    onSubmit,
  } = config;

  return (
    <Formik<FormValuesType>
      innerRef={innerRef}
      initialValues={initialValues}
      validationSchema={validationSchema && yup.object(validationSchema)}
      onSubmit={onSubmit}
    >
      {(formikProps: FormikProps<FormValuesType>): React.ReactElement => {
        const submitButtonDisabled =
          !formikProps.dirty ||
          !formikProps.isValid ||
          formikProps.isSubmitting;

        return (
          // eslint-disable-next-line jsx-a11y/no-redundant-roles -- testing library is not getting automatic form role
          <form
            {...htmlFormProps}
            id={id}
            role="form"
            onSubmit={(event) => {
              event.preventDefault();
              formikProps.handleSubmit();
            }}
            className={tailwind(className)}
          >
            {
              // @ts-ignore
              children &&
                children(
                  {
                    ...formikProps,
                    submitButtonDisabled,
                  },
                  names
                )
            }
          </form>
        );
      }}
    </Formik>
  );
}
