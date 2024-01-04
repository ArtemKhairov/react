import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
// style
import cls from "./PageError.module.scss";

interface PageErrorProps {
  className?: string;
}
const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };
  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t("An unexpected error occurred")}</p>
      <Button onClick={reloadPage}>{t("Reload page")}</Button>
    </div>
  );
};
export { PageError };
