import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { validateEmail, validatePassword } from "../../utils/validation.ts";
import Input from "../Input/Input.tsx";
import {
  ButtonLogin,
  LinkDirect,
  FormLogin,
  Div1,
  Title1,
} from "../FormLogin/formLoginStyled.tsx";
import ButtonLanguage from "../Button/ButtonLanguage/ButtonLanguage.tsx";
import axios from "axios";
import { login } from "../../api/authApi.ts";
import { useNavigate } from "react-router-dom";

interface FormData {
  name: string;
  password: string;
}

interface FormErrors {
  name: string;
  password: string;
}

const LoginForm = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let nameError = "";
    let passwordError = "";

    if (!formData.name) {
      nameError = t("nameRequired");
    } else if (!validateEmail(formData.name)) {
      nameError = t("invalidEmail");
    }
    // } else if (
    //   !/[a-z]/.test(formData.name) ||
    //   !/[A-Z]/.test(formData.name) ||
    //   !/\d/.test(formData.name)
    // ) {
    //   nameError = t("nameComplexity");
    // }

    if (!formData.password) {
      passwordError = t("passwordRequired");
    } else if (!validatePassword(formData.password)) {
      passwordError = t("invalidPassword");
    } else if (/\s/.test(formData.password)) {
      passwordError = t("passwordNoSpaces");
    }

    setErrors({ name: nameError, password: passwordError });

    if (!nameError && !passwordError) {
      try {
        const result = await login(formData.name, formData.password);
        navigate("/dashboard");
      } catch (error) {
        alert("loginFailed");
      }
    }
  };

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  console.log(t("login.title"));

  return (
    <Div1>
      <ButtonLanguage onClick={() => handleLanguageChange("en")} />
      <div>
        <FormLogin onSubmit={handleSubmit}>
          <Title1>{t("login.title")}</Title1>
          <Input
            type="text"
            name="name"
            placeholder={t("login.enterName")}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            error={errors.name}
          />
          <Input
            type="password"
            name="password"
            placeholder={t("login.enterPassword")}
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            error={errors.password}
          />
          <ButtonLogin type="submit">{t("login.button")}</ButtonLogin>
          <LinkDirect target="_blank" href="#">
            {t("login.signUp")}
          </LinkDirect>
        </FormLogin>
      </div>
    </Div1>
    // <h1>jfkdjfkdsjfk</h1>
  );
};

export default LoginForm;