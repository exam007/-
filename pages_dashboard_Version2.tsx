import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return;
    if (!session || session.user?.role !== 'admin') {
      router.replace('/');
    }
  }, [session, status, router]);

  if (status === 'loading' || !session) {
    return <div>กำลังโหลด...</div>;
  }

  return (
    <div style={{ maxWidth: 700, margin: '60px auto', textAlign: 'center' }}>
      <h2>แดชบอร์ดผู้ดูแลระบบ</h2>
      <p>คุณ: {session.user?.name} ({session.user?.email})</p>
      <hr />
      <h3>เมนู (ตัวอย่าง)</h3>
      <ul>
        <li>จัดการชุดข้อสอบ</li>
        <li>จัดการสิทธิ์ผู้ใช้</li>
        <li>ดูผลการสอบ</li>
        {/* TODO: เพิ่ม component จัดการจริง */}
      </ul>
      <button onClick={() => signOut()}>ออกจากระบบ</button>
    </div>
  );
}