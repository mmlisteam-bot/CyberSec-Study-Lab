# Git-Sync — همگام‌سازی دفتر با GitHub

این Vault داخل ریپوی زیر قرار دارد:

```text
https://github.com/mmlisteam-bot/CyberSec-Study-Lab
Vault folder: obsidian
```

## راه‌اندازی روی کامپیوتر

### ۱. دریافت ریپو

Git را نصب کن و ریپو را Clone کن:

```bash
git clone https://github.com/mmlisteam-bot/CyberSec-Study-Lab.git
cd CyberSec-Study-Lab
```

اگر ریپو را قبلاً Clone کرده‌ای، فقط Pull بگیر:

```bash
git pull
```

### ۲. باز کردن Vault

در Obsidian گزینه **Open folder as vault** را انتخاب کن و پوشه `CyberSec-Study-Lab/obsidian` را باز کن؛ نه کل ریپو و نه پوشه `01-Web`.

### ۳. نصب پلاگین همگام‌سازی

1. Settings → Community plugins
2. Community plugins را فعال کن.
3. از Browse پلاگین **Obsidian Git** را نصب و Enable کن.
4. در تنظیمات پلاگین، Pull هنگام شروع و Backup/Commit-and-sync خودکار را فعال کن.

احراز هویت Git همان احراز هویت Git روی سیستم توست. Token را داخل هیچ یادداشتی ننویس و Commit نکن.

## استفاده روزانه دوطرفه

### قبل از شروع

ابتدا Pull یا Commit-and-sync انجام بده تا تغییرات دستگاه دیگر و GitHub را دریافت کنی.

### بعد از نوشتن

از Command Palette دستور **Commit-and-sync** مربوط به Obsidian Git را اجرا کن. این عملیات تغییرات محلی را Commit و به GitHub ارسال می‌کند و تغییرات remote را نیز دریافت می‌کند.

### ویرایش از خود GitHub

فایل Markdown را در مسیر `obsidian/` ویرایش و Commit کن. دفعه بعد در Obsidian، تغییرات با Pull یا Commit-and-sync وارد Vault می‌شوند.

## کار با چند دستگاه

- روی دو دستگاه هم‌زمان یک فایل را ویرایش نکن.
- قبل از جابه‌جایی دستگاه، Sync موفق را بررسی کن.
- اگر Conflict ایجاد شد، فایل Conflict را دستی ادغام کن؛ نسخه دیگر را بی‌فکر بازنویسی نکن.
- فایل‌های Workspace محلی در `.gitignore` قرار گرفته‌اند و نباید Sync شوند.

## بررسی دستی Git

```bash
git status
git pull
git add obsidian
git commit -m "Update pentest notes"
git push
```

## حریم خصوصی

این ریپو در حال حاضر **Public** است. Token، Cookie، اطلاعات مشتری، Scope محرمانه و مدرک حساس را داخل آن قرار نده. برای جزوه‌های محرمانه یک ریپوی Private جدا بساز.
