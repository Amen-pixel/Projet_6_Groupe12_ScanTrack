<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class QrCode extends Model
{
    protected $fillable = [
        'user_id', 'name', 'type', 'content', 'short_code', 'max_scans',
        'scan_count', 'is_active', 'foreground_color', 'background_color', 'logo_path',
    ];

    protected function casts(): array
    {
        return ['max_scans' => 'integer', 'scan_count' => 'integer', 'is_active' => 'boolean'];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function scans(): HasMany
    {
        return $this->hasMany(Scan::class);
    }

    // NULL = illimité
    public function limitReached(): bool
    {
        return $this->max_scans !== null && $this->scan_count >= $this->max_scans;
    }
}