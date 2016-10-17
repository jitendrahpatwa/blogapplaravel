<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
/*Route::get('/', function () {
    return view('welcome');
});
*/
Route::get('/',[
  'uses'  =>  'BlogController@blogs',
  'as'  =>  '/'
]);

Route::get('about','BlogController@aboutpage');
Route::get('blog',[
  'uses'  =>  'BlogController@blogview',
  'as'  =>  'blog'
]);

Route::get('userlist',[
  'uses'  =>  'BlogController@listusers',
  'as'  =>' userlist'
]);

























/*Route::group(["middleware"=>"web"],function(){
  Route::get('/', function () {
      return view('welcome');
  });
});
Route::get("/abcd",function(){
  return "hi ";
});
Route::get('image',[
	'uses'=>'HomeController@image',
	'as'=>'image'
]);
Route::post('apply/multiple_upload','HomeController@applymultiple_upload');

Route::get("/{web}",function(){
  return view("errors.503");
});
*/
