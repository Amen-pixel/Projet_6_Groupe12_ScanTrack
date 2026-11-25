<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Scan extends Model
{
    public $timestamps = false;   // la date du scan est dans scanned_at

    protected $fillable = [
        'qr_code_id', 'ip_address', 'country', 'city', 'latitude',
        'longitude', 'device', 'user_agent', 'scanned_at',
    ];

    protected function casts(): array
    {
        return ['scanned_at' => 'datetime', 'latitude' => 'float', 'longitude' => 'float'];
    }

    public function qrCode(): BelongsTo
    {
        return $this->belongsTo(QrCode::class);
    }
}