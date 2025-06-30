<?php
// Ganti URL ini sesuai milikmu
$url = "https://sentrahki.fahd39.com/services/cron_delete_pengajuan_ditolak.php?key=hapus7hari";

$response = file_get_contents($url);

echo "[Relay] Menghubungi URL utama...\n";
echo $response;