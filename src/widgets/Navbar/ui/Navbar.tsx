import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Modal } from "shared/ui/Modal/Modal";
// style
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        theme={ThemeButton.CLEAR}
        className={cls.links}
        onClick={onToggleModal}
      >
        {t("Enter")}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        {t("About")}
      </Modal>
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
