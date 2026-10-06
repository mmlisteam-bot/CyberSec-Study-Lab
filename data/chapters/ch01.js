window.CYBERSEC_CHAPTERS=[{
id:'ch01',number:1,title:'مبانی JavaScript Security',subtitle:'DOM • Source • Sink • Data Flow',progress:0,
notes:[
{title:'DOM چیست؟',body:'DOM مخفف Document Object Model است. مرورگر HTML را به یک ساختار شیءگرا تبدیل می‌کند تا JavaScript بتواند عناصر و محتوای صفحه را بخواند و تغییر دهد.'},
{title:'Critical Rendering Path',body:'به‌صورت ساده: HTML → Parsing → DOM → CSS/CSSOM → Rendering → Display. این مسیر توضیح می‌دهد مرورگر چگونه منابع صفحه را پردازش کرده و نتیجه را نمایش می‌دهد.'},
{title:'Source',body:'Source نقطه‌ای است که داده از آن وارد برنامه یا جریان داده می‌شود. نمونه‌های مهم: location.hash، location.search، document.cookie و داده‌های پیام‌ها. document.cookie به کوکی‌های HttpOnly دسترسی ندارد.'},
{title:'Sink',body:'Sink جایی است که داده مصرف، تفسیر یا وارد یک عملیات حساس می‌شود. نمونه مهم در این فصل innerHTML است.'},
{title:'Source → Data Flow → Sink',body:'برای تحلیل یک آسیب‌پذیری، دنبال این مسیر بگرد: داده از کجا آمده؟ چگونه در برنامه حرکت کرده؟ در نهایت کجا مصرف یا تفسیر شده؟ وجود Source و Sink به‌تنهایی به معنی XSS نیست.'},
{title:'مثال اصلی',body:'در کد const username = location.hash; document.body.innerHTML = username; مقدار location.hash یک Source و innerHTML یک Sink است. اگر داده قابل‌کنترل توسط مهاجم بدون پردازش امن به Sink خطرناک برسد، می‌تواند زمینه DOM XSS ایجاد کند.'},
{title:'نکات مهم API',body:'document.URL وجود دارد، اما document.url استاندارد نیست. location.search استاندارد است، اما document.search نیست. postMessage ذاتاً Sink نیست؛ خطر آن به اعتبارسنجی origin/message و نحوه استفاده از داده در ادامه بستگی دارد. window.location.href بسته به نحوه استفاده می‌تواند Source یا نقطه اثرگذاری باشد.'}
],
flashcards:[
{q:'DOM چیست؟',a:'Document Object Model؛ مدل شیءگرای سند HTML که JavaScript از طریق آن با ساختار صفحه تعامل می‌کند.'},
{q:'Source چیست؟',a:'نقطه‌ای که داده وارد برنامه یا جریان داده می‌شود؛ مانند location.hash.'},
{q:'Sink چیست؟',a:'نقطه‌ای که داده در آن مصرف، تفسیر یا وارد یک عملیات حساس می‌شود؛ مانند innerHTML.'},
{q:'آیا Source + Sink به‌تنهایی XSS است؟',a:'خیر. باید داده قابل‌کنترل توسط مهاجم، مسیر جریان داده و Sink ناامن/زمینه خطرناک وجود داشته باشد.'}
],
quiz:[
{q:'کدام گزینه Source است؟',o:['innerHTML','location.hash','document.body','CSSOM'],a:1,e:'location.hash می‌تواند داده‌ای را از URL وارد برنامه کند؛ بنابراین در این مثال Source است. innerHTML برعکس، نقطه مصرف/تفسیر داده است.'},
{q:'کدام گزینه Sink محسوب می‌شود؟',o:['location.search','location.hash','innerHTML','document.cookie'],a:2,e:'innerHTML یک Sink مهم است چون داده را به محتوای HTML عنصر وارد می‌کند. اگر داده مهاجم بدون ایمن‌سازی مناسب به آن برسد، می‌تواند خطرناک باشد.'},
{q:'CRP به چه چیزی اشاره دارد؟',o:['Cookie Request Protocol','Critical Rendering Path','Client Routing Process','Code Runtime Parser'],a:1,e:'CRP مخفف Critical Rendering Path است؛ مسیر پردازشی مرورگر از دریافت و Parse منابع تا ساخت DOM/CSSOM و Render کردن صفحه.'},
{q:'آیا وجود Source و Sink به‌تنهایی ثابت می‌کند که XSS وجود دارد؟',o:['بله، همیشه','خیر، باید جریان و شرایط خطرناک هم وجود داشته باشد','فقط اگر CSS فعال باشد','فقط در Node.js'],a:1,e:'خیر. باید داده قابل‌کنترل توسط مهاجم باشد، به Sink مناسب برسد و در context موردنظر بدون دفاع کافی مصرف شود.'},
{q:'کدام عبارت درباره postMessage درست‌تر است؟',o:['همیشه Sink است','همیشه امن است','یک API پیام‌رسانی است و خطر به اعتبارسنجی و استفاده بعدی از داده بستگی دارد','فقط برای Cookie است'],a:2,e:'postMessage خودش به‌تنهایی Sink نیست. باید origin و داده پیام اعتبارسنجی شوند و بررسی شود داده بعداً آیا وارد یک Sink خطرناک می‌شود یا نه.'}
],
challenge:{title:'Source و Sink را مشخص کن',code:'const username = location.hash;\ndocument.body.innerHTML = username;',hint:'دو قسمت مهم را نام‌گذاری کن.',answer:'location.hash = Source; innerHTML = Sink'}
}];
