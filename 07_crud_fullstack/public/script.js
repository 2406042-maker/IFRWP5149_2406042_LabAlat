// CRUD Mahasiswa + 3 fitur interaktif: search filter, cek NIM duplikat, counter total.
const API = '/api/mahasiswa';
let listMahasiswa = [];

const el = (id) => document.getElementById(id);
const form = el('mhsForm');
const tbody = el('mhsTableBody');
const searchInput = el('searchInput');
const notif = el('notif');

function showNotif(text, error = false) {
    notif.textContent = text;
    notif.className = error ? 'notif error' : 'notif';
    notif.hidden = false;
    setTimeout(() => { notif.hidden = true; }, 3000);
}

// Fitur 3: perbarui indicator counter.
function updateCounter() {
    el('mhsCount').textContent = `Total Mahasiswa Terdaftar: ${listMahasiswa.length} Orang`;
}

function renderTable(data) {
    tbody.innerHTML = '';
    if (data.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;color:#64748b;">Belum ada data mahasiswa.</td></tr>';
        return;
    }
    data.forEach((mhs, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${mhs.nim}</td>
            <td>${mhs.nama}</td>
            <td>${mhs.jurusan}</td>
            <td>${mhs.email}</td>
            <td>
                <button class="btn edit" data-id="${mhs.id}">Edit</button>
                <button class="btn delete" data-id="${mhs.id}">Hapus</button>
            </td>`;
        tbody.appendChild(tr);
    });
}

async function loadMahasiswa() {
    try {
        const res = await fetch(API);
        listMahasiswa = await res.json();
        searchInput.value = '';
        renderTable(listMahasiswa);
        updateCounter();
    } catch (err) {
        showNotif('Gagal memuat data dari server', true);
    }
}

function resetForm() {
    form.reset();
    el('mhsId').value = '';
    el('formTitle').textContent = 'Tambah Mahasiswa';
    el('btnSubmit').textContent = 'Simpan';
    el('btnCancel').hidden = true;
}

// Fitur 1: filter tabel secara instan dengan .filter() saat mengetik.
searchInput.addEventListener('input', (e) => {
    const keyword = e.target.value.toLowerCase().trim();
    const hasil = listMahasiswa.filter(mhs =>
        mhs.nama.toLowerCase().includes(keyword) ||
        mhs.nim.toLowerCase().includes(keyword)
    );
    renderTable(hasil);
});

// CREATE & UPDATE
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = el('mhsId').value;
    const payload = {
        nim: el('nim').value.trim(),
        nama: el('nama').value.trim(),
        jurusan: el('jurusan').value,
        email: el('email').value.trim()
    };

    // Fitur 2: cegah NIM ganda di frontend dengan .some() sebelum fetch().
    const duplikat = listMahasiswa.some(m => m.nim === payload.nim && String(m.id) !== id);
    if (duplikat) {
        alert('NIM sudah terdaftar!');
        return;
    }

    try {
        const res = await fetch(id ? `${API}/${id}` : API, {
            method: id ? 'PUT' : 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        const result = await res.json();
        if (!result.success) {
            showNotif(result.message || 'Gagal menyimpan data', true);
            return;
        }
        showNotif(result.message);
        resetForm();
        await loadMahasiswa(); // counter otomatis terbarui setelah data berhasil ditambah
    } catch (err) {
        showNotif('Gagal mengirim data ke server', true);
    }
});

// EDIT & DELETE
tbody.addEventListener('click', async (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    const id = btn.dataset.id;

    if (btn.classList.contains('edit')) {
        const mhs = listMahasiswa.find(m => String(m.id) === id);
        if (!mhs) return;
        el('mhsId').value = mhs.id;
        el('nim').value = mhs.nim;
        el('nama').value = mhs.nama;
        el('jurusan').value = mhs.jurusan;
        el('email').value = mhs.email;
        el('formTitle').textContent = 'Edit Mahasiswa';
        el('btnSubmit').textContent = 'Perbarui';
        el('btnCancel').hidden = false;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    if (btn.classList.contains('delete')) {
        if (!confirm('Yakin ingin menghapus data ini?')) return;
        try {
            const res = await fetch(`${API}/${id}`, { method: 'DELETE' });
            const result = await res.json();
            if (!result.success) {
                showNotif(result.message || 'Gagal menghapus data', true);
                return;
            }
            showNotif(result.message);
            await loadMahasiswa(); // counter otomatis terbarui setelah data berhasil dihapus
        } catch (err) {
            showNotif('Gagal menghapus data dari server', true);
        }
    }
});

el('btnCancel').addEventListener('click', resetForm);
loadMahasiswa();
