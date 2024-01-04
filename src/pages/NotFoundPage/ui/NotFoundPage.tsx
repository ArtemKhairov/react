import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
// style
import cls from "./NotFoundPage.module.scss";

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      {t("Page not found")}
    </div>
  );
};

export { NotFoundPage };
