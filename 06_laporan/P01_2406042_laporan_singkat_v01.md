# Tinjauan Kelengkapan & Kesesuaian Repositori Pertemuan 1 (`IFRWP5149_2406042_LabAlat`)

Laporan ini disusun untuk mengecek kesesuaian susunan direktori, format penamaan file, serta kelengkapan dokumen **Pertemuan 1** di dalam repositori **`IFRWP5149_2406042_LabAlat`**, mengacu pada panduan SOP Modul Praktikum Pertemuan 1.

---

## 1. Identitas & Susunan Direktori Utama

* **Nama Direktori Utama:** `IFRWP5149_2406042_LabAlat` — **Sudah tepat**, mengikuti format standar `IFRWP5149_<NIM>_LabAlat`.
* **Format Penamaan Subfolder:** Di repositori saat ini, penamaan folder memakai huruf kapital di setiap awal kata (`00_Administrasi`, `01_Skenario`, `02_Template`, `03_Latihan_Tools`, `04_Model_Analisis`, `05_Model_Desain`, `06_Laporan`), sedangkan panduan SOP menuliskannya dengan huruf kecil seluruhnya (`00_administrasi`, dst.). 
  * *Catatan Tambahan:* Penggunaan huruf kapital ini tidak bermasalah pada sistem operasi Windows karena sifatnya yang *case-insensitive*. Meski begitu, apabila repositori diunggah ke server berbasis Linux atau dinilai lewat skrip pengecekan otomatis (*automated script*), perbedaan huruf besar-kecil ini berisiko membuat folder gagal dikenali.

---

## 2. Pemeriksaan Kelengkapan & Penamaan File Pertemuan 1

| Direktori | Standar Modul (SOP P01) | Kondisi Repositori Saat Ini | Status & Rekomendasi Perbaikan |
| :--- | :--- | :--- | :--- |
| **Root** | `README.md` | Tersedia (`README.md`) | **Sesuai.** Pastikan di dalamnya tercantum identitas lengkap (Chipta Dhera Aditya / `2406042`), studi kasus LabAlat, perangkat lunak `draw.io`, daftar isi repositori, serta status progres P01. |
| **`00_Administrasi`** | `P01_2406042_logbook_v01.md` | Tersedia (`P01_2406042_logbook_v01.md`) | **Sesuai.** |
| **`01_Skenario`** | `S-ORI-01_orientasi_kasus_v01.md` | Tersedia (`S-ORI-01_orientasi_kasus_v01.md`) | **Sesuai.** |
| **`02_Template`** | `template_metadata_artefak_v01.md` | `template_metadata_artefak__v01.md` *(kelebihan satu garis bawah `__`)* | **Perlu diperbaiki (Salah ketik).** Hilangkan satu garis bawah agar menjadi `template_metadata_artefak_v01.md`. |
| **`03_Latihan_Tools`** | Berada langsung di `03_latihan_tools/`:<br>- `P01_2406042_latihan_activity_v01.drawio`<br>- `P01_2406042_latihan_activity_v01.png` | Tersimpan di subfolder `/P01/` dengan nama file hasil ekspor `P01_2406042_latihan_activity_v01.drawio.png` | **Perlu diperbaiki (2 catatan):**<br>1. Panduan modul mengarahkan file disimpan langsung di `03_latihan_tools` (walau pemisahan ke subfolder `/P01` tergolong rapi mengingat progres sudah mencapai P06).<br>2. **Ekstensi ganda** (`.drawio.png`). Ubah namanya menjadi `P01_2406042_latihan_activity_v01.png`. |
| **`04_Model_Analisis` & `05_Model_Desain`** | Belum terisi pada tahap P01 | Sudah memuat file P03–P06 (ditambah satu file uji coba `tes.md` pada `05_Model_Desain`) | **Dapat dimaklumi** karena pengerjaan repositori sudah berlanjut hingga Pertemuan 6. Namun, segera hapus `tes.md` di dalam `05_Model_Desain` supaya direktori tetap bersih. |
| **`06_Laporan`** | `P01_2406042_laporan_singkat_v01.md` | Tersedia (`P01_2406042_laporan_singkat_v01.md`) | **Sesuai.** |

---

## 3. Daftar Periksa (*Checklist*) Perbaikan Modul 1

Gunakan daftar periksa berikut untuk memastikan seluruh artefak Pertemuan 1 memenuhi standar modul secara menyeluruh:

- [ ] **Revisi kesalahan penamaan template di `02_Template/`:**
  * Ubah `template_metadata_artefak__v01.md` $\rightarrow$ `template_metadata_artefak_v01.md`.
- [ ] **Hapus ekstensi ganda pada file gambar di `03_Latihan_Tools/P01/`:**
  * Ubah `P01_2406042_latihan_activity_v01.drawio.png` $\rightarrow$ `P01_2406042_latihan_activity_v01.png`.
- [ ] **Hapus file uji coba di `05_Model_Desain/`:**
  * Buang berkas `tes.md` dari direktori tersebut.
- [ ] **Periksa ulang isi diagram `P01_2406042_latihan_activity_v01.drawio`:**
  * Pastikan hanya berisi 4 komponen secara berurutan: *Initial Node* $\rightarrow$ *Buka daftar peralatan* $\rightarrow$ *Lihat informasi ketersediaan* $\rightarrow$ *Activity Final Node*.
  * Pastikan kanvas memuat judul **Latihan kakas S-ORI-01** beserta label status **Belum divalidasi sebagai model proses**, tanpa penambahan *swimlane* maupun percabangan alur.
- [ ] **Cek ulang kelengkapan isi dokumen teks P01:**
  * Pastikan `P01_2406042_logbook_v01.md` dan `P01_2406042_laporan_singkat_v01.md` telah mencantumkan catatan penggunaan perangkat lunak (`draw.io`), bukti pengujian buka ulang file `.drawio`, serta jawaban dari pertanyaan orientasi kasus.