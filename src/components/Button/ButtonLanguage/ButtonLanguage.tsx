import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { SwitchLanguage } from "./buttonLanguageStyled.tsx";

interface ButtonLanguageProps {
  onClick: () => void;
}

const ButtonLanguage: React.FC<ButtonLanguageProps> = () => {
  const { t } = useTranslation(); 
  const [language, setLanguage] = useState("vi");

  useEffect(() => {
    setLanguage(i18next.language);
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "vi" ? "en" : "vi";
    i18next.changeLanguage(newLanguage); 
    setLanguage(newLanguage); 
  };

  return (
    <SwitchLanguage onClick={toggleLanguage}>
      {language === "vi" ? t("button.lang") : t("button.lang")}
    </SwitchLanguage>
  );
};

export default ButtonLanguage;
