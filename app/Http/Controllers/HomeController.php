<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Input;
use Storage;
use File;
class HomeController extends Controller
{
    public function image(){
      $image = Storage::disk('myfiles')->get("tank.jpg");
      $im =  storage_path().'app\public\files\tank.jpg';//response($image, 200)->header('Content-Type', 'image/jpeg');
      return view("image.index",['path'=>$im]);

    }

    public function applymultiple_upload(Request $request){
      $files = Input::file('images');
      foreach($files as $file) {
          $destinationPath = public_path() .'/uploads/';
          $filename = rand(10000,99999).$file->getClientOriginalName();

          $extension = $file->getClientOriginalExtension();
          $name = $file->getFilename();
          Storage::disk('myfiles')->put($file->getClientOriginalName(),  File::get($file));

          $file->move($destinationPath, $filename);

      }
      return redirect('image')->with('success', 'Upload successfully');
    }
}
