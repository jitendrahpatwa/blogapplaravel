@if(Session::has('success'))
    <h2>{!! Session::get('success') !!}</h2>
@endif
<title>ds</title>
<div>Upload form</div>
{!! Form::open(array('url'=>'apply/multiple_upload','method'=>'POST', 'files'=>true)) !!}
{!! Form::file('images[]', array('multiple'=>true)) !!}
{!! Form::submit('Submit') !!}
{!! Form::close() !!}
<br>
{!! $path !!}
<img src="{!! $path !!}" width="500" height="500">
