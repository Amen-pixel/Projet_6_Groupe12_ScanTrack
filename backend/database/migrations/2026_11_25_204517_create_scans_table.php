<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // create_scans_table
Schema::create('scans', function (Blueprint $table) {
    $table->id();
    $table->foreignId('qr_code_id')->constrained()->cascadeOnDelete();
    $table->string('ip_address', 45)->nullable();     // 45 = assez pour l'IPv6
    $table->string('country', 100)->nullable();
    $table->string('city', 100)->nullable();
    $table->decimal('latitude', 10, 7)->nullable();
    $table->decimal('longitude', 10, 7)->nullable();
    $table->string('device', 20)->nullable();
    $table->text('user_agent')->nullable();
    $table->timestamp('scanned_at')->useCurrent();
    $table->index(['qr_code_id', 'scanned_at']);
    $table->index('country');
});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('scans');
    }
};
