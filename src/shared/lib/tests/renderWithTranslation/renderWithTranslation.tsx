import { ReactElement, ReactNode } from "react";
import { render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18nForTest from "shared/config/i18n/i18nForTest";

// Wrap testing component
export function renderWithTranslation(component: ReactElement | ReactNode) {
  return render(
    <I18nextProvider i18n={i18nForTest}>{component}</I18nextProvider>,
  );
}
