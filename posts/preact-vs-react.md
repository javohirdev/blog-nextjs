---
title: 'Preact nima va uning React bilan farqli jihatlari?'
date: 'Jan 25, 2023'
excerpt: 'Preact va Reactning farqli jihatlari haqida bugungi maqolada...'
cover_image: '/images/preact.jpg'
---

Preact nima? Preact haqida eshitganmisiz? Bugungi maqolada biz sizga Preact va React o’rtasidagi farqlarni ko’rib chiqamiz va ikkala texnologiyaning ijobiy va salbiy tomonlariga ham oydinlik kiritamiz.

## Preact nima?

Preact — bu JavaScript kutubxonasi bo’lib, u React kabi zamonaviy API va ECMA skriptlarini qo’llab-quvvatlaydigan yengil 3kb hajmga ega. Bundan tashqari, u boshqa JavaScript freymvorklari kabi tezlik bo’yicha ustunlik qiladi va virtual DOMni amalga oshiradi.

## Nima uchun Preact?
Agar siz ilovaning ishlashi, tezligi va hajmi haqida qayg’ursangiz, Preact eng yaxshi variant. U asosan progressiv veb-ilovalarda juda qo’l keladi. Misol uchun, Uber o’zining PWA-ilovasini Preact orqali yaratgan.

![Uber](/images/uber.jpg)

## React nima?

React — interaktiv, dinamik foydalanuvchi interfeyslarini yaratish uchun mashhur JavaScript kutubxonalaridan biri. Facebook uni 2013-yilda chiqargan va GitHub’da 180K yulduzlarni yig’ishga ham ulgurgan.

Reactni hozirgi kunda: Facebook, Netflix, Instacart, Dropbox, Salesforce, PayPal kabi kompaniyalar ishlatib keladi.

# Ijobiy va kamchiliklari
## Preactning afzalliklari: 💚

Tez va yengil: Preact atigi 3,5 kb hajmda, tez renderlanadi,
Moslik: U React bilan juda mos keladi va bir xil ECMA skriptini qo’llab-quvvatlaydi,
Katta ekotizim: Bu yaxshi hujjatlashtirilgan, bu esa o’rganishni soddalashtiradi. Shuningdek, u ko’plab hissa qo’shuvchi “community” ga ham ega,
Ajratilgan CLI: Preact dasturchilarga WebPack, babel, Terser va boshqalarni sozlamasdan bir necha soniya ichida PWA yaratishga yordam beradigan kuchli CLI-ga ega.
Preact/compat: U 100% muvofiqlikni taklif qilish uchun preact/compat nomli paketga ega. Bu ReactDOM kodini ish jarayoni va kodlar bazasiga hech qanday o’zgartirish kiritmasdan yozish uchun Preact bilan React kutubxonalaridan foydalanish imkonini beradi.

## Preactning kamchiliklari ❗

Qo’shimcha kutubxonadan foydalanish: Preact bilan Preact va React asosidagi npm paketlari o’rtasida ulanishni ta’minlash uchun preact/compat, preact/test-utils va boshqalar kabi qo’shimcha kutubxonalardan foydalanish kerak. Bu esa vaqtni yo’qotilishiga sabab bo’lishi mumkin,
Sintetik hodisalarni qayta ishlash yo‘q: Preact brauzer API-ga asoslangan va hodisalarni sintetik boshqarishni qo‘llab-quvvatlamaydi, bu esa ilovaning ishlashiga ta’sir qilishi va texnik xizmat ko‘rsatish bilan bog‘liq muammolarni keltirib chiqarishi mumkin.

## Reactning afzalliklari 💚

Bir tomonlama ma’lumotlarni ulash: React ma’lumotlarni bir yo’nalishli bog’lashni qo’llab-quvvatlaydi, bu ilovani xatolarga kamroq olib keladi,
Yaxshi hujjatlashtirilgan: React o’rganish jarayonini osonlashtiradigan bir nechta darsliklar va misollarga ega,
Katta hamjamiyat: React dasturchilar va unga hissa qo’shuvchilarning eng katta hamjamiyati tomonidan qo’llab-quvvatlanadi,
Qayta foydalanish mumkin bo’lgan komponentlar: Qayta foydalanish mumkin bo’lgan komponentlar ishlab chiquvchilarga murakkab UI ni ilovaning boshqa qismlarida ishlatilishi mumkin bo’lgan bir nechta komponentlarga ajratish imkonini beradi, bu esa ilovani tez ishlab chiqish imkonini beradi.
JSX: React.js JavaScript-da HTML yozish uchun JSX-ni qo’llab-quvvatlaydi.

## Reactning kamchiliklari ❗

Unopinionated Framework: Ya’ni React dastur arxitekturasini aniqlashda qulay. Ammo, agar dasturchi yaxshi arxitektura bilimiga ega bo’lmasa, bu dasturda muammolarga olib kelishi mumkin,
View-centric Library: React, ko’rishga yo’naltirilgan kutubxona bo’lib, Redux va NPM kabi uchinchi tomon modullari, kutubxonalariga tayangan holda boshqaruv, marshrutlash, ma’lumotlar bilan ishlash kabi bir nechta jihatlarni aniqlash uchun ba’zi ishlarni bajarishga to’g’ri keladi va bu esa vaqtni talab qiladi.

# Yakuniy qarashlar

Ilova hajmi: Preact Reactga qaraganda ancha kichikroq. Gzip formatidagi Preact 7.2.0 atigi 3 kbni tashkil qiladi, React 16.2.0 esa 31,8 Kb.

Hooklar: Hooklar Preact-da alohida saqlanadi.
Renderlash: React ilovalarni yuklashda uzoq vaqt talab etadi, bu esa renderlash jarayonini sekin va murakkab qiladi. Preact esa tezroq renderlash jarayoniga ega.

[Preact qo'llanmasiga o'tish](https://preactjs.com/) /
[React qo'llanmasiga o'tish](https://reactjs.org/)