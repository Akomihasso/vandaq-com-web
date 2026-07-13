import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description:
    "VANDAQ Gizlilik Politikası — kişisel verilerin, çerezlerin ve kullanıcı bilgilerinin nasıl işlendiğini açıklar.",
};

export default function GizlilikPage() {
  return (
    <LegalPage
      title="Gizlilik Politikası"
      subtitle="Bu politika; www.vandaq.com sitesini ve VANDAQ-X uygulamasını ziyaret eden ya da kullanan kişilerin kişisel verilerinin nasıl toplandığını, işlendiğini ve korunduğunu açıklar."
      updatedAt="14 Temmuz 2026"
    >
      <h2>1. Giriş</h2>
      <p>
        <strong>VANDAQ Yazılım ve Danışmanlık A.Ş.</strong> (“VANDAQ”, “biz”), 6698 sayılı Kişisel
        Verilerin Korunması Kanunu (“KVKK”), Elektronik Ticaretin Düzenlenmesi Hakkında 6563 sayılı
        Kanun ve ilgili ikincil mevzuat çerçevesinde kullanıcılarının gizliliğine önem verir. İşbu
        Gizlilik Politikası, veri sorumlusu sıfatıyla topladığımız bilgileri nasıl kullandığımızı
        şeffaf biçimde açıklamak amacıyla hazırlanmıştır.
      </p>

      <h2>2. Topladığımız Bilgiler</h2>
      <ul>
        <li>
          <strong>Doğrudan sağladığınız bilgiler:</strong> iletişim formunda ilettiğiniz ad, kurumsal
          e-posta, telefon, mesaj içeriği; VANDAQ-X hesabınızı oluştururken tanımladığınız firma
          bilgileri.
        </li>
        <li>
          <strong>Otomatik toplanan bilgiler:</strong> IP adresi, tarayıcı türü, cihaz bilgileri,
          ziyaret zamanı, ziyaret edilen sayfalar, yönlendiren URL (referrer), oturum çerez
          kayıtları.
        </li>
        <li>
          <strong>Üçüncü kaynaklardan alınan bilgiler:</strong> altyapı sağlayıcılarımızdan
          (Vercel, Supabase, Resend) ve iş ortaklarımızdan gelen teknik loglar.
        </li>
      </ul>

      <h2>3. Bilgilerin Kullanım Amaçları</h2>
      <ul>
        <li>Hizmetlerin sunulması, iyileştirilmesi ve teknik destek sağlanması,</li>
        <li>Sözleşmenin kurulması ve ifa edilmesi,</li>
        <li>Talep ve şikayetlerin değerlendirilmesi,</li>
        <li>Bilgi güvenliğinin ve sistem bütünlüğünün sağlanması,</li>
        <li>
          Yasal yükümlülüklerin (VUK, TTK, KVKK, 6563 sayılı Kanun) yerine getirilmesi,
        </li>
        <li>
          Açık rıza veya 6563 sayılı Kanun m. 6’ya uygun onay bulunması halinde ticari elektronik
          ileti gönderimi.
        </li>
      </ul>

      <h2>4. Çerez (Cookie) Kullanımı</h2>
      <p>Web sitemizde aşağıdaki çerez türlerini kullanıyoruz:</p>
      <table>
        <thead>
          <tr>
            <th>Tür</th>
            <th>Amaç</th>
            <th>Süre</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Zorunlu çerezler</td>
            <td>Oturum yönetimi, güvenlik, form gönderimi</td>
            <td>Oturum süresi</td>
          </tr>
          <tr>
            <td>Performans çerezleri</td>
            <td>Anonim ziyaret istatistikleri (sayfa yüklenme süresi vb.)</td>
            <td>En fazla 12 ay</td>
          </tr>
          <tr>
            <td>İşlevsellik çerezleri</td>
            <td>Dil/tema tercihinizin hatırlanması</td>
            <td>En fazla 12 ay</td>
          </tr>
        </tbody>
      </table>
      <p>
        Tarayıcı ayarlarınızdan çerezleri reddedebilir veya silebilirsiniz; ancak bu durumda site
        işlevlerinin bir kısmı çalışmayabilir.
      </p>

      <h2>5. Bilgi Aktarımı</h2>
      <p>
        Verileriniz, açık rızanız veya KVKK m. 8-9’da öngörülen istisnalar bulunmadığı sürece
        üçüncü kişilerle paylaşılmaz. Aşağıdaki durumlarda paylaşım söz konusu olabilir:
      </p>
      <ul>
        <li>
          Hizmet aldığımız <strong>barındırma, e-posta ve veri tabanı sağlayıcıları</strong>{" "}
          (Vercel Inc., Supabase Inc., Resend Inc.) — hizmetin teknik ifası için gerekli olduğu
          ölçüde.
        </li>
        <li>
          Yasal zorunluluk hallerinde <strong>yetkili kamu kurum ve kuruluşları</strong>.
        </li>
        <li>
          Danışmanlık aldığımız <strong>bağımsız denetçi, hukuk müşaviri ve mali müşavirler</strong>.
        </li>
      </ul>

      <h2>6. Yurt Dışına Aktarım</h2>
      <p>
        VANDAQ, altyapı sağlayıcılarının konumu gereği bazı verileri yurt dışında bulunan
        sunucularda barındırabilir. Bu aktarımlar, KVKK m. 9 uyarınca Kişisel Verileri Koruma
        Kurulu’nca ilan edilen güvenli ülkelere veya yeterli koruma taahhüdü altındaki alıcılara
        yapılır.
      </p>

      <h2>7. Veri Güvenliği</h2>
      <p>
        VANDAQ; TLS 1.2+ üzerinden şifreli iletişim, rol tabanlı erişim kontrolü (RBAC), veri
        tabanı seviyesinde <strong>Row Level Security</strong>, düzenli yedekleme ve loglama gibi
        idari ve teknik tedbirleri uygular. Buna karşın, internet üzerinden yapılan aktarımların
        hiçbir zaman %100 güvenli olmadığı bilinmektedir.
      </p>

      <h2>8. Saklama Süresi</h2>
      <p>
        Kişisel veriler, ilgili mevzuattaki azami sürelere (TTK m. 82 — 10 yıl; VUK m. 253 — 5
        yıl; 6563 sayılı Kanun — 3 yıl) ve işleme amacının gerektirdiği süreye uygun olarak saklanır;
        süre sonunda silinir, yok edilir veya anonim hale getirilir.
      </p>

      <h2>9. Haklarınız</h2>
      <p>
        KVKK m. 11 kapsamındaki tüm haklarınızı{" "}
        <a href="/kvkk">Aydınlatma Metni</a>’nde belirtilen usullerle kullanabilirsiniz. Ayrıntılı
        başvuru için <a href="mailto:kvkk@vandaq.com">kvkk@vandaq.com</a> adresine
        ulaşabilirsiniz.
      </p>

      <h2>10. Politikadaki Değişiklikler</h2>
      <p>
        VANDAQ, işbu Politika’yı gerektiğinde tek taraflı olarak güncelleyebilir. Önemli
        değişiklikler, web sitesinde yayımlandığı tarihte yürürlüğe girer. Güncel metin her zaman{" "}
        <a href="/gizlilik">www.vandaq.com/gizlilik</a> adresinde bulunur.
      </p>

      <h2>11. İletişim</h2>
      <p>
        Gizlilik uygulamalarımıza ilişkin her türlü soru için:{" "}
        <a href="mailto:bilgi@vandaq.com">bilgi@vandaq.com</a>
      </p>
    </LegalPage>
  );
}
