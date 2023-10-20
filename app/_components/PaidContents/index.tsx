'use client';
import { useEffect, useState } from 'react';
import Paywall from '../Paywall';
import { supabase } from '@/_libs/auth';

type Props = {
  content: string;
};

export default function PaidContents({ content }: Props) {
  const [currentUser, setcurrentUser] = useState('');

  // 現在ログインしているユーザーを取得する処理
  const getCurrentUser = async () => {
    // ログインのセッションを取得する処理
    const { data } = await supabase.auth.getSession();
    // セッションがあるときだけ現在ログインしているユーザーを取得する
    if (data.session !== null) {
      // supabaseに用意されている現在ログインしているユーザーを取得する関数
      const {
        data: { user },
      } = await supabase.auth.getUser();
      // currentUserにユーザーのメールアドレスを格納
      setcurrentUser(user?.email ?? '');
    }
  };

  // HeaderコンポーネントがレンダリングされたときにgetCurrentUser関数が実行される
  useEffect(() => {
    getCurrentUser();
  }, []);

  return currentUser ? (
    <div
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  ) : (
    <Paywall />
  );
}
