# LAPORAN REVIEW PRAKTIKUM PERTEMUAN 6
**Activity Diagram: Mengubah Skenario Menjadi Alur Aktivitas**

## 1. Identitas & Informasi Praktikum
* **Nama Mahasiswa:** Chipta Dhera Aditya
* **NIM:** 2406042
* **Mata Kuliah:** Praktikum Analisis dan Desain Berorientasi Objek (IFRWP5149)
* **Institusi:** Institut Teknologi Garut – S1 Teknik Informatika
* **Pertemuan:** 6 (Activity Diagram)
* **Repositori GitHub:** `IFRWP5149_2406042_LabAlat`
* **Lokasi Penyimpanan File:** `06_Laporan/P06_2406042_jobsheet_review_v01.md`

---

## 2. Capaian Pembelajaran
Setelah mengikuti praktikum pertemuan ke-6 ini, mahasiswa diharapkan mampu:
1. Merancang alur utama (*main flow*) pada *Activity Diagram* berdasarkan **Skenario Normal** dari tabel skenario Pertemuan 5 dengan tepat satu *initial node*, rangkaian *action* yang selaras dengan langkah skenario, serta minimal satu *activity final node* tanpa alur yang terputus (**Indikator 4.1**).
2. Mengonversi **Skenario Alternative** menjadi cabang *decision* berlabel *guard* yang saling lepas dan komprehensif, lalu menggabungkannya kembali lewat *merge* atau mengakhirinya pada *activity final node* yang jelas (**Indikator 4.2**).
3. Memanfaatkan pasangan *fork* dan *join* untuk memodelkan dua proses yang berjalan secara paralel serta menyatukannya kembali sebelum alur berlanjut (**Indikator 4.2**).
4. Mengelompokkan setiap *action* ke dalam *swimlane* (partisi aktivitas) sesuai dengan aktor pelaku yang tercantum pada tabel skenario (**Indikator 4.1 & 4.2**).
5. Melakukan penelusuran (*traceability*) tiap *action* pada diagram terhadap tabel skenario Pertemuan 5 sekaligus mengecek kelengkapan file memakai *checklist* penilaian resmi sebelum dikumpulkan.

---

## 3. Landasan Teori & Aturan Praktikum

### A. Sembilan Komponen Utama Activity Diagram (OMG UML 2.5.1)
1. **Initial Node:** Titik awal dimulainya alur (hanya ada satu pada setiap diagram).
2. **Action:** Satu langkah aktivitas dari tabel skenario, dirumuskan memakai pola **Kata Kerja + Objek** (misalnya: *Mengisi formulir pengajuan peminjaman*).
3. **Control Flow:** Garis berpanah yang menunjukkan arah perpindahan antar-aktivitas.
4. **Decision:** Titik percabangan bersyarat; setiap jalur keluar wajib menyertakan label *guard* di dalam kurung siku (`[...]`).
5. **Merge:** Titik pertemuan kembali jalur percabangan menuju alur utama.
6. **Fork:** Batang pemecah satu alur menjadi dua atau lebih aktivitas yang berjalan paralel.
7. **Join:** Batang penyatu kembali aktivitas paralel dari *fork* (menahan alur sampai seluruh jalur paralel rampung sebelum dilanjutkan).
8. **Activity Final Node:** Titik akhir dari keseluruhan alur aktivitas.
9. **Swimlane (Partisi Aktivitas):** Pembagian kolom tanggung jawab berdasarkan aktor manusia maupun **Sistem**.

### B. Pemetaan Tabel Skenario (P05) ke Activity Diagram (P06)

| Elemen pada Tabel Skenario (P05) | Visualisasi pada Activity Diagram (P06) |
| :--- | :--- |
| **Skenario Normal** | Alur utama: rangkaian *action* dari *initial node* sampai *activity final node*. |
| **Skenario Alternative** | Cabang *decision* dengan *guard* spesifik (contoh: `[tersedia]` / `[tidak tersedia]`). |
| **Langkah `<<include>>`** | *Action* wajib pada alur utama mengikuti urutan langkahnya (misal: *Periksa Ketersediaan* dari `LAB-UC04`). |
| **Langkah `<<extend>>`** | Cabang *decision* bersyarat sesuai *extension point* (misal: `[ya, memilih cetak]` menuju *Cetak Bukti Pengajuan* dari `LAB-UC05`). |
| **Kolom Kegiatan (Aktor)** | *Action* diletakkan di dalam *swimlane* aktor manusia bersangkutan. |
| **Kolom Respon Sistem** | *Action* diletakkan di dalam *swimlane* **Sistem**. |
| **Dua Pemeriksaan Independen** | Pasangan **Fork** dan **Join** untuk eksekusi paralel sebelum pengambilan keputusan akhir. |
| **Collaboration** | **Tidak digambarkan** sebagai *action* maupun *swimlane* karena bukan merupakan urutan kegiatan. |

---

## 4. Hasil Pelaksanaan Praktikum

