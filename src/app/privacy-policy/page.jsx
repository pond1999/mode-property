'use client';
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-neutral-800 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">นโยบายความเป็นส่วนตัว (Privacy Policy)</h1>

        <p className="mb-4">
          MODE Property (“เรา”) ให้ความสำคัญกับความเป็นส่วนตัวของผู้ใช้ทุกท่าน ข้อมูลส่วนบุคคลที่ได้รับจากผู้ใช้จะถูกเก็บรักษาอย่างปลอดภัยและใช้เพื่อวัตถุประสงค์ที่ชัดเจนเท่านั้นตามที่ระบุไว้ในนโยบายนี้
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">1. ข้อมูลที่เราเก็บรวบรวม</h2>
        <p className="mb-4">
          เราอาจเก็บข้อมูล เช่น ชื่อ, อีเมล, เบอร์โทรศัพท์, ข้อความติดต่อ, และข้อมูลอสังหาริมทรัพย์ที่คุณสนใจ เมื่อคุณกรอกแบบฟอร์มในเว็บไซต์ของเรา
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">2. วัตถุประสงค์ในการใช้ข้อมูล</h2>
        <p className="mb-4">
          ข้อมูลของคุณจะถูกใช้เพื่อการติดต่อกลับ ให้คำปรึกษาอสังหาฯ ประเมินราคา หรือแจ้งข้อมูลโปรโมชั่นที่เกี่ยวข้องกับบริการของเราเท่านั้น
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">3. การเปิดเผยข้อมูล</h2>
        <p className="mb-4">
          เราไม่ขายหรือเผยแพร่ข้อมูลส่วนบุคคลของคุณให้บุคคลที่สาม เว้นแต่จะได้รับความยินยอม หรือมีข้อกำหนดตามกฎหมาย
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">4. การรักษาความปลอดภัยของข้อมูล</h2>
        <p className="mb-4">
          เราใช้มาตรการทางเทคนิคและการจัดการเพื่อป้องกันไม่ให้เกิดการเข้าถึงข้อมูลโดยไม่ได้รับอนุญาต
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">5. การติดต่อเรา</h2>
        <p className="mb-4">
          หากคุณมีคำถามเกี่ยวกับนโยบายนี้ กรุณาติดต่อเราได้ที่ <strong>MODE Property, Phuket, Thailand</strong>  
          หรืออีเมล: <a href="mailto:info@modeproperty.com" className="text-blue-600 hover:underline">info@modeproperty.com</a>
        </p>

        <p className="text-sm text-neutral-500 mt-8">
          นโยบายนี้อาจมีการปรับปรุงเป็นระยะ โดยจะประกาศอัปเดตที่หน้านี้
        </p>

        <div className="mt-10 text-center">
          <Link href="/" className="text-blue-600 hover:underline">
            ← กลับไปหน้าแรก (Back to Home)
          </Link>
        </div>
      </div>
    </main>
  );
}
