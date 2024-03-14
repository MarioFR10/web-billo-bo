import { TEXT } from "@/static/texts/i18n";
import {
  Button,
  ButtonVariant,
  FormInput,
  FormInputWidth,
  FormNames,
  FormRenderProps,
  FormViewSection,
  NewForm,
  Typography,
  TypographyVariant,
} from "@/components";
import { LoginFormValues, useLoginForm } from "./use-login-form";

export function LoginForm() {
  const { formConfig } = useLoginForm();

  return (
    <NewForm config={formConfig} className="flex flex-col">
      {(
        props: FormRenderProps<LoginFormValues>,
        names: FormNames<LoginFormValues>
      ): JSX.Element => {
        return (
          <>
            <FormViewSection
              title={TEXT.CONTAINERS.LOGIN.FORM.TITLE}
              caption={TEXT.CONTAINERS.LOGIN.FORM.CAPTION}
              className="mt-10"
            >
              <FormInput
                isRequired
                name={names.email}
                value={props.values.email}
                inputLabel={TEXT.CONTAINERS.LOGIN.FORM.FIELDS.LABELS.EMAIL}
                helperText={TEXT.CONTAINERS.LOGIN.FORM.FIELDS.HELPERS.EMAIL}
                inputWidth={FormInputWidth.FOUR_COLUMN}
                formProps={props}
              />

              <FormInput
                isRequired
                name={names.password}
                value={props.values.password}
                inputLabel={TEXT.CONTAINERS.LOGIN.FORM.FIELDS.LABELS.PASSWORD}
                inputWidth={FormInputWidth.THREE_COLUMN}
                formProps={props}
              />
            </FormViewSection>

            <div className="flex justify-end mt-12">
              <Button variant={ButtonVariant.PRIMARY}>
                <Typography variant={TypographyVariant.BODY}>
                  {TEXT.CONTAINERS.LOGIN.FORM.BUTTONS.LABELS.SUBMIT}
                </Typography>
              </Button>
            </div>
          </>
        );
      }}
    </NewForm>
  );
}

{
  /* submit */
}

// */}