### A. Pemodelan 7 Activity Diagram Studi Kasus Laboratorium (`LAB`)
Ketujuh *use case* utama pada sistem `LabAlat` telah dimodelkan ke dalam format `.drawio` dan `.png` di dalam direktori `04_model_analisis/P06/LAB/`:

1. **`LAB-UC01` Lihat Ketersediaan Peralatan (`P06_2406042_LAB_activity_lihat_ketersediaan_v01`)**
   * **Swimlane:** Peminjam, Sistem.
   * **Alur & Logika:** Alur pembacaan data tanpa modifikasi basis data, dilengkapi *decision* `Peralatan tersedia?` dengan *guard* `[tersedia]` dan `[tidak tersedia]` yang bertemu kembali di *merge* sebelum berakhir.
2. **`LAB-UC02` Kelola Data Peralatan (`P06_2406042_LAB_activity_kelola_data_v01`)**
   * **Swimlane:** Petugas Laboratorium, Sistem.
   * **Alur & Logika:** Memadukan 3 *use case* varian ke dalam satu *decision* `Bentuk pengelolaan yang dipilih?`:
     * `[tambah]` $\rightarrow$ langkah spesifik `LAB-UC08` (Tambah Data Peralatan).
     * `[ubah]` $\rightarrow$ langkah spesifik `LAB-UC09` (Ubah Data Peralatan) + validasi `Data peralatan ditemukan?`.
     * `[hapus]` $\rightarrow$ langkah spesifik `LAB-UC10` (Hapus Data Peralatan) + validasi `Syarat penghapusan terpenuhi?` (tidak sedang dipinjam & tidak ada pengajuan aktif).
     * Ketiga jalur tersebut disatukan oleh *merge* menuju validasi akhir `Data lengkap dan sah?`.
3. **`LAB-UC03` Ajukan Peminjaman (`P06_2406042_LAB_activity_peminjaman_v01`)**
   * **Swimlane:** Mahasiswa, Sistem, Petugas Laboratorium.
   * **Alur & Logika:** Mencakup langkah wajib `<<include>>` *Periksa Ketersediaan (dari LAB-UC04)*, percabangan ketersediaan alat (`[tersedia]` vs `[tidak tersedia]`), serta percabangan `<<extend>>` di ujung proses (`Mahasiswa memilih cetak bukti?` dengan *guard* `[ya, memilih cetak]` dan `[tidak]`).
4. **`LAB-UC05` Cetak Bukti Pengajuan (`P06_2406042_LAB_activity_cetak_bukti_v01`)**
   * **Swimlane:** Mahasiswa, Sistem.
   * **Alur & Logika:** Dimulai tepat pada *extension point* **Bukti pengajuan tersedia** (setelah status pengajuan tercatat *Menunggu Keputusan*). Menggambarkan kondisi `[ya, memilih cetak]` hingga pencetakan bukti dan `[tidak]` untuk menutup tampilan konfirmasi tanpa mencetak.
5. **`LAB-UC06` Proses Keputusan Peminjaman (`P06_2406042_LAB_activity_keputusan_v01`) — *Tugas Mandiri***
   * **Swimlane:** Petugas Laboratorium, Sistem *(Mahasiswa tidak disertakan karena tidak memiliki peran langkah pada skenario)*.
   * **Alur & Logika:** Disusun secara mandiri terlebih dahulu sebelum pencocokan dengan pembanding. Memuat dua *decision* berurutan: `Pengajuan dapat diproses?` (`[dapat diproses]` / `[tidak dapat diproses]`) dan `Pengajuan disetujui?` (`[disetujui]` / `[ditolak]`) yang memperbarui status pengajuan secara eksplisit.
6. **`LAB-UC11` Catat Pengembalian Peralatan (`P06_2406042_LAB_activity_pengembalian_v01`)**
   * **Swimlane:** Mahasiswa, Sistem, Petugas Laboratorium.
   * **Alur & Logika:** Menerapkan pasangan **Fork** dan **Join** pada *swimlane* Petugas Laboratorium untuk memodelkan dua pemeriksaan paralel: *Periksa Kondisi Peralatan (dari LAB-UC12): kondisi fisik* dan *Periksa kelengkapan aksesori peralatan (unsur proses baru)*. Selepas *join*, *decision* `Kondisi peralatan baik dan lengkap?` memisahkan jalur `[baik dan lengkap]` (status alat kembali tersedia) dan `[rusak atau tidak lengkap]` (pencatatan kerusakan & penjadwalan perbaikan).
7. **`LAB-UC07` Lihat Laporan Peminjaman (`P06_2406042_LAB_activity_laporan_v01`)**
   * **Swimlane:** Kepala Laboratorium, Sistem.
   * **Alur & Logika:** Satu-satunya diagram yang melibatkan aktor Kepala Laboratorium. Dibatasi secara spesifik pada pemilihan periode laporan serta pengecekan *decision* `Ada data peminjaman?` (`[ada]` / `[tidak ada]`).

### B. Pemodelan Tugas Sistem Informasi Akademik (`SIA`)
* **File:** `04_model_analisis/P06/SIA/P06_2406042_SIA_activity_v01.drawio` (disertai `.png`)
* **Cakupan Proses:** Alur terintegrasi dari **Input Nilai Mata Kuliah (`SIA-UC08`)** hingga **Lihat KHS (`SIA-UC09`)**.
* **Susunan Swimlane (4 Partisi):** Dosen, Sistem, Admin Akademik, Mahasiswa.
* **Kendali Alur Utama:**
  * *Decision* kelengkapan nilai (`Nilai sudah lengkap?`): *guard* `[belum lengkap]` mengarahkan kembali alur ke Dosen untuk melengkapi input nilai dan digabungkan ulang lewat *merge* menuju pengesahan oleh Admin Akademik.
  * Pasangan *Fork & Join*: Setelah nilai disahkan dan Sistem menyiapkan publikasi hasil studi, alur dipecah secara paralel menjadi *Menerbitkan KHS pada portal akademik* dan *Mengirim pemberitahuan hasil studi kepada mahasiswa*, kemudian disatukan kembali oleh *join* sebelum Mahasiswa menjalankan *Melihat KHS*.

### C. Pemetaan Susunan Direktori Repositori (`IFRWP5149_2406042_LabAlat`)
```text
IFRWP5149_2406042_LabAlat/
├── 01_skenario/
│   ├── P05_2406042_LAB_telaah_skenario_v01.docx      (Tetap, tidak diubah)
│   └── P05_2406042_SIA_skenario_v01.docx             (Tetap, tidak diubah)
├── 03_latihan_tools/                                 (Tetap, dari P01-P02)
├── 04_model_analisis/
│   ├── P03/                                          (Tetap, jangan diubah)
│   ├── P04/                                          (Tetap, jangan diubah)
│   └── P06/
│       ├── LAB/
│       │   ├── P06_2406042_LAB_activity_lihat_ketersediaan_v01.drawio & .png
│       │   ├── P06_2406042_LAB_activity_kelola_data_v01.drawio & .png
│       │   ├── P06_2406042_LAB_activity_peminjaman_v01.drawio & .png
│       │   ├── P06_2406042_LAB_activity_cetak_bukti_v01.drawio & .png
│       │   ├── P06_2406042_LAB_activity_keputusan_v01.drawio & .png
│       │   ├── P06_2406042_LAB_activity_pengembalian_v01.drawio & .png
│       │   └── P06_2406042_LAB_activity_laporan_v01.drawio & .png
│       └── SIA/
│           └── P06_2406042_SIA_activity_v01.drawio & .png
├── 05_model_desain/                                  (Tetap kosong)
└── 06_Laporan/
    ├── P05_2406042_jobsheet_review_v01.md
    └── P06_2406042_jobsheet_review_v01.md            <-- (File ini)
```

---

## 5. Pembahasan & Verifikasi Checklist Penilaian

1. **Keterlacakan (*Traceability*) & Konsistensi Dokumen:**
   * Seluruh 7 diagram `LAB` dan 1 diagram `SIA` memiliki tepat satu *initial node* dan satu *activity final node*, tanpa adanya *action* yang menggantung (*dangling*).
   * *Use case* pendukung (`LAB-UC04`, `LAB-UC12`) serta varian CRUD (`LAB-UC08`, `LAB-UC09`, `LAB-UC10`) tidak dibuatkan file terpisah, melainkan dilebur sebagai *action* `<<include>>` dan cabang *decision* pada diagram induknya sesuai ketentuan jobsheet.
   * Elemen tambahan pada `LAB-UC11` (*Periksa kelengkapan aksesori peralatan*) telah diberi label penanda **unsur proses baru** supaya tidak membingungkan jika dibandingkan dengan kebutuhan P03–P05.

2. **Catatan Evaluasi Tugas Mandiri (`LAB-UC06` Proses Keputusan Peminjaman):**
   * **Perbandingan Awal:** Pada rancangan mandiri sebelum melihat lampiran pembanding, validasi status pengajuan baru berfokus pada opsi setuju/tolak oleh Petugas Laboratorium.
   * **Penyempurnaan Pasca-Review:** Setelah dicocokkan dengan *checklist* C.4 dan file pembanding, ditambahkan *decision* awal `Pengajuan dapat diproses?` dengan *guard* `[tidak dapat diproses]` guna menangani skenario pengajuan yang sudah dibatalkan atau berubah status sebelum sempat diproses petugas, sehingga seluruh kemungkinan kondisi tertutup secara utuh.

---

## 6. Kesimpulan
Penerjemahan tabel skenario *use case* (Pertemuan 5) ke dalam wujud *Activity Diagram* (Pertemuan 6) menghadirkan gambaran alur kendali yang presisi, pembagian peran tanggung jawab antar-aktor lewat *swimlane*, serta mekanisme percabangan (*decision/merge*) dan konkurensi (*fork/join*) mengikuti standar OMG UML 2.5.1. Seluruh file `.drawio` dan hasil ekspor `.png` versi `v01` telah divalidasi memakai *checklist* penilaian serta tertata rapi di dalam repositori `IFRWP5149_2406042_LabAlat`.