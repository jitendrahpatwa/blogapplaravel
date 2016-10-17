@foreach($users as $key)
  User is on database {!! $key->name !!} and age is {!! $key->age !!}
@endforeach
