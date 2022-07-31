<?php
use Illuminate\Support\Facades\Route;
Route::get('/', function () {
    return view('admin.adminMaster');
});
Route::get('/{path}', function () {
    return view('admin.adminMaster');
});