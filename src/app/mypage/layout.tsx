import '@/app/globals.css';
import { UserProvider } from '../context/user-context';
import MyPage from '@/components/features/mypage/my-page';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <UserProvider>
      <MyPage>{children}</MyPage>
    </UserProvider>
  );
}
