# Premium Plus - متجر الهواتف الذكية والإكسسوارات

متجر إلكتروني متخصص في بيع أحدث الهواتف الذكية والإكسسوارات، مبني باستخدام Next.js وTailwind CSS.

## المميزات
- تصميم عصري وجذاب
- دعم الوضع الليلي/النهاري
- تجربة مستخدم سلسة وسهلة
- دعم كامل للغة العربية
- نظام إدارة المنتجات
- سلة تسوق متقدمة
- نظام دفع آمن باستخدام Stripe
- إدارة حسابات المستخدمين
- مدونة تقنية
- نشرة بريدية

## التقنيات المستخدمة
- Next.js 14
- TypeScript
- Tailwind CSS
- Prisma
- PostgreSQL
- NextAuth.js
- Stripe Payments
- Next Themes

## متطلبات النظام
- Node.js 18.0.0 أو أحدث
- npm 9.0.0 أو أحدث
- PostgreSQL 12 أو أحدث

## التثبيت

1. استنسخ المشروع:
\`\`\`bash
git clone https://github.com/username/premium-plus.git
cd premium-plus
\`\`\`

2. قم بتثبيت التبعيات:
\`\`\`bash
npm install
\`\`\`

3. قم بإنشاء ملف .env.local وتعبئة المتغيرات المطلوبة:
\`\`\`bash
cp .env.example .env.local
\`\`\`

4. قم بإنشاء قاعدة البيانات:
\`\`\`bash
npx prisma db push
\`\`\`

5. قم بتشغيل المشروع في وضع التطوير:
\`\`\`bash
npm run dev
\`\`\`

## هيكل المشروع
\`\`\`
premium-plus/
├── src/
│   ├── app/
│   ├── components/
│   ├── lib/
│   └── utils/
├── public/
├── prisma/
└── ...
\`\`\`

## الأمان
- تشفير SSL/TLS
- حماية من CSRF
- تشفير كلمات المرور
- معالجة آمنة للمدفوعات
- حماية من SQL Injection

## الترخيص
هذا المشروع مرخص تحت رخصة MIT.

## الدعم
للمساعدة والاستفسارات، يرجى فتح issue في GitHub أو التواصل عبر info@premiumplus.com

## المساهمة
نرحب بمساهماتكم! يرجى الاطلاع على [دليل المساهمة](CONTRIBUTING.md) للمزيد من المعلومات. 