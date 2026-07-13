import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description:
    "6698 Sayılı Kişisel Verilerin Korunması Kanunu kapsamında VANDAQ tarafından hazırlanan aydınlatma metni.",
};

export default function KvkkPage() {
  return (
    <LegalPage
      title="KVKK Aydınlatma Metni"
      subtitle="6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) 10. maddesi ve Aydınlatma Yükümlülüğünün Yerine Getirilmesinde Uyulacak Usul ve Esaslar Hakkında Tebliğ uyarınca hazırlanmıştır."
      updatedAt="14 Temmuz 2026"
    >
      <h2>1. Veri Sorumlusunun Kimliği</h2>
      <p>
        İşbu Aydınlatma Metni; 6698 sayılı Kanun uyarınca <strong>veri sorumlusu</strong> sıfatıyla
        hareket eden <strong>VANDAQ Yazılım ve Danışmanlık A.Ş.</strong> (“VANDAQ” veya “Şirket”)
        tarafından, ilgili kişileri bilgilendirmek amacıyla hazırlanmıştır.
      </p>
      <table>
        <tbody>
          <tr>
            <th>Unvan</th>
            <td>VANDAQ Yazılım ve Danışmanlık A.Ş.</td>
          </tr>
          <tr>
            <th>Adres</th>
            <td>[Şirket adresi ticaret sicil kaydına uygun olarak güncellenecektir]</td>
          </tr>
          <tr>
            <th>MERSİS No</th>
            <td>[MERSİS No güncellenecektir]</td>
          </tr>
          <tr>
            <th>VERBİS Kayıt No</th>
            <td>[VERBİS Sicil No güncellenecektir]</td>
          </tr>
          <tr>
            <th>E-posta</th>
            <td>
              <a href="mailto:kvkk@vandaq.com">kvkk@vandaq.com</a>
            </td>
          </tr>
          <tr>
            <th>KEP Adresi</th>
            <td>[KEP adresi güncellenecektir]</td>
          </tr>
        </tbody>
      </table>

      <h2>2. İşlenen Kişisel Veri Kategorileri</h2>
      <p>
        VANDAQ, hizmetlerin sunulması ve yasal yükümlülüklerin yerine getirilmesi amacıyla aşağıdaki
        kişisel veri kategorilerini işleyebilir:
      </p>
      <ul>
        <li>
          <strong>Kimlik verileri:</strong> ad, soyad, unvan.
        </li>
        <li>
          <strong>İletişim verileri:</strong> kurumsal e-posta adresi, telefon numarası, işyeri
          adresi.
        </li>
        <li>
          <strong>Müşteri işlem verileri:</strong> talep içeriği, sözleşme bilgileri, fatura
          bilgileri.
        </li>
        <li>
          <strong>İşlem güvenliği verileri:</strong> IP adresi, çerez kayıtları, oturum bilgileri,
          log kayıtları.
        </li>
        <li>
          <strong>Pazarlama verileri:</strong> bülten aboneliği tercihi, iletişim onayı.
        </li>
      </ul>
      <p>
        VANDAQ, sunduğu hizmetin doğası gereği <strong>hassas ticari veri (firma finansal
        oranları, üretim ve tedarik verileri)</strong> işleyebilir; ancak bu veriler, KVKK
        anlamında <em>kişisel veri</em> niteliğinde olmadıkça bu metnin kapsamı dışındadır ve ilgili
        sözleşme hükümlerine tabidir.
      </p>

      <h2>3. Kişisel Verilerin İşlenme Amaçları</h2>
      <p>Kişisel verileriniz, KVKK’nın 5. ve 6. maddelerinde belirtilen şartlara uygun olarak;</p>
      <ul>
        <li>
          Web sitesi (www.vandaq.com) ve VANDAQ-X uygulaması üzerinden sunulan hizmetlerin
          yürütülmesi,
        </li>
        <li>Kullanıcı hesabının oluşturulması ve doğrulanması,</li>
        <li>Sözleşmenin kurulması ve ifası; faturalandırma ve ödeme süreçlerinin yönetimi,</li>
        <li>Talep ve şikayetlerin karşılanması, müşteri destek hizmeti sağlanması,</li>
        <li>
          Yasal yükümlülüklerin (VUK, TTK, KVKK, MASAK vb.) yerine getirilmesi ve mevzuat gereği
          bilgi paylaşımı,
        </li>
        <li>Bilgi güvenliğinin sağlanması, siber saldırıların önlenmesi, denetim faaliyetleri,</li>
        <li>
          Açık rıza verildiği takdirde tanıtım, kampanya ve bülten gönderimi ile ürün geliştirme
          çalışmaları,
        </li>
      </ul>
      <p>amaçlarıyla işlenmektedir.</p>

      <h2>4. Kişisel Verilerin Aktarımı</h2>
      <p>
        Kişisel verileriniz, KVKK’nın 8. ve 9. maddelerinde düzenlenen kurallara uygun olarak,
        aşağıdaki alıcı gruplarına aktarılabilir:
      </p>
      <ul>
        <li>
          <strong>Yurt içi sunucu ve bulut hizmet sağlayıcıları</strong> (barındırma, yedekleme).
        </li>
        <li>
          <strong>Yurt dışı hizmet sağlayıcılar</strong> (Vercel, Supabase, Resend gibi altyapı
          sağlayıcıları) — yalnızca standart sözleşme hükümleri veya taahhütname temelinde ve KVKK
          9. madde koşulları sağlandığı ölçüde.
        </li>
        <li>
          <strong>Yetkili kamu kurum ve kuruluşları</strong> (mahkeme, savcılık, kurul kararları
          gereği).
        </li>
        <li>
          <strong>Bağımsız denetim, hukuk ve mali müşavirlik hizmeti alınan üçüncü kişiler.</strong>
        </li>
      </ul>

      <h2>5. Verilerin Toplanma Yöntemi ve Hukuki Sebebi</h2>
      <p>
        Kişisel verileriniz; web sitesi formları, çerezler, e-posta, telefon, sözleşme, VANDAQ-X
        uygulaması ve entegre üçüncü taraf servisler üzerinden <strong>elektronik ve fiziksel
        yöntemler</strong> ile toplanmaktadır. İşleme faaliyetinin hukuki sebebi;
      </p>
      <ul>
        <li>Sözleşmenin kurulması veya ifası için gerekli olması (KVKK m. 5/2-c),</li>
        <li>Kanunlarda açıkça öngörülmesi (KVKK m. 5/2-a),</li>
        <li>Hukuki yükümlülüğün yerine getirilmesi (KVKK m. 5/2-ç),</li>
        <li>
          Meşru menfaatler kapsamında zorunlu olması ve temel hak ve özgürlüklere zarar vermemesi
          (KVKK m. 5/2-f),
        </li>
        <li>
          Bunlar dışında kalan tanıtım/pazarlama iletişimi için <strong>açık rıza</strong>{" "}
          (KVKK m. 5/1)
        </li>
      </ul>
      <p>hukuki sebepleridir.</p>

      <h2>6. Saklama Süreleri</h2>
      <p>
        Kişisel verileriniz, ilgili mevzuatta öngörülen süreler (Türk Ticaret Kanunu m. 82 — 10
        yıl; VUK m. 253 — 5 yıl; Elektronik Ticaret Kanunu — 3 yıl vb.) ve işleme amacının
        gerektirdiği süre boyunca saklanır; sürenin sonunda re’sen veya talep üzerine{" "}
        <strong>silinir, yok edilir veya anonim hale getirilir</strong> (KVKK m. 7).
      </p>

      <h2>7. İlgili Kişinin Hakları (KVKK m. 11)</h2>
      <p>
        KVKK’nın 11. maddesi kapsamında ilgili kişi olarak Şirketimize başvurarak aşağıdaki
        haklarınızı kullanabilirsiniz:
      </p>
      <ol>
        <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
        <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
        <li>İşleme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
        <li>Yurt içinde/dışında aktarıldığı üçüncü kişileri bilme,</li>
        <li>Eksik/yanlış işlenmişse düzeltilmesini isteme,</li>
        <li>KVKK m. 7 çerçevesinde silinmesini veya yok edilmesini isteme,</li>
        <li>Yapılan işlemlerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
        <li>
          Otomatik sistemler ile analiz sonucunda aleyhinize çıkan sonuca itiraz etme,
        </li>
        <li>
          KVKK’ya aykırı işleme nedeniyle zarara uğramanız halinde zararın giderilmesini talep
          etme.
        </li>
      </ol>

      <h2>8. Başvuru Yöntemi</h2>
      <p>
        Yukarıda sayılan haklarınıza ilişkin taleplerinizi, <strong>Veri Sorumlusuna Başvuru Usul
        ve Esasları Hakkında Tebliğ</strong> uyarınca;
      </p>
      <ul>
        <li>
          Yazılı olarak Şirket adresine ıslak imzalı olarak veya noter kanalı ile,
        </li>
        <li>
          Kayıtlı elektronik posta (KEP) adresi ile Şirket KEP adresine güvenli elektronik imzalı
          olarak,
        </li>
        <li>
          <a href="mailto:kvkk@vandaq.com">kvkk@vandaq.com</a> adresine, sistemimizde kayıtlı
          e-posta adresinizden,
        </li>
      </ul>
      <p>
        iletebilirsiniz. Başvurunuz en geç <strong>30 gün</strong> içinde ücretsiz olarak
        sonuçlandırılır; işlemin ayrıca bir maliyet gerektirmesi halinde Kurul tarafından
        belirlenen tarife üzerinden ücret alınabilir.
      </p>

      <h2>9. Değişiklikler</h2>
      <p>
        VANDAQ, işbu Aydınlatma Metni’ni mevzuattaki değişiklikler ve iş süreçlerinin gerektirdiği
        ölçüde güncelleme hakkını saklı tutar. Güncel metin, her zaman{" "}
        <a href="/kvkk">www.vandaq.com/kvkk</a> adresinde yayımlanır.
      </p>
    </LegalPage>
  );
}
