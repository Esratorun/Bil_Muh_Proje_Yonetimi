/**
 * AUTH-6: Şifre Sıfırlama (Reset Password) API Simülasyonu
 * Bu fonksiyon, şifresini unutan kullanıcıya sıfırlama linki gönderir.
 */

function sendResetLink(email) {
    console.log("--- Şifre Sıfırlama İsteği: " + email + " ---");

    // 1. E-posta Format Kontrolü
    if (!email || !email.includes("@")) {
        return { 
            status: "Hata", 
            code: 400, 
            mesaj: "Geçerli bir e-posta adresi giriniz." 
        };
    }

    // 2. Kullanıcı Var mı Kontrolü (Simülasyon)
    const kayitliKullanici = "dilara@test.com";

    if (email === kayitliKullanici) {
        // Kullanıcı bulundu, link gönderiliyor...
        console.log("Sistem: Sıfırlama e-postası gönderildi -> " + email);
        
        return { 
            status: "Başarılı", 
            code: 200, 
            mesaj: "Sıfırlama bağlantısı e-posta adresinize gönderildi." 
        };
    } else {
        // Güvenlik gereği "Kullanıcı bulunamadı" demek yerine,
        // bazen "Eğer kayıtlıysa gönderildi" denir ama biz hata dönelim.
        return { 
            status: "Hata", 
            code: 404, 
            mesaj: "Bu e-posta adresi ile kayıtlı kullanıcı bulunamadı." 
        };
    }
}

// Test Kodu:
// console.log(sendResetLink("dilara@test.com"));
