"use client";
import Image from "next/image";
import logoImg from "../../../public/images/logo/logo_gray_md.png";
import { TEXT } from "@/static/texts/i18n";
import { tailwind } from "@/utils/tailwind/tailwind-utils";
import {
  Button,
  ButtonVariant,
  FormInput,
  FormInputWidth,
  FormViewSection,
  Typography,
  TypographyVariant,
} from "@/components";

export function Login() {
  return (
    <div className={tailwind("flex flex-col")}>
      <div className="flex justify-center">
        <Image priority src={logoImg} alt="Logo" />
      </div>

      <FormViewSection
        title={TEXT.CONTAINERS.LOGIN.FORM.TITLE}
        caption={TEXT.CONTAINERS.LOGIN.FORM.CAPTION}
        className="mt-10"
      >
        <FormInput
          isRequired
          inputValue={""}
          inputLabel={TEXT.CONTAINERS.LOGIN.FORM.FIELDS.LABELS.EMAIL}
          helperText={TEXT.CONTAINERS.LOGIN.FORM.FIELDS.HELPERS.EMAIL}
          onChange={() => {}}
        />

        <FormInput
          isRequired
          inputValue={""}
          inputLabel={TEXT.CONTAINERS.LOGIN.FORM.FIELDS.LABELS.PASSWORD}
          inputWidth={FormInputWidth.THREE_COLUMN}
          onChange={() => {}}
        />
      </FormViewSection>

      {/* submit */}
      <div className="flex justify-end mt-12">
        <Button variant={ButtonVariant.PRIMARY}>
          <Typography variant={TypographyVariant.BODY}>
            {TEXT.CONTAINERS.LOGIN.FORM.BUTTONS.LABELS.SUBMIT}
          </Typography>
        </Button>
      </div>
    </div>
  );
}
