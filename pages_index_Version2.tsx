import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return <div>กำลังโหลด...</div>;
  }

  if (!session) {
    return (
      <div style={{ textAlign: 'center', marginTop: 100 }}>
        <h2>เข้าสู่ระบบเพื่อทำข้อสอบ</h2>
        <button onClick={() => signIn('google')}>เข้าสู่ระบบด้วย Google</button>
      </div>
    );
  }

  // ถ้าเป็น admin ให้ redirect ไป dashboard
  if (session?.user?.email?.endsWith('@attorney285.co.th')) {
    router.replace('/dashboard');
    return <div>กำลังเข้าสู่แดชบอร์ด...</div>;
  }

  // User ปกติ - เห็นข้อสอบที่มีสิทธิ์ (mock)
  return (
    <div style={{ maxWidth: 500, margin: '60px auto', textAlign: 'center' }}>
      <h2>สวัสดี {session.user?.name} 👋</h2>
      <p>คุณกำลังใช้บัญชี: {session.user?.email}</p>
      <hr />
      <h3>ข้อสอบของคุณ</h3>
      <ul>
        <li>ข้อสอบ A (สิทธิ์ทำ 2 ครั้ง)</li>
        <li>ข้อสอบ B (สิทธิ์ทำ 1 ครั้ง)</li>
        {/* TODO: ดึงจากฐานข้อมูลจริง */}
      </ul>
      <button onClick={() => signOut()}>ออกจากระบบ</button>
    </div>
  );
}