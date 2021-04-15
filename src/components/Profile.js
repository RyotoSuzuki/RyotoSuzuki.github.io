import SectionHeader from './SectionHeader';
function Profile() {
  return (
    <div>
      <SectionHeader letters="Introduce" />
      <p className="protext">
        初めまして。
        東京電機大学システムデザイン工学部情報システム工学科の鈴木稜人と申します。
        javaを講義で約三年間学んでいましたが、最近はjavascriptを学ぼうと思い、ポートフォリオを作成しました。
        大学の研究室ではブロックチェーンに関する研究をしようと考えています。
      </p>
    </div>
  );
}

export default Profile;
