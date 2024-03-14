import { useEffect, useState } from "react";
import { handleOnComplete, handleOnPaste } from "@/utils/form/form-utlils";
import { FormRenderProps } from "./form";
import { FormControl, FormControlProps } from "./form-control";

type GenericTextFieldProps = {
  isDisabled?: boolean;
  isRequired?: boolean;
  isErrorActive?: boolean;
  name: string;
  value: any;
  formProps: FormRenderProps<any>;
  onInputChange?: (value: string) => void;
  onBlur?: () => void;
};

export type TextFieldOptions = {
  isErrorActive?: boolean;
};

export type TextFieldProps = GenericTextFieldProps & {
  textFieldOptions?: TextFieldOptions;
};

export type FormTextFieldProps = FormControlProps & TextFieldProps;

type ChildrenRenderProps = GenericTextFieldProps & {
  onAcceptHandler: (acceptValue: any) => void;
  onInputPasteHandler: (formEvent: any) => void;
  onInputCompleteHandler: (formEvent: any) => void;
};

type FormGenericTextFieldProps = FormControlProps &
  GenericTextFieldProps & {
    children?: (renderProps: ChildrenRenderProps) => React.ReactElement;
  };

function FormGenericTextFieldMolecule({
  isErrorActive = true,
  name,
  value,
  formProps,
  children,
  ...formControlProps
}: FormGenericTextFieldProps) {
  const [errorText, setErrorText] = useState<string | undefined>();

  useEffect(() => {
    if (!name || !formProps) {
      return;
    }

    const isTouched = formProps?.touched[name];
    const error = formProps?.errors[name];

    if (isTouched) {
      setErrorText(error as string | undefined);
    }
  }, [name, formProps]);

  function handleOnInputPaste(formEvent: any) {
    handleOnPaste(formEvent, formProps, name);
  }

  function handleOnInputComplete(formEvent: any) {
    handleOnComplete(formEvent, formProps, name);
  }

  function handleAccept(acceptValue: any) {
    formProps.setFieldValue(name, acceptValue);
  }

  return (
    <FormControl
      {...formControlProps}
      errorText={isErrorActive ? (errorText as string) : ""}
    >
      {children
        ? children({
            name,
            value,
            formProps,
            onAcceptHandler: handleAccept,
            onInputPasteHandler: handleOnInputPaste,
            onInputCompleteHandler: handleOnInputComplete,
          })
        : null}
    </FormControl>
  );
}

export const FormGenericTextField = FormGenericTextFieldMolecule;
