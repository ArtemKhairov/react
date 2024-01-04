import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Routes, Route } from "react-router-dom";
// Route Config
import { routeConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
  const { t } = useTranslation();
  return (
    <Suspense fallback={<div>{t("Loading...")}</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route
            key={path}
            element={<div className="page-wrapper">{element}</div>}
            path={path}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
