import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
// style
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink className={cls.mainLink} theme={AppLinkTheme.PRIMARY} to="/">
          {t("Main")}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
          {t("About")}
        </AppLink>
      </div>
    </div>
  );
};

export { Navbar };
