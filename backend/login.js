/**
 * AUTH-5: Kullanıcı Giriş (Login) API Simülasyonu
 * Bu fonksiyon, frontend'den gelen e-posta ve şifreyi kontrol eder.
 */

function loginUser(email, sifre) {
    console.log("--- Giriş İsteği Alındı: " + email + " ---");

    // 1. Boş Alan Kontrolü
    if (!email || !sifre) {
        return { 
            status: "Hata", 
            code: 400, 
            mesaj: "E-posta ve şifre boş bırakılamaz." 
        };
    }

    // 2. Veritabanı Kontrol Simülasyonu
    // Gerçekte burada "SELECT * FROM users WHERE email = ..." çalışır.
    // Biz örnek olarak sabit bir kullanıcıyı kontrol edelim.
    
    const kayitliEmail = "dilara@test.com";
    const kayitliSifre = "123456";

    if (email === kayitliEmail && sifre === kayitliSifre) {
        // Şifreler Eşleşti!
        return { 
            status: "Başarılı", 
            code: 200, 
            mesaj: "Giriş başarılı! Yönlendiriliyorsunuz...",
            token: "TOKEN-XYZ-123" // Oturum anahtarı
        };
    } else {
        // Bilgiler Yanlış
        return { 
            status: "Hata", 
            code: 401, 
            mesaj: "E-posta adresi veya şifre hatalı!" 
        };
    }
}

// Test için konsola yazdırabiliriz:
// console.log(loginUser("dilara@test.com", "123456"));
