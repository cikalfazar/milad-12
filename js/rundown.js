const rundown = [
    {
        title: "Registrasi Peserta Wisuda",
        interval: "07.00 - 07.40",
        description: "40 menit pendaftaran peserta wisuda."
    },
    {
        title: "Opening & Rekondisi & Gunting Pita",
        interval: "07.40 - 08.00",
        description: "Pembukaan resmi acara wisuda dan pemotongan pita."
    },
    {
        title: "Prosesi Wisudawan Memasuki Gedung",
        interval: "08.00 - 08.15",
        description: "Wisudawan mulai memasuki gedung acara."
    },
    {
        title: "Hiburan Assalaam Voice",
        interval: "08.00 - 08.15",
        description: "Penampilan musik dari Assalaam Voice."
    },
    {
        title: "Prosesi Wisuda Khotmil Qur'an",
        interval: "08.15 - 09.15",
        description: "Prosesi pembacaan dan wisuda Khotmil Qur'an."
    },
    {
        title: "Opening",
        interval: "09.15 - 09.20",
        description: "Pembukaan sesi kedua acara."
    },
    {
        title: "Tawasul",
        interval: "09.20 - 09.25",
        description: "Pembacaan doa tawasul."
    },
    {
        title: "Pembacaan Ayat Suci Al Qur'an",
        interval: "09.25 - 09.30",
        description: "Pembacaan ayat suci Al Qur'an."
    },
    {
        title: "Tasyakur Milad oleh Yayasan Assalaam",
        interval: "09.30 - 09.35",
        description: "Tasyakur milad dari pihak yayasan."
    },
    {
        title: "Tasyakuran Milad MTs PPTQ Assalaam 1,2 Dekade",
        interval: "09.35 - 09.50",
        description: "Perayaan milad MTs PPTQ Assalaam 1,2 dekade."
    },
    {
        title: "Penetapan Kelulusan & Alumni oleh Kepala MTs PPTQ Assalam",
        interval: "09.50 - 10.00",
        description: "Pengumuman kelulusan dan alumni oleh kepala madrasah."
    },
    {
        title: "Prosesi Serah Terima Kembali Santri dan Sungkem Kepada Orang Tua",
        interval: "10.00 - 10.10",
        description: "Santri menyerahkan diri kembali kepada orang tua dan sungkem."
    },
    {
        title: "Prakata Orang Tua Siswa",
        interval: "10.10 - 10.20",
        description: "Sambutan dari perwakilan orang tua siswa."
    },
    {
        title: "Penyerahan Penghargaan Santri Sesi 1",
        interval: "10.20 - 10.35",
        description: "Sesi pertama penyerahan penghargaan santri berprestasi."
    },
    {
        title: "Prosesi Penyerahan Raport Angkatan 10",
        interval: "10.35 - 11.30",
        description: "Penyerahan raport bagi siswa angkatan ke-10."
    },
    {
        title: "Ikrar Janji Alumni",
        interval: "11.30 - 11.40",
        description: "Pembacaan ikrar janji dari para alumni."
    },
    {
        title: "Penampilan Kls 9",
        interval: "11.40 - 12.00",
        description: "Pertunjukan dari siswa kelas 9."
    },
    {
        title: "Penyerahan Penghargaan Santri Berprestasi Sesi 2",
        interval: "12.00 - 12.15",
        description: "Sesi kedua penyerahan penghargaan santri."
    },
    {
        title: "Do'a",
        interval: "12.15 - 12.20",
        description: "Pembacaan doa penutup."
    },
    {
        title: "Penutupan",
        interval: "12.20 - 12.25",
        description: "Penutupan resmi rangkaian acara wisuda."
    }
];

function displayRundown(rundown) {
    let eItem = "";
    for (let i = 0; i < rundown.length; i++) {
        eItem += `
        <li>
          <div class="direction-r">
            <div class="flag-wrapper">
              <div class="flag">${rundown[i].title}</div>
              <span class="time-wrapper"><span class="time">${rundown[i].interval}</span></span>
            </div>
            <div class="desc">${rundown[i].description}</div>
          </div>
          </li>`;
    }
    $("#timeline").html(eItem);

}

displayRundown(rundown);