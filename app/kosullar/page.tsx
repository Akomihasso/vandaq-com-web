import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Kullanım Koşulları",
  description:
    "VANDAQ web sitesi ve VANDAQ-X uygulamasının kullanımına ilişkin koşullar ve sözleşme.",
};

export default function KosullarPage() {
  return (
    <LegalPage
      title="Kullanım Koşulları"
      subtitle="Bu koşullar; VANDAQ web sitesi (www.vandaq.com) ve VANDAQ-X uygulamasının kullanımına ilişkin kullanıcılar ile VANDAQ arasındaki sözleşmesel çerçeveyi düzenler."
      updatedAt="14 Temmuz 2026"
    >
      <h2>1. Taraflar ve Tanımlar</h2>
      <p>
        İşbu Kullanım Koşulları (“Sözleşme”); bir tarafta <strong>VANDAQ Yazılım ve Danışmanlık
        A.Ş.</strong> (“VANDAQ”) ile diğer tarafta web sitesini ziyaret eden veya VANDAQ-X
        uygulamasına kayıt olan gerçek/tüzel kişi (“Kullanıcı”) arasında akdedilmiştir.
      </p>
      <ul>
        <li>
          <strong>Platform:</strong> www.vandaq.com web sitesi ve VANDAQ-X yazılım uygulamasının
          tümü.
        </li>
        <li>
          <strong>Hizmet:</strong> Kurumsal Dijital İkiz oluşturma, dış sinyalleri işleme, etki
          analizi ve strateji önerileri sunma faaliyetleri.
        </li>
        <li>
          <strong>İçerik:</strong> Platform’da yer alan tüm metin, görsel, veri, algoritma ve
          yazılım unsurları.
        </li>
      </ul>

      <h2>2. Sözleşmenin Kabulü</h2>
      <p>
        Kullanıcı, Platform’a erişerek veya Hizmet’i kullanarak işbu Sözleşme’yi okuduğunu,
        anladığını ve kabul ettiğini beyan eder. Sözleşme’yi kabul etmiyorsanız Platform’u
        kullanmamalısınız.
      </p>

      <h2>3. Hizmetin Kapsamı</h2>
      <p>
        VANDAQ, dış sinyalleri (para piyasaları, enerji, jeopolitik, iklim ve regülasyon)
        Kullanıcı’nın firma profiline göre işleyerek sayısal etki ve strateji önerileri üretir.{" "}
        <strong>Hizmet; yatırım danışmanlığı, hukuki danışmanlık veya vergi danışmanlığı hizmeti
        değildir</strong> ve 6362 sayılı Sermaye Piyasası Kanunu kapsamındaki yatırım tavsiyesi
        olarak nitelendirilemez. Kullanıcı, aldığı stratejik kararlarda kendi profesyonel
        danışmanlarına başvurmakla yükümlüdür.
      </p>

      <h2>4. Kullanıcı Yükümlülükleri</h2>
      <ul>
        <li>Kayıt sırasında verdiği bilgilerin doğruluğundan Kullanıcı sorumludur.</li>
        <li>
          Kullanıcı, hesap bilgilerinin gizliliğini korumak ve yetkisiz erişimi engellemekle
          yükümlüdür.
        </li>
        <li>
          Kullanıcı; Platform’u yürürlükteki mevzuata, kamu düzenine, genel ahlaka ve dürüstlük
          kurallarına uygun kullanmayı taahhüt eder.
        </li>
        <li>
          Kullanıcı; Platform’a zarar verebilecek yazılım, bot, tersine mühendislik, web kazıma
          (scraping), otomatik yükleme ve DDoS türü girişimlerde bulunmamayı kabul eder.
        </li>
        <li>
          Kullanıcı, Platform üzerinden yüklediği verilerin üçüncü kişilerin fikri veya sınai
          haklarını ihlal etmediğini garanti eder.
        </li>
      </ul>

      <h2>5. Ücretlendirme ve Ödeme</h2>
      <p>
        Ücretli planların bedelleri fiyatlandırma sayfasında (www.vandaq.com üzerindeki
        “Fiyatlandırma” bölümü) yayımlanır. Ödemeler, VANDAQ’ın anlaşmalı olduğu ödeme
        kuruluşları aracılığıyla tahsil edilir. VANDAQ, fiyat değişikliklerini{" "}
        <strong>en az 30 gün öncesinden</strong> Kullanıcı’ya bildirir. Ücretsiz deneme
        döneminde kredi kartı bilgisi talep edilmez.
      </p>

      <h2>6. Cayma Hakkı ve İade</h2>
      <p>
        Kullanıcı, Mesafeli Sözleşmeler Yönetmeliği kapsamında dijital içerik hizmetleri için
        cayma hakkının ifanın başlamasıyla sona erdiğini kabul eder. Buna karşın, VANDAQ tarafından
        sunulan{" "}
        <strong>15 günlük ücretsiz deneme süresi</strong> içinde Kullanıcı, herhangi bir bedel
        ödemeden aboneliğini iptal edebilir. Ücretli dönem başladıktan sonra, dönem içi iade talebi
        VANDAQ’ın münhasır takdirine bağlıdır.
      </p>

      <h2>7. Fikri ve Sınai Haklar</h2>
      <p>
        Platform’un ismi, logosu, arayüzü, kodu, algoritmaları, dokümantasyonu ve tüm İçerik’i
        VANDAQ’a veya lisans verenlerine aittir. VANDAQ, dünyada ilk ve tek olan patentli{" "}
        <strong>VANDAQ-X</strong> projesinin yürütücüsüdür; ilgili patent süreçleri 6769 sayılı
        Sınai Mülkiyet Kanunu (SMK) ve Avrupa Patent Sözleşmesi (EPC) çerçevesinde yürütülmektedir.
        Kullanıcı’ya yalnızca; işbu Sözleşme süresince, dünya çapında, devredilemez, alt lisans
        verilemez ve münhasır olmayan bir kullanım hakkı tanınır.
      </p>

      <h2>8. Kullanıcı İçeriği</h2>
      <p>
        Kullanıcı, Platform’a yüklediği veriler (dijital ikiz parametreleri, firma profili vb.)
        üzerindeki mülkiyet hakkını korur. VANDAQ, işbu Sözleşme kapsamında Hizmet’i sunabilmek
        amacıyla söz konusu veriyi işleme, kopyalama ve saklama hakkına sahiptir. Kullanıcı
        verileri, anonim hale getirilmedikçe üçüncü kişilere satılmaz veya kiralanmaz.
      </p>

      <h2>9. Sorumluluğun Sınırlandırılması</h2>
      <p>
        VANDAQ; Hizmet kapsamında sunulan strateji önerilerinin uygulanmasından doğan sonuçlardan,
        dolaylı zararlardan, kâr kaybından ve iş kesintisinden sorumlu değildir. VANDAQ’ın toplam
        sorumluluğu, ilgili talebin doğduğu tarihten geriye doğru{" "}
        <strong>son 12 ayda Kullanıcı’dan tahsil edilen abonelik bedeli</strong> ile sınırlıdır.
        Bu sınırlama; kasıt, ağır kusur veya kanunen sınırlanamayacak sorumluluk halleri için
        uygulanmaz.
      </p>

      <h2>10. Mücbir Sebepler</h2>
      <p>
        Doğal afet, savaş, salgın hastalık, siber saldırı, kamu otoritesi kararı, elektrik/internet
        kesintisi gibi VANDAQ’ın makul kontrolü dışındaki olaylar mücbir sebep sayılır ve bu
        durumların devamı süresince tarafların yükümlülükleri askıya alınır.
      </p>

      <h2>11. Askıya Alma ve Fesih</h2>
      <p>
        VANDAQ; işbu Sözleşme’ye veya yürürlükteki mevzuata aykırılık halinde Kullanıcı’nın
        Platform erişimini önceden bildirimde bulunmaksızın{" "}
        <strong>askıya alabilir veya feshedebilir</strong>. Kullanıcı, uygulama içi ayarlardan veya
        <a href="mailto:bilgi@vandaq.com"> bilgi@vandaq.com</a> adresine bildirim göndererek her
        zaman aboneliğini sonlandırabilir.
      </p>

      <h2>12. Kişisel Verilerin Korunması</h2>
      <p>
        Kullanıcı’nın kişisel verilerinin işlenmesine ilişkin ayrıntılı bilgi, işbu Sözleşme’nin
        ayrılmaz parçası olan{" "}
        <a href="/kvkk">KVKK Aydınlatma Metni</a> ve{" "}
        <a href="/gizlilik">Gizlilik Politikası</a>’nda düzenlenmiştir.
      </p>

      <h2>13. Ticari Elektronik İletiler</h2>
      <p>
        VANDAQ, 6563 sayılı Elektronik Ticaretin Düzenlenmesi Hakkında Kanun ve Ticari İletişim
        Yönetmeliği kapsamında onay verildiği takdirde ticari elektronik ileti gönderebilir.
        Kullanıcı, İYS (İleti Yönetim Sistemi) üzerinden veya iletinin altında bulunan “ret”
        bağlantısı ile onayını her zaman geri alabilir.
      </p>

      <h2>14. Uygulanacak Hukuk ve Yetkili Mahkeme</h2>
      <p>
        İşbu Sözleşme, <strong>Türkiye Cumhuriyeti hukukuna</strong> tabidir. Sözleşme’den
        doğabilecek uyuşmazlıkların çözümünde <strong>İstanbul Merkez (Çağlayan) Mahkemeleri ve
        İcra Daireleri</strong> yetkilidir. Tüketici sıfatına haiz Kullanıcı’lar için 6502 sayılı
        Tüketicinin Korunması Hakkında Kanun hükümleri saklıdır; yetkili tüketici hakem heyeti/
        tüketici mahkemesi bu hükümlere göre belirlenir.
      </p>

      <h2>15. Değişiklikler</h2>
      <p>
        VANDAQ; işbu Sözleşme’yi güncelleme hakkını saklı tutar. Değişiklikler, Platform’da
        yayımlandığı andan itibaren yürürlüğe girer. Kullanıcı, güncel Sözleşme’yi her zaman{" "}
        <a href="/kosullar">www.vandaq.com/kosullar</a> adresinden inceleyebilir.
      </p>

      <h2>16. İletişim</h2>
      <p>
        Sözleşme’ye ilişkin sorular için:{" "}
        <a href="mailto:bilgi@vandaq.com">bilgi@vandaq.com</a>
      </p>
    </LegalPage>
  );
}
