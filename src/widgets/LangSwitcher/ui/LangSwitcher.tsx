import { ReactNode, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
// style
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
// import cls from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
  className?: string;
  children?: ReactNode;
}

const LangSwitcher: FC<LangSwitcherProps> = (props) => {
  const { className } = props;
  const { t, i18n } = useTranslation();

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      className={classNames("", {}, [className])}
      onClick={toggle}
      theme={ThemeButton.CLEAR}
    >
      {t("Language")}
    </Button>
  );
};

export { LangSwitcher };
