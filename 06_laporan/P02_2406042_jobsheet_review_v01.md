# Tinjauan Kelengkapan & Kesesuaian Repositori Pertemuan 2 (`IFRWP5149_2406042_LabAlat`)

Laporan ini disusun untuk mengecek kesesuaian susunan direktori, format penamaan file, serta kelengkapan dokumen **Pertemuan 2** di dalam repositori **`IFRWP5149_2406042_LabAlat`**, mengacu pada panduan SOP Modul Praktikum Pertemuan 2.

---

## 1. Pemeriksaan Kelengkapan & Penamaan File Pertemuan 2

| Direktori | Standar Modul (SOP P02) | Kondisi Repositori Saat Ini | Status & Rekomendasi Perbaikan |
| :--- | :--- | :--- | :--- |
| **`00_Administrasi`** | `P02_2406042_logbook_v01.md` | Tersedia (`P02_2406042_logbook_v01.md`) | **Sesuai.** |
| **`01_Skenario`** | • `P02_LAB_skenario_v01.md`<br>• `P02_SIA_skenario_v01.md` | Keduanya tersedia | **Sesuai.** |
| **`03_Latihan_Tools/P02/LAB`** | • `P02_2406042_LAB_notasi_usecase_v01.drawio`<br>• `P02_2406042_LAB_notasi_usecase_v01.png` | • `P02_2406042_LAB_notasi_usecase_v01.drawio`<br>• `P02_2406042_LAB_notasi_usecase_v01.drawio.png` | **Perlu perbaikan pada file ekspor.** Terdeteksi ekstensi ganda (`.drawio.png`). Ubah namanya menjadi `P02_2406042_LAB_notasi_usecase_v01.png`. |
| **`03_Latihan_Tools/P02/SIA`** | 1. Diagram dengan kesalahan awal:<br>• `P02_2406042_SIA_perbaikan_notasi_v01.drawio`<br>• *(ekspor `.png` bersifat opsional)*<br><br>2. Diagram setelah dikoreksi:<br>• `P02_2406042_SIA_notasi_v01.drawio`<br>• `P02_2406042_SIA_notasi_v01.png` | • `P02_2406042_SIA_notasi_v01.drawio`<br>• `P02_2406042_SIA_notasi_v01.drawio.png`<br>• `P02_2406042_SIA_perbaikan_notasi_v01.drawio`<br>• `P02_2406042_SIA_perbaikan_notasi_v01.drawio.png` | **Perlu perbaikan pada ekstensi file gambar.** Hilangkan bagian `.drawio` agar penamaannya menjadi `P02_2406042_SIA_notasi_v01.png` dan `P02_2406042_SIA_perbaikan_notasi_v01.png`. |
| **`06_Laporan`** | `P02_2406042_jobsheet_review_v01.md` | Tersedia (`P02_2406042_jobsheet_review_v01.md`) | **Sesuai.** |

---

## 2. Daftar Periksa Validasi Isi Dokumen Pertemuan 2

Dari segi susunan folder dan keberadaan file, seluruh artefak Pertemuan 2 sebenarnya sudah lengkap. Anda hanya perlu melakukan dua langkah perapian dan pengecekan konten berikut ini:

1. **Rapikan ekstensi ganda pada file gambar di `03_Latihan_Tools/P02/`:**
   * `LAB/P02_2406042_LAB_notasi_usecase_v01.drawio.png` $\rightarrow$ `P02_2406042_LAB_notasi_usecase_v01.png`
   * `SIA/P02_2406042_SIA_notasi_v01.drawio.png` $\rightarrow$ `P02_2406042_SIA_notasi_v01.png`
   * `SIA/P02_2406042_SIA_perbaikan_notasi_v01.drawio.png` $\rightarrow$ `P02_2406042_SIA_perbaikan_notasi_v01.png`

2. **Tinjau kesesuaian konten diagram & laporan (mengacu pada checklist modul):**
   * **Studi Kasus `LAB`:** Pastikan judul sistem tertulis *Sistem Informasi Peminjaman dan Pengembalian Peralatan Laboratorium Kampus*, posisi aktor *Mahasiswa* dan *Petugas laboratorium* berada di luar kotak batas sistem (*system boundary*), serta tidak ada garis panah urutan antar *use case* (*Lihat ketersediaan peralatan* dan *Kelola data peralatan*).
   * **Studi Kasus `SIA` (Versi Awal vs Koreksi):**
     * File `perbaikan_notasi_v01` mencantumkan label status **DIAGRAM AWAL UNTUK KOREKSI** dan memperlihatkan 4 kekeliruan yang memang disengaja (posisi aktor masuk ke dalam batas sistem, *use case* digambar memakai bentuk kotak biasa, garis relasi aktor tertukar ke fungsi yang keliru, serta judul sistem masih merujuk ke laboratorium).
     * File `notasi_v01` sudah memperbaiki keempat kesalahan tersebut dengan judul *Sistem Informasi Akademik*, aktor *Mahasiswa* terhubung ke *Lihat jadwal kuliah*, dan *Admin akademik* terhubung ke *Kelola jadwal kuliah*.
   * **`P02_2406042_jobsheet_review_v01.md`:** Pastikan dokumen ini sudah berisi tabel 4 temuan kekeliruan SIA, penjelasan mengapa garis asosiasi tidak merepresentasikan alur proses (*sequence/flow*), serta catatan bukti pengujian buka ulang file `.drawio`.