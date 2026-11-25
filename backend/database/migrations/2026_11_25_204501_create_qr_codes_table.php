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
        // create_qr_codes_table
Schema::create('qr_codes', function (Blueprint $table) {
    $table->id();
    $table->foreignId('user_id')->constrained()->cascadeOnDelete();
    $table->string('name');
    $table->string('type', 20)->default('url');       // url, text, email, sms, wifi, vcard
    $table->text('content');
    $table->string('short_code', 12)->unique();       // utilisé dans /r/{code}
    $table->unsignedInteger('max_scans')->nullable(); // NULL = illimité
    $table->unsignedInteger('scan_count')->default(0);
    $table->boolean('is_active')->default(true);
    $table->string('foreground_color', 7)->default('#000000');
    $table->string('background_color', 7)->default('#FFFFFF');
    $table->string('logo_path')->nullable();
    $table->timestamps();
    $table->index(['user_id', 'is_active']);
});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('qr_codes');
    }
};
