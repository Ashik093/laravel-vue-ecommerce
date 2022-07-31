<?php

use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('public.publicMaster');
});
Route::prefix('admin')->group(base_path('routes/admin.php'));

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/{path}',function(){
    return view('public.publicMaster');
});
