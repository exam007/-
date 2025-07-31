# ระบบข้อสอบออนไลน์ (Next.js + MongoDB + NextAuth) ภาษาไทย

## ฟีเจอร์เบื้องต้น
- Login ด้วย Google (OAuth, เฉพาะ @gmail.com, @attorney285.co.th)
- แยกสิทธิ์ผู้ใช้ทั่วไป (user) กับผู้ดูแลระบบ (admin)
- ผู้ใช้เห็นเฉพาะข้อสอบที่ตนเองมีสิทธิ์
- แอดมินสามารถจัดการข้อสอบ/สิทธิ์ผู้ใช้ได้
- เชื่อมต่อ MongoDB (Cloud หรือ Local)

---

## วิธีเริ่มต้น

1. **Clone โปรเจกต์นี้**
2. **สร้างไฟล์ `.env.local` จาก `.env.example`**
3. **ใส่ค่า Google OAuth และ MongoDB URI**
4. **ติดตั้งแพคเกจ**
   ```bash
   npm install
   ```
5. **เริ่มต้นรัน**
   ```bash
   npm run dev
   ```

---

## ตัวอย่างค่าใน `.env.local`

```
GOOGLE_CLIENT_ID=ใส่จาก Google Cloud Console
GOOGLE_CLIENT_SECRET=ใส่จาก Google Cloud Console
MONGODB_URI=mongodb+srv://USERNAME:PASSWORD@CLUSTER.mongodb.net/examdb?retryWrites=true&w=majority
NEXTAUTH_SECRET=ใส่ random string
```

---

## โครงสร้างฐานข้อมูล (MongoDB)

- User: เก็บข้อมูลผู้ใช้
- Exam: เก็บข้อมูลชุดข้อสอบ
- Question: เก็บคำถามแต่ละข้อ
- Permission: กำหนดสิทธิ์ว่าผู้ใช้คนไหนทำข้อสอบไหนได้บ้าง
- Result: เก็บผลการสอบ

---

## เพิ่มเติม

- สามารถ deploy ขึ้น Vercel หรือ Server ของคุณได้ทันที
- ตัวอย่างนี้เป็นพื้นฐาน สามารถต่อยอดเพิ่มฟีเจอร์, import ข้อสอบ, export ผลสอบ ฯลฯ ได้

---