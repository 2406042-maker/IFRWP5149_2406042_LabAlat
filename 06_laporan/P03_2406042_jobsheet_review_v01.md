# Tinjauan Kelengkapan & Kesesuaian Repositori Pertemuan 3 (`IFRWP5149_2406042_LabAlat`)

Laporan ini disusun untuk mengecek kesesuaian susunan direktori, format penamaan file, serta kelengkapan dokumen **Pertemuan 3** di dalam repositori **`IFRWP5149_2406042_LabAlat`**, mengacu pada panduan SOP Modul Praktikum Pertemuan 3 (*Use Case Diagram dan Use Case Description*).

## 1. Pemeriksaan Struktur & Penamaan File Pertemuan 3

| Direktori | Standar Modul (SOP P03) | Kondisi Repositori Saat Ini | Status & Rekomendasi Perbaikan |
| :--- | :--- | :--- | :--- |
| **`00_Administrasi`** | `P03_2406042_logbook_v01.md` | Tersedia (`P03_2406042_logbook_v01.md`) | **Sesuai.** |
| **`01_Skenario`** | - `P03_LAB_skenario_v01.md`<br>- `P03_SIA_skenario_v01.md`<br>*(Catatan: Langkah 1 modul sempat menyebut `kebutuhan_v01.md`, namun Gambar 3.1 struktur resmi menempatkannya ke folder `skenario`)* | - `P03_LAB_skenario_v01.md` tersedia<br>- `P03_SIA_skenario_v01.md` tersedia | **Sesuai** dengan pohon direktori resmi pada modul. |
| **`03_Latihan_Tools/P03/LAB`** | - `P03_2406042_LAB_deskripsi_v01.md`<br>- `P03_2406042_LAB_usecase_v01.drawio`<br>- `P03_2406042_LAB_usecase_v01.png` | - `P03_2406042_LAB_deskripsi_v01.md`<br>- `P03_2406042_LAB_usecase_v01.drawio`<br>- `P03_2406042_LAB_usecase_v01.drawio.png` | **Perlu perbaikan pada file ekspor.** Hilangkan ekstensi ganda `.drawio.png` agar menjadi `P03_2406042_LAB_usecase_v01.png`. |
| **`03_Latihan_Tools/P03/SIA` vs `04_Model_Analisis`** | Ditemukan **ketidakkonsistenan internal** di dalam modul:<br>- Gambar 3.1 menempatkan file SIA di `03_latihan_tools/P03/SIA/`.<br>- Teks Langkah 6 (hal. 42) mengarahkan pembuatan diagram SIA ke `04_model_analisis/P03/SIA/`. | Ketiga file SIA (`deskripsi_v01.md`, `usecase_v01.drawio`, `usecase_v01.drawio.png`) tersimpan di `03_Latihan_Tools/P03/SIA/`, sementara di `04_Model_Analisis/` terdapat `P03_2406042_usecase_v01.drawio` & `.png`. | **Sudah tepat mengacu pada Gambar 3.1** untuk folder latihan.<br>*Rekomendasi:* Hapus ekstensi ganda `.drawio.png` menjadi `.png`, lalu sisipkan kode studi kasus (`LAB` atau `SIA`) pada penamaan file di `04_Model_Analisis` supaya tidak tertukar. |
| **`06_Laporan`** | `P03_2406042_jobsheet_review_v01.md` | Tersedia (`P03_2406042_jobsheet_review_v01.md`) | **Sesuai.** |

---

## 2. Daftar Periksa Validasi Isi Dokumen Pertemuan 3

### A. Perapian Nama File Ekspor
* Ubah `03_Latihan_Tools/P03/LAB/P03_2406042_LAB_usecase_v01.drawio.png` $\rightarrow$ `P03_2406042_LAB_usecase_v01.png`
* Ubah `03_Latihan_Tools/P03/SIA/P03_2406042_SIA_usecase_v01.drawio.png` $\rightarrow$ `P03_2406042_SIA_usecase_v01.png`

### B. Tinjauan Diagram & Deskripsi Studi Kasus `LAB` (Latihan Terbimbing)
* **3 Aktor:** *Mahasiswa*, *Petugas laboratorium*, dan *Kepala laboratorium* ditempatkan di luar kotak batas sistem (*Sistem Informasi Peminjaman dan Pengembalian Peralatan Laboratorium Kampus*).
* **7 Use Case di dalam batas sistem:**
  1. `LAB-UC01`: *Lihat ketersediaan peralatan* (Mahasiswa)
  2. `LAB-UC02`: *Kelola data peralatan* (Petugas laboratorium)
  3. `LAB-UC03`: *Ajukan peminjaman* (Mahasiswa)
  4. `LAB-UC04`: *Periksa ketersediaan* (Disertakan oleh UC03)
  5. `LAB-UC05`: *Cetak bukti pengajuan* (Opsi tambahan bersyarat pada UC03, juga memiliki garis asosiasi ke Mahasiswa)
  6. `LAB-UC06`: *Proses keputusan peminjaman* (Petugas laboratorium)
  7. `LAB-UC07`: *Lihat laporan peminjaman* (Kepala laboratorium)
* **Relasi & Arah Panah:**
  * `Ajukan peminjaman` $\xrightarrow{\ll include \gg}$ `Periksa ketersediaan` (garis putus-putus berpanah terbuka menuju *Periksa ketersediaan*).
  * `Cetak bukti pengajuan` $\xrightarrow{\ll extend \gg}$ `Ajukan peminjaman` (garis putus-putus berpanah terbuka menuju *Ajukan peminjaman*, lengkap dengan keterangan `condition: [mahasiswa memilih cetak]` dan `extension point: Bukti pengajuan tersedia`).
* **Deskripsi (`P03_2406042_LAB_deskripsi_v01.md`):** Berisi rincian lengkap minimal untuk *Ajukan peminjaman* (ID, sumber kebutuhan, tujuan, aktor, pemicu, prasyarat, alur utama, alur alternatif/pengecualian, pascakondisi berhasil & gagal, serta aturan bisnis/asumsi).

### C. Tinjauan Diagram & Deskripsi Studi Kasus `SIA` (Tugas Praktik)
* **Aktor:** Cukup melibatkan *Mahasiswa* dan *Dosen wali* (tanpa menyertakan *Admin akademik* dari Pertemuan 2 karena berada di luar cakupan skenario KRS).
* **Relasi:**
  * *Ajukan KRS* `<<include>>` *Validasi KRS*
  * *Unduh bukti pengajuan KRS* `<<extend>>` *Ajukan KRS* (dilengkapi dengan *extension point* serta syarat kondisinya).
* **4 Deskripsi Wajib (`P03_2406042_SIA_deskripsi_v01.md`):**
  1. *Ajukan KRS* (mencakup alur alternatif saat validasi gagal serta opsi tambahan unduh bukti)
  2. *Validasi KRS*
  3. *Unduh bukti pengajuan KRS*
  4. *Proses keputusan KRS* (menjabarkan skenario persetujuan maupun penolakan beserta catatan)

### D. Laporan Review (`P03_2406042_jobsheet_review_v01.md`)
* Menjelaskan dasar pemilihan relasi `<<include>>` dan `<<extend>>` pada kasus `LAB` maupun `SIA`.
* Memuat hasil pengujian konsistensi untuk 3 kondisi pada kasus `SIA`:
  1. Validasi sukses dan mahasiswa memilih tidak mengunduh bukti.
  2. Validasi gagal.
  3. Validasi sukses dan mahasiswa memilih mengunduh bukti.
* Mencantumkan catatan bukti pengujian buka ulang file `.drawio`.