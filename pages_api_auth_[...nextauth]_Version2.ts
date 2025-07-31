import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      // อนุญาตเฉพาะ email @gmail.com, @attorney285.co.th
      if (
        user.email?.endsWith('@gmail.com') ||
        user.email?.endsWith('@attorney285.co.th')
      ) {
        return true;
      }
      return false;
    },
    async session({ session, token, user }) {
      // เพิ่ม role (admin ถ้า email ถูกต้อง)
      if (
        session.user?.email?.endsWith('@attorney285.co.th')
      ) {
        session.user.role = 'admin';
      } else {
        session.user.role = 'user';
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
});