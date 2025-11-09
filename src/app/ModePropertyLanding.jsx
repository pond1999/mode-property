'use client';

import React, { useMemo, useState } from "react";

// MODE Property – Bilingual Landing Page (TH/EN)

const STRINGS = {
  th: {
    langLabel: "ภาษา",
    brand: "MODE Property",
    nav: {
      home: "หน้าแรก",
      about: "เกี่ยวกับเรา",
      properties: "อสังหานำเสนอ",
      services: "บริการของเรา",
      reviews: "รีวิว",
      contact: "ติดต่อเรา",
    },
    hero: {
      title: "ค้นหาบ้านในฝันที่ภูเก็ตกับ MODE Property",
      subtitle:
        "ที่ปรึกษาด้านซื้อ-ขาย-เช่า อสังหาในภูเก็ต ดูแลครบตั้งแต่คัดเลือกทำเล บริการยื่นกู้ ไปจนถึงโอนกรรมสิทธิ์",
      ctaPrimary: "ดูรายการขาย",
      ctaSecondary: "ติดต่อเรา",
      toggleLabel: "EN",
    },
    about: {
      title: "เกี่ยวกับ MODE Property",
      body:
        "เราเชี่ยวชาญบ้านพูลวิลล่า วิวทะเล คอนโด และที่ดินในภูเก็ต บริการแบบครบวงจรทั้งผู้ซื้อและผู้ขาย เน้นความโปร่งใส รวดเร็ว และผลลัพธ์ที่วัดได้",
      highlights: [
        "ผู้เชี่ยวชาญพื้นที่ภูเก็ต (กะตะ ราไวย์ ฉลอง บางเทา ลายัน ฯลฯ)",
        "ภาพ/วิดีโอโปรโมทระดับมืออาชีพ",
        "ที่ปรึกษาการยื่นกู้และเตรียมเอกสาร",
      ],
    },
    properties: {
      title: "อสังหานำเสนอ",
      badges: { forSale: "ขาย", seaView: "ใกล้ทะเล", hot: "แนะนำ" },
      specs: { beds: "ห้องนอน", baths: "ห้องน้ำ", area: "ตร.ม." },
      view: "ดูรายละเอียด",
      contact: "ติดต่อเจ้าหน้าที่",
    },
    services: {
      title: "บริการของเรา",
      items: [
        { title: "ซื้อ–ขาย บ้าน/คอนโด", desc: "เฟ้นทำเลตรงใจ ตรวจเอกสาร สัญญา ต่อรองราคาแบบมืออาชีพ" },
        { title: "ยื่นกู้ธนาคาร", desc: "ช่วยประเมินความสามารถ กู้ร่วม/ต่างชาติ แนะนำเอกสารและธนาคารที่เหมาะสม" },
        { title: "ที่ปรึกษาการลงทุน", desc: "วิเคราะห์ผลตอบแทน เช่า/ขายต่อ เลือกโครงการที่มีดีมานด์จริง" },
        { title: "โปรโมทการขาย", desc: "ภาพนิ่ง/วิดีโอ โดรน โฆษณาโซเชียล และเครือข่ายเอเจนต์" },
      ],
      mortgageCta: "ปรึกษาการยื่นกู้",
    },
    mortgage: {
      title: "ดูแลเรื่องการยื่นกู้แบบครบวงจร",
      bullets: ["คัดธนาคารที่เหมาะกับโปรไฟล์", "เช็คเครดิตเบื้องต้น & วางแผน DTI", "เตรียมเอกสาร & ติดตามผลการอนุมัติ"],
    },
    reviews: {
      title: "รีวิวจากลูกค้า",
      list: [
        { name: "คุณนัท – ผู้ซื้อ", text: "ทีมงานพาไปดูบ้านหลายทำเล ให้คำแนะนำเรื่องกู้ละเอียดมาก ปิดดีลได้ไว" },
        { name: "คุณแพร – ผู้ขาย", text: "ภาพและวิดีโอโปรโมทสวยมาก มีลูกค้าติดต่อจริงหลายราย ขายได้ราคาตามเป้า" },
        { name: "Alex – Investor", text: "Great area insights and rental yield analysis. Smooth handover process." },
      ],
    },
    contact: {
      title: "ติดต่อ MODE Property",
      desc: "ฝากข้อมูลเพื่อให้เราติดต่อกลับ หรือแชทด่วนผ่าน Line / Messenger ได้เลย",
      form: { name: "ชื่อ", email: "อีเมล", phone: "เบอร์โทร", message: "ข้อความ", submit: "ส่งข้อความ" },
      quick: { call: "โทร", line: "แชท Line", fb: "Messenger" },
    },
    footer: { rights: "สงวนลิขสิทธิ์", address: "ภูเก็ต ประเทศไทย" },
  },
  en: {
    langLabel: "Language",
    brand: "MODE Property",
    nav: { home: "Home", about: "About", properties: "Featured", services: "Services", reviews: "Reviews", contact: "Contact" },
    hero: {
      title: "Find Your Dream Home in Phuket with MODE Property",
      subtitle:
        "Boutique real estate in Phuket: buy–sell–rent with end-to-end concierge from location scouting to mortgage and transfer.",
      ctaPrimary: "View Listings",
      ctaSecondary: "Contact Us",
      toggleLabel: "TH",
    },
    about: {
      title: "About MODE Property",
      body:
        "We specialize in pool villas, sea-view homes, condos and land across Phuket. Transparent, fast, and results-driven for buyers and sellers.",
      highlights: [
        "Local experts (Kata, Rawai, Chalong, Bang Tao, Layan, etc.)",
        "Professional photo/video marketing",
        "Mortgage advisory & paperwork assistance",
      ],
    },
    properties: {
      title: "Featured Properties",
      badges: { forSale: "For Sale", seaView: "Sea-Prox.", hot: "Hot" },
      specs: { beds: "Beds", baths: "Baths", area: "sqm" },
      view: "View details",
      contact: "Talk to agent",
    },
    services: {
      title: "Our Services",
      items: [
        { title: "Buy & Sell Homes/Condos", desc: "Tailored location search, document checks, and professional negotiation." },
        { title: "Mortgage Assistance", desc: "Eligibility review, joint/foreign buyer options, bank recommendations." },
        { title: "Investment Advisory", desc: "Yield analysis, rent/resale strategy, demand-backed projects." },
        { title: "Marketing Suite", desc: "Photo/video, drone, social ads, and agent network distribution." },
      ],
      mortgageCta: "Get Mortgage Help",
    },
    mortgage: {
      title: "Full-stack Mortgage Support",
      bullets: ["Match banks to your profile", "Pre-check credit & DTI planning", "Document pack & approval follow-up"],
    },
    reviews: {
      title: "Client Testimonials",
      list: [
        { name: "Nat – Buyer", text: "They showed multiple areas and guided the mortgage in detail. Closed fast!" },
        { name: "Prae – Seller", text: "Beautiful marketing visuals brought real leads. Sold at target price." },
        { name: "Alex – Investor", text: "Clear rental yield analysis and smooth handover process." },
      ],
    },
    contact: {
      title: "Contact MODE Property",
      desc: "Leave your info for a call-back or chat instantly via Line / Messenger.",
      form: { name: "Name", email: "Email", phone: "Phone", message: "Message", submit: "Send Message" },
      quick: { call: "Call", line: "Line Chat", fb: "Messenger" },
    },
    footer: { rights: "All rights reserved", address: "Phuket, Thailand" },
  },
};

