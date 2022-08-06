<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('shipping_address');
            $table->string('comment');
            $table->string('status')->nullable()->default('pending');
            $table->string('payment_type')->nullable()->default('cash');
            $table->float('total',8,2)->nullable();
            $table->float('sub_total',8,2)->nullable();
            $table->float('discount',8,2)->nullable();
            $table->float('charges',8,2)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
