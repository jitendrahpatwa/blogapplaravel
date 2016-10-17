<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use DB;
use App\User;
use App\blogdetail;//here it is model defined
class BlogController extends Controller
{
    public function blogview(){
      $title = "Laravel Blog";
      $tag = "My Blog";
      return view("blogview.home",['title'=>$title])->with('tag',$tag);
    }

    public function listusers(){
      //$select = DB::table('users')->select(DB::raw('*'))->get();
      //now let us take eloquent way to define model "M" for mb_convert_case
      $select = User::all();
      return view('blogview.userslist',['users'=>$select]);
    }


    ////////////////////////////////////NoRewindIterator
    public function blogs(){
      return view('blogs.home');
    }

    public function aboutpage(){
      return view('blogs.about');
    }
}
