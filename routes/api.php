<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/clubs', 'ClubController@index');
Route::get('/students', 'StudentController@index');
Route::post('/clubs', 'ClubController@store');
Route::post('/students', 'StudentController@store');
Route::get('/clubs/{id}','ClubController@show');
Route::get('/students/{id}','StudentController@show');
Route::put('/clubs/{id}', 'ClubController@update');
Route::put('/students/{id}', 'StudentController@update');
Route::delete('/clubs/{id}','ClubController@destroy');
Route::delete('/students/{id}','StudentController@destroy');
