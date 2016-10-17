<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Clean Blog</title>

    @include('blogs.commons.includefiles')

</head>

<body>

  @include('blogs.commons.navigation')
    <!-- Page Header -->
  @include('blogs.commons.header')

  @yield('content')


    <hr>

  @include('blogs.commons.footer')



</body>

</html>
