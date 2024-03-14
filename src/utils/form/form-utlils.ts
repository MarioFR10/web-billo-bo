import { FormikProps, FormikValues } from "formik";

export function handleOnPaste(
  event: any,
  formikProps: FormikProps<FormikValues>,
  inputName: string
) {
  formikProps.setFieldValue(inputName, event.clipboardData.getData("Text"));
}

export function handleOnComplete(
  value: any,
  formikProps: FormikProps<FormikValues>,
  inputName: string
) {
  formikProps.setFieldValue(inputName, value);
}
