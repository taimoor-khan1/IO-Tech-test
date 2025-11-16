import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'ar'];

export default getRequestConfig(async ({ locale }) => {
  // Default to 'en' if locale is not valid
  const validLocale = locales.includes(locale) ? locale : 'en';

  return {
    messages: (await import(`./messages/${validLocale}.json`)).default
  };
});

