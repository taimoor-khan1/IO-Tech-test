"use client";

import { NextIntlClientProvider } from "next-intl";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function IntlProvider({ children, messages }) {
  const languageState = useSelector((state) => state.language);
  const locale = languageState?.locale || "en";
  const [currentMessages, setCurrentMessages] = useState(messages[locale] || messages.en || messages);

  useEffect(() => {
    // Dynamically load messages based on Redux locale
    if (messages[locale]) {
      setCurrentMessages(messages[locale]);
    }
  }, [locale, messages]);

  return (
    <NextIntlClientProvider locale={locale} messages={currentMessages}>
      {children}
    </NextIntlClientProvider>
  );
}

