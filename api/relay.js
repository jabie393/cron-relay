export default async function handler(req, res) {
    const url = "https://sentrahki.fahd39.com/services/cron_delete_pengajuan_ditolak.php?key=hapus7hari";
    const response = await fetch(url);
    const text = await response.text();

    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send("[RELAY]\n" + text);
}
