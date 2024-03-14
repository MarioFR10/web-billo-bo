import * as yup from "yup";
import { TEXT } from "@/static/texts/i18n";
import { FormConfig, FormHelpers, FormNames, FormSchema } from "@/components";

export type LoginFormValues = {
  email: string;
  password: string;
};

const formNames: FormNames<LoginFormValues> = {
  email: "email",
  password: "password",
};

type UseLoginFormHook = {
  formConfig: FormConfig<LoginFormValues>;
};

export function useLoginForm(): UseLoginFormHook {
  async function handleOnSubmit(
    values: LoginFormValues,
    helpers: FormHelpers<LoginFormValues>
  ): Promise<void> {
    try {
      console.log(values);
      // await router.push(routesPrivate.home);
    } catch (_error) {
    } finally {
      helpers.setSubmitting(false);
    }
  }

  const validationSchema: FormSchema<LoginFormValues> = {
    email: yup
      .string()
      .trim()
      .required(TEXT.GENERAL.FORM.ERRORS.REQUIRED)
      .email(TEXT.GENERAL.FORM.ERRORS.FORMAT.EMAIL),
    password: yup.string().trim().required(TEXT.GENERAL.FORM.ERRORS.REQUIRED),
  };

  const formConfig: FormConfig<LoginFormValues> = {
    validationSchema,
    names: formNames,
    initialValues: { email: "", password: "" },
    onSubmit: handleOnSubmit,
  };

  return {
    formConfig,
  };
}
