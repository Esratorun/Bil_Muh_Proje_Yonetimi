/**
 * AUTH-4: Kullanıcı Kayıt (Register) API Simülasyonu
 * Bu fonksiyon frontend'den gelen verileri alır ve veritabanına kaydeder.
 */

function registerUser(adSoyad, email, sifre) {
    console.log("--- Kayıt İşlemi Başlatıldı ---");
    
    // 1. Validasyon (Doğrulama) Kontrolü
    if (!email.includes("@")) {
        return { 
            status: "Hata", 
            code: 400, 
            mesaj: "Geçersiz e-posta adresi!" 
        };
    }

    if (sifre.length < 6) {
        return { 
            status: "Hata", 
            code: 400, 
            mesaj: "Şifre en az 6 karakter olmalıdır." 
        };
    }

    // 2. Veritabanı Kayıt Simülasyonu
    // Gerçekte burada "INSERT INTO users..." gibi bir SQL kodu çalışır.
    const yeniKullanici = {
        id: Math.floor(Math.random() * 1000),
        isim: adSoyad,
        email: email,
        kayitTarihi: new Date()
    };

    console.log("Kullanıcı veritabanına kaydedildi:", yeniKullanici);

    // 3. Başarılı Yanıt Dön
    return { 
        status: "Başarılı", 
        code: 201, 
        mesaj: "Kayıt başarıyla oluşturuldu.",
        data: yeniKullanici
    };
}

// Test etmek için örnek kullanım:
// console.log(registerUser("Dilara Bebek", "dilara@test.com", "123456"));
