# Decisions | تصمیم‌ها

## فارسی

### پشته و محدوده

پروژه از React، TypeScript، Vite، MUI و Emotion با تنظیمات RTL و فونت IRANSansX استفاده می‌کند. کاتالوگ سمت کاربر با داده آزمایشی محلی کار می‌کند؛ سرور، احراز هویت و پایگاه داده در محدوده فعلی نیستند.

### وضعیت کاتالوگ

منطق تعامل در hookها نگهداری می‌شود. جست‌وجو، مرتب‌سازی و علاقه‌مندی‌ها در وضعیت محلی هستند؛ علاقه‌مندی‌ها با خروج از صفحه کاتالوگ یا بارگذاری مجدد باقی نمی‌مانند. حداقل و حداکثر قیمت در پارامترهای URL نگهداری می‌شوند تا پیوند بازه قیمت قابل اشتراک باشد.

### بارگذاری و ایمپورت‌ها

صفحه اصلی کاتالوگ در بارگذاری اولیه قرار دارد؛ صفحات جزئیات و مسیر نامعتبر با `React.lazy` و یک وضعیت بارگذاری مشترک دریافت می‌شوند. تصویر اولین کارت به‌صورت eager و بقیه تصاویر کارت‌ها به‌صورت lazy بارگذاری می‌شوند. ایمپورت از ریشه `@mui/material` با ESLint ممنوع است و از مسیرهای مستقیم یا زیرمسیر مربوط، مانند `@mui/material/styles`، استفاده می‌شود.

### بررسی کیفیت و راهنمای محلی

`pnpm check` بررسی نوع‌ها، lint، قالب‌بندی و بیلد را اجرا می‌کند و تست‌ها جداگانه اجرا می‌شوند. تنظیمات TypeScript گزینه `strict: true` را فعال نکرده‌اند. راهنمای مخزن و skillهای محلی در [AGENTS.md](AGENTS.md) و `.agents/skills` قرار دارند؛ Graphify اختیاری است و در نبود آن کد مستقیماً بررسی می‌شود.

## English

### Stack and scope

The project uses React, TypeScript, Vite, MUI, and Emotion with RTL configuration and IRANSansX fonts. The client-side catalog uses local mock data; a server, authentication, and database are outside the current scope.

### Catalog state

Interaction logic lives in hooks. Search, sorting, and favorites use local state; favorites do not persist after leaving the catalog page or reloading. Minimum and maximum prices are stored in URL parameters so a price range can be shared.

### Loading and imports

The catalog page is part of the initial load; the details and unknown-route pages use `React.lazy` with a shared loading state. The first card image loads eagerly and the remaining card images load lazily. ESLint disallows imports from the `@mui/material` root; use direct paths or the appropriate subpath, such as `@mui/material/styles`.

### Quality checks and local guidance

`pnpm check` runs type checking, linting, formatting checks, and the build; tests run separately. The TypeScript configuration does not enable `strict: true`. Repository guidance and local skills are in [AGENTS.md](AGENTS.md) and `.agents/skills`; Graphify is optional and source inspection is the fallback.