const sampleProps = [
  { id: 1, title: { th: "พูลวิลล่า ใกล้กะตะ วิวเขา", en: "Pool Villa near Kata, Mountain View" }, priceTHB: 15500000, beds: 3, baths: 3, area: 280, tags: ["hot", "forSale"], image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop" },
  { id: 2, title: { th: "คอนโด ใกล้บางเทา เดินไปทะเล", en: "Condo near Bang Tao, Walk to Beach" }, priceTHB: 8500000, beds: 2, baths: 2, area: 88, tags: ["seaView", "forSale"], image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1600&auto=format&fit=crop" },
  { id: 3, title: { th: "บ้านเดี่ยว ฉลอง พร้อมอยู่", en: "Detached House in Chalong, Move-in Ready" }, priceTHB: 6750000, beds: 3, baths: 2, area: 160, tags: ["forSale"], image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=1600&auto=format&fit=crop" },
];

function formatTHB(n) {
  try {
    return new Intl.NumberFormat("th-TH", { style: "currency", currency: "THB", maximumFractionDigits: 0 }).format(n);
  } catch {
    return `฿${n.toLocaleString("th-TH")}`;
  }
}

const Badge = ({ children }) => (
  <span className="text-xs px-2 py-1 rounded-full bg-black/80 text-white/90">{children}</span>
);
const SectionTitle = ({ children }) => <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{children}</h2>;

export default function ModePropertyLanding() {
  const [lang, setLang] = useState("th");
  const t = useMemo(() => STRINGS[lang], [lang]);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 scroll-smooth">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-black text-white flex items-center justify-center font-bold">M</div>
            <span className="font-semibold">{t.brand}</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#home" className="hover:opacity-70">{t.nav.home}</a>
            <a href="#about" className="hover:opacity-70">{t.nav.about}</a>
            <a href="#featured" className="hover:opacity-70">{t.nav.properties}</a>
            <a href="#services" className="hover:opacity-70">{t.nav.services}</a>
            <a href="#reviews" className="hover:opacity-70">{t.nav.reviews}</a>
            <a href="#contact" className="hover:opacity-70">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "th" ? "en" : "th")}
              className="text-xs md:text-sm px-3 py-1.5 rounded-full border border-neutral-300 hover:bg-neutral-100"
            >
              {lang === "th" ? "EN" : "TH"}
            </button>
            <a href="#contact" className="hidden md:inline-block text-sm px-3 py-1.5 rounded-full bg-black text-white hover:opacity-90">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden text-gray-50">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://cdn.coverr.co/videos/coverr-luxury-home-interior-7931/1080p.mp4"
          autoPlay
          loop
          muted
        />
        {/* Overlay เข้มขึ้นให้อ่านง่าย */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/35" />

        {/* Language toggle ใน Hero */}
        <button
          onClick={() => setLang(lang === "th" ? "en" : "th")}
          className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 rounded-full px-4 py-2 text-sm font-semibold transition"
          aria-label="toggle language"
        >
          {t.hero.toggleLabel}
        </button>

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-[0_4px_6px_rgba(0,0,0,0.7)]">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 drop-shadow-md">{t.hero.subtitle}</p>

          <div className="mt-10 flex justify-center gap-4">
            <a
              href="#featured"
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold transition"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#contact"
              className="border border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-full transition"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <SectionTitle>{t.about.title}</SectionTitle>
            <p className="mt-4 text-neutral-600">{t.about.body}</p>
            <ul className="mt-6 space-y-2 text-neutral-700">
              {t.about.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-neutral-900" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop"
              alt="MODE Property Phuket"
              className="w-full h-[360px] md:h-[440px] object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-4 w-56">
              <p className="text-sm font-medium">{t.brand}</p>
              <p className="text-xs text-neutral-500">{lang === "th" ? "ผู้เชี่ยวชาญภูเก็ต" : "Phuket Specialists"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="featured" className="bg-white border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
          <div className="flex items-end justify-between gap-6 mb-8">
            <SectionTitle>{t.properties.title}</SectionTitle>
            <a href="#contact" className="text-sm underline underline-offset-4">
              {lang === "th" ? "ฝากเราช่วยหาให้" : "Let us find one for you"}
            </a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleProps.map((p) => (
              <article key={p.id} className="group rounded-2xl overflow-hidden bg-neutral-50 border border-neutral-200 hover:shadow-xl transition">
                <div className="relative">
                  <img src={p.image} alt={p.title[lang]} className="h-56 w-full object-cover" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {p.tags.includes("hot") && <Badge>{t.properties.badges.hot}</Badge>}
                    {p.tags.includes("seaView") && <Badge>{t.properties.badges.seaView}</Badge>}
                    {p.tags.includes("forSale") && <Badge>{t.properties.badges.forSale}</Badge>}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold truncate">{p.title[lang]}</h3>
                  <p className="mt-1 text-neutral-700">{formatTHB(p.priceTHB)}</p>
                  <div className="mt-3 flex items-center gap-4 text-sm text-neutral-600">
                    <span>{p.beds} {t.properties.specs.beds}</span>
                    <span>{p.baths} {t.properties.specs.baths}</span>
                    <span>{p.area} {t.properties.specs.area}</span>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <a href="#contact" className="px-3 py-1.5 rounded-full bg-black text-white text-sm hover:opacity-90">
                      {t.properties.contact}
                    </a>
                    <a href="#" className="px-3 py-1.5 rounded-full border border-neutral-300 text-sm hover:bg-neutral-100">
                      {t.properties.view}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        <div className="flex items-end justify-between gap-6 mb-8">
          <SectionTitle>{t.services.title}</SectionTitle>
          <a href="#contact" className="text-sm underline underline-offset-4">
            {t.services.mortgageCta}
          </a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.map((s, idx) => (
            <div key={idx} className="rounded-2xl border border-neutral-200 bg-white p-5 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-xl bg-neutral-900 text-white flex items-center justify-center mb-4">
                <span className="font-semibold">{idx + 1}</span>
              </div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 text-neutral-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Mortgage bullets */}
        <div className="mt-12 rounded-2xl bg-neutral-900 text-white p-6 md:p-8 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">{t.mortgage.title}</h3>
            <ul className="mt-4 space-y-2 text-white/90">
              {t.mortgage.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-white" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=1600&auto=format&fit=crop"
              alt="Mortgage"
              className="w-full h-56 md:h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="bg-white border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
          <SectionTitle>{t.reviews.title}</SectionTitle>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {t.reviews.list.map((r, i) => (
              <figure key={i} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                <blockquote className="text-neutral-700">“{r.text}”</blockquote>
                <figcaption className="mt-4 text-sm text-neutral-500">{r.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <SectionTitle>{t.contact.title}</SectionTitle>
            <p className="mt-3 text-neutral-600">{t.contact.desc}</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(lang === "th" ? "ส่งข้อมูลเรียบร้อย!" : "Submitted!");
              }}
              className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <input required placeholder={t.contact.form.name} className="px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900/40" />
              <input type="email" required placeholder={t.contact.form.email} className="px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900/40" />
              <input placeholder={t.contact.form.phone} className="md:col-span-2 px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900/40" />
              <textarea rows={4} placeholder={t.contact.form.message} className="md:col-span-2 px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900/40" />
              <button className="md:col-span-2 px-5 py-3 rounded-xl bg-black text-white hover:opacity-90">
                {t.contact.form.submit}
              </button>
            </form>

            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <a href="tel:+66896460375" className="px-3 py-1.5 rounded-full border border-neutral-300 hover:bg-neutral-100">{t.contact.quick.call}: 089-646-0375</a>
              <a href="#" className="px-3 py-1.5 rounded-full border border-neutral-300 hover:bg-neutral-100">{t.contact.quick.line}: @modeproperty</a>
              <a href="#" className="px-3 py-1.5 rounded-full border border-neutral-300 hover:bg-neutral-100">{t.contact.quick.fb}: MODE Property</a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-neutral-200">
            <iframe
              title="Phuket Map"
              src="https://www.google.com/maps?q=Phuket&output=embed"
              className="w-full h-[360px] md:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-black text-white flex items-center justify-center font-bold">M</div>
            <div>
              <p className="font-semibold">{t.brand}</p>
              <p className="text-sm text-neutral-500">{STRINGS[lang].footer.address}</p>
            </div>
          </div>
          <p className="text-sm text-neutral-500">© {new Date().getFullYear()} MODE Property — {STRINGS[lang].footer.rights}</p>
        </div>
      </footer>
    </div>
  );
}
