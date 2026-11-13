# LAPORAN PRAKTIKUM ANALISIS DAN DESAIN BERORIENTASI OBJEK
**Pertemuan 4: Use Case Diagram Lanjutan (Generalization dan Collaboration)**  
**Program Studi:** S1 Teknik Informatika – Institut Teknologi Garut  
**Kode Mata Kuliah:** IFRWP5149  

---

## 1. Tujuan Praktikum
Setelah merampungkan praktikum pada Pertemuan 4, mahasiswa diharapkan mampu:
1. **Generalization Aktor:** Mengidentifikasi satu aktor umum dan minimal dua aktor khusus berdasarkan skenario, kemudian menyusun hierarki pewarisan dengan arah panah yang benar (segitiga kosong dari aktor khusus ke aktor umum) tanpa menggambar ulang garis asosiasi yang sudah diwarisi.
2. **Generalization Use Case:** Merancang hierarki *use case* yang berisi satu *use case* umum dan minimal dua *use case* khusus, serta merumuskan perilaku dasar yang diwarisi maupun perilaku pembedanya.
3. **Collaboration & Realization:** Menempatkan minimal dua *collaboration* (elips bergaris putus-putus) dengan nama yang sama persis dengan *use case* targetnya, lalu menautkannya lewat relasi *realization* (garis putus-putus berujung segitiga kosong) dari *collaboration* menuju *use case*.
4. **Diagram Kumulatif:** Menyusun *use case diagram* kumulatif Pertemuan 4 (mempertahankan elemen Pertemuan 3 secara utuh sambil menambahkan elemen baru Pertemuan 4) dengan posisi aktor di luar batas sistem dan *use case*/*collaboration* di dalam batas sistem.
5. **Use Case Description:** Menuliskan deskripsi *use case* baru secara komprehensif (*pemicu, prasyarat, alur utama, alur alternatif, pascakondisi berhasil/gagal*, beserta baris tambahan *Generalization* dan *Collaboration*) yang selaras dengan diagram.
6. **Keterlacakan & Revisi:** Membuktikan keterlacakan (*traceability*) tiap elemen baru ke daftar kebutuhan, menjalankan uji konsistensi/review, serta mencatat revisi ke versi berikutnya (`v02`).

---

## 2. Dasar Teori
1. **Pengembangan Model Kumulatif (OMG UML 2.5.1):**  
   *Use case diagram* memvisualisasikan interaksi antara aktor dan sistem tanpa membedah urutan langkah teknis atau desain antarmuka. Pada rangkaian praktikum ini, pemodelan dijalankan secara **kumulatif**—yakni model dari pertemuan sebelumnya tidak dihapus atau ditimpa, melainkan dipertahankan dan diperkaya dengan elemen baru agar jejak perubahannya dapat ditelusuri secara utuh.
2. **Generalization Aktor:**  
   Menggambarkan hubungan umum-khusus antarperan. Aktor khusus otomatis mewarisi seluruh asosiasi milik aktor umum, tetapi tetap bisa memiliki asosiasi tambahan yang sifatnya eksklusif bagi dirinya sendiri. Panah segitiga kosong selalu menunjuk dari aktor khusus ke aktor umum, sedangkan asosiasi warisan cukup digambar satu kali dari aktor umum.
3. **Generalization Use Case:**  
   Menunjukkan bahwa satu *use case* khusus merupakan bentuk spesifik dari *use case* umum. *Use case* khusus mewarisi tujuan dan perilaku dasar *use case* umum, lalu menyesuaikan atau menambahkan luaran yang lebih spesifik. Berbeda dengan `«include»` dan `«extend»` yang mengatur hubungan pelaksanaan perilaku, *generalization* menegaskan hubungan jenis (*is-a-kind-of*).
4. **Collaboration dan Realization:**  
   *Collaboration* mewakili sekumpulan elemen internal di dalam sistem yang saling bekerja sama untuk mewujudkan perilaku suatu *use case* (menjawab *bagaimana* perilaku diwujudkan secara abstrak pada tahap analisis). Elemen ini digambarkan sebagai elips bergaris putus-putus dengan nama yang identik dengan *use case* targetnya, tidak bersentuhan langsung dengan aktor, dan dihubungkan ke *use case* memakai panah *realization* (garis putus-putus berujung segitiga kosong).

---

## 3. Hasil Praktikum
Praktikum dikerjakan pada dua domain kasus dengan susunan direktori standar `IFRWP5149_2406042_LabAlat/` dan penamaan file `P04_2406042_<KASUS>_usecase_v01.drawio` (dilengkapi ekspor `.png`).

### A. Studi Kasus Terbimbing: Sistem Informasi Peminjaman & Pengembalian Peralatan Laboratorium (LAB)
Model ini merupakan kelanjutan kumulatif dari Pertemuan 3 (`LAB-UC01` s.d. `LAB-UC07`) dengan penambahan kebutuhan `LAB-R07` s.d. `LAB-R11`:
* **Hierarki Aktor (*Generalization*):**
  * **Aktor Umum:** `Peminjam` (terhubung ke `LAB-UC01: Lihat Ketersediaan Peralatan` dan `LAB-UC03: Ajukan Peminjaman`).
  * **Aktor Khusus:** `Mahasiswa` (mewarisi asosiasi `Peminjam` + mempertahankan asosiasi khusus ke `LAB-UC05: Cetak Bukti Pengajuan`) dan `Dosen` (mewarisi asosiasi `Peminjam`).
* **Hierarki Use Case (*Generalization*):**
  * **Use Case Umum:** `LAB-UC02: Kelola Data Peralatan` (terhubung ke `Petugas Laboratorium`).
  * **Use Case Khusus:** `LAB-UC08: Tambah Data Peralatan` (menghasilkan data baru), `LAB-UC09: Ubah Data Peralatan` (memperbarui data), dan `LAB-UC10: Hapus Data Peralatan` (menghapus data yang tidak sedang dipinjam/diajukan).
* **Use Case Baru & Relasi:**
  * `LAB-UC11: Catat Pengembalian Peralatan` (terhubung ke `Petugas Laboratorium`) memiliki relasi `«include»` menuju `LAB-UC12: Periksa Kondisi Peralatan` (mencatat status kondisi: *Baik*, *Rusak Ringan*, atau *Rusak Berat*).
* **Collaboration & Realization:**
  * `LAB-CO01: Ajukan Peminjaman` merealisasikan `LAB-UC03`.
  * `LAB-CO02: Catat Pengembalian Peralatan` merealisasikan `LAB-UC11`.
* **Dokumentasi Tambahan:** *Use case description* lengkap untuk `LAB-UC11` serta pencatatan aturan keterlambatan dan denda sebagai *pertanyaan terbuka* di dalam file kebutuhan.

### B. Tugas Praktik Mandiri: Sistem Informasi Akademik – Layanan Hasil Studi (SIA)
Model kumulatif yang memadukan fungsi Jadwal Kuliah (Pertemuan 2: `SIA-UC01`–`02`), Pengajuan KRS (Pertemuan 3: `SIA-UC03`–`06`), dan Layanan Hasil Studi (Pertemuan 4: `SIA-R07` s.d. `SIA-R12`):
* **Hierarki Aktor (*Generalization*):**
  * **Aktor Umum:** `Civitas Akademika` (berasosiasi dengan `SIA-UC07: Lihat Kalender Akademik`).
  * **Aktor Khusus:** `Mahasiswa` (mewarisi fungsi `Civitas Akademika`, memiliki fungsi KRS dari P03, serta terhubung ke `SIA-UC09: Lihat KHS`) dan `Dosen` (mewarisi fungsi `Civitas Akademika` serta terhubung ke `SIA-UC08: Input Nilai Mata Kuliah`).
  * Aktor lain yang tetap dipertahankan: `Admin Akademik` dan `Dosen Wali`.
* **Hierarki Use Case (*Generalization*):**
  * **Use Case Umum:** `SIA-UC10: Kelola Data Mahasiswa` (berasosiasi dengan `Admin Akademik`).
  * **Use Case Khusus:** `SIA-UC11: Tambah Data Mahasiswa`, `SIA-UC12: Ubah Data Mahasiswa`, dan `SIA-UC13: Hapus Data Mahasiswa` (dengan syarat tidak memiliki riwayat data akademik aktif).
* **Collaboration & Realization:**
  * `SIA-CO01: Input Nilai Mata Kuliah` merealisasikan `SIA-UC08`.
  * `SIA-CO02: Lihat KHS` merealisasikan `SIA-UC09`.

---

## 4. Analisis
1. **Efisiensi Model lewat Pewarisan (Generalization):**  
   Penerapan *generalization* pada aktor (`Peminjam` pada LAB dan `Civitas Akademika` pada SIA) terbukti mampu memangkas duplikasi garis asosiasi pada diagram. Walaupun garis asosiasi dari `Mahasiswa` ke `Lihat Ketersediaan` dan `Ajukan Peminjaman` dialihkan ke `Peminjam`, secara makna kemampuan `Mahasiswa` tetap utuh karena otomatis diwarisi. Di sisi lain, fungsi eksklusif seperti `Cetak Bukti Pengajuan` tetap dipertahankan sebagai asosiasi langsung pada aktor khusus `Mahasiswa`.
2. **Pemisahan Konteks Relasi (`Generalization` vs `«include»` / `«extend»`):**  
   Pada studi kasus LAB, tampak kontras perbedaan makna antar-relasi: `Tambah`, `Ubah`, dan `Hapus Data Peralatan` merupakan ragam spesifik dari `Kelola Data Peralatan` (*generalization*), sedangkan `Periksa Kondisi Peralatan` adalah tahapan wajib yang pasti dijalankan di dalam proses `Catat Pengembalian Peralatan` (`«include»`).
3. **Kejelasan Abstraksi Realisasi (*Collaboration*):**  
   Kehadiran elemen *collaboration* (`LAB-CO01`, `LAB-CO02`, `SIA-CO01`, `SIA-CO02`) memberi sinyal visual bahwa *use case* utama tersebut menyimpan mekanisme kerja sama objek internal yang kelak akan dijabarkan lebih detail lewat diagram interaksi (seperti *Sequence Diagram*) pada pertemuan selanjutnya, tanpa mengganggu batas interaksi aktor di luar sistem.
4. **Validasi Batasan Sistem & Uji Konsistensi:**  
   Lewat pengujian skenario (mulai dari penolakan input nilai oleh dosen non-pengampu, penolakan penghapusan data mahasiswa yang masih aktif, hingga verifikasi bahwa `Kepala Laboratorium` tetap hanya terhubung ke `LAB-UC07` tanpa relasi ekstra), dapat dipastikan bahwa diagram kumulatif maupun *use case description* sudah konsisten dengan spesifikasi kebutuhan (`R01`–`R12`).

---

## 5. Kesimpulan
1. Penerapan **generalization aktor** dan **generalization use case** menjadikan *use case diagram* jauh lebih ringkas, tertata, dan bebas dari pengulangan garis asosiasi bagi peran maupun fungsi yang berbagi perilaku dasar serupa.
2. Notasi **collaboration** dan relasi **realization** berperan menjembatani spesifikasi perilaku eksternal (*use case*) dengan rancangan interaksi internal sistem pada tahap analisis, sembari tetap mematuhi prinsip bahwa aktor tidak pernah berinteraksi langsung dengan *collaboration*.
3. Pendekatan penyusunan model secara **kumulatif** dan terdokumentasi rapi (lewat katalog *use case*, *use case description* yang dimutakhirkan, serta kontrol versi `v01` ke `v02`) memastikan keterlacakan (*traceability*) yang utuh antara kebutuhan fungsional lama dan baru tanpa merusak artefak pertemuan sebelumnya.