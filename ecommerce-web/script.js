const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close'); // Pastikan elemen close didefinisikan

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.toggle('active'); // Mengganti add dan remove dengan toggle
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active'); // Menghapus kelas 'active' saat close diklik
    });
}

document.getElementById('bar').addEventListener('click', function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active'); // Tambahkan atau hapus kelas 'active'
});