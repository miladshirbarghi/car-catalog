# Car Catalog | کاتالوگ خودرو

## فارسی

کاتالوگ واکنش‌گرای خودرو با رابط فارسی و راست‌به‌چپ است. داده‌ها محلی و آزمایشی هستند و برنامه به سرور یا پایگاه داده متصل نیست.

جست‌وجو، فیلتر بازه قیمت، مرتب‌سازی قیمت، علاقه‌مندی‌ها و صفحه جزئیات خودرو در دسترس‌اند. بازه قیمت در نشانی صفحه نگهداری می‌شود؛ علاقه‌مندی‌ها فقط تا زمانی که صفحه کاتالوگ فعال است در حافظه می‌مانند. صفحات جزئیات و مسیر نامعتبر به‌صورت lazy بارگذاری می‌شوند؛ تصویر اول فهرست فوراً و بقیه تصاویر کارت‌ها به‌صورت lazy بارگذاری می‌شوند.

### ساختار و ابزارها

- `src/app` و `src/providers`: برنامه و providerها و مسیرها.
- `src/pages`، `src/components` و `src/hooks`: صفحات، اجزای رابط و منطق آن‌ها.
- `src/mock`، `src/types` و `src/validations`: داده آزمایشی، نوع‌ها و اعتبارسنجی.
- `src/styles` و `assets`: استایل‌ها، فونت‌ها و تصاویر.

پروژه از React 19، TypeScript 6، Vite 8، MUI 9، Emotion، React Compiler و فونت IRANSansX استفاده می‌کند. تنظیمات RTL با Emotion و Stylis انجام شده است. توکن‌های رنگ در `src/styles/pallete.ts` و نقاط شکست در `src/styles/breakpoints.ts` قرار دارند.

### اجرا و بررسی

نسخه Node در `.nvmrc` و نسخه pnpm در `package.json` مشخص شده است. وابستگی‌ها را با `pnpm install` یا `just install` نصب کنید و سپس از دستورهای زیر استفاده کنید:

```sh
pnpm dev
pnpm lint
pnpm test
pnpm check
pnpm build
```

`pnpm check` به‌ترتیب TypeScript، ESLint، Prettier و بیلد Vite را اجرا می‌کند؛ تست‌ها جداگانه با `pnpm test` اجرا می‌شوند. Git پیش از commit فایل‌های stageشده را با ESLint و Prettier بررسی و پیش از push دستور `pnpm check` را اجرا می‌کند. دستور `just` فهرست میان‌برها را نشان می‌دهد.

برای کامپوننت‌های MUI از مسیر مستقیم، مانند `import Box from '@mui/material/Box'`، استفاده کنید؛ ESLint ایمپورت از ریشه `@mui/material` را ممنوع می‌کند. برای قالب‌بندی هنگام ذخیره در VS Code، افزونه Prettier (`esbenp.prettier-vscode`) را نصب کنید.

راهنمای پروژه در [AGENTS.md](AGENTS.md) و تصمیم‌ها در [DECISIONS.md](DECISIONS.md) آمده‌اند.

## English

A responsive, Persian RTL car catalog using local mock data. The application does not connect to a server or database.

It supports search, price-range filtering, price sorting, favorites, and car details. The price range is kept in the URL; favorites remain in memory only while the catalog page is mounted. The details and unknown-route pages are lazy-loaded. The first catalog image loads eagerly; the remaining card images load lazily.

### Structure and stack

- `src/app` and `src/providers`: application, providers, and routes.
- `src/pages`, `src/components`, and `src/hooks`: pages, UI components, and their logic.
- `src/mock`, `src/types`, and `src/validations`: mock data, types, and validation.
- `src/styles` and `assets`: styles, fonts, and images.

The project uses React 19, TypeScript 6, Vite 8, MUI 9, Emotion, the React Compiler, and IRANSansX fonts. RTL styling uses Emotion and Stylis. Color tokens are in `src/styles/pallete.ts`; layout breakpoints are in `src/styles/breakpoints.ts`.

### Development and checks

Node is pinned in `.nvmrc` and pnpm in `package.json`. Install dependencies with `pnpm install` or `just install`, then use the commands shown above. `pnpm check` runs TypeScript, ESLint, Prettier, and the Vite production build in sequence; run `pnpm test` separately. Git checks staged files with ESLint and Prettier before commits and runs `pnpm check` before pushes. Run `just` to list shortcuts.

Use direct MUI imports, such as `import Box from '@mui/material/Box'`; ESLint disallows imports from the `@mui/material` root. For format-on-save in VS Code, install the Prettier extension (`esbenp.prettier-vscode`).

See [AGENTS.md](AGENTS.md) for project guidance and [DECISIONS.md](DECISIONS.md) for decisions.
