<?php

namespace App\Exceptions;

use Illuminate\Database\Events\QueryExecuted;
use Illuminate\Database\QueryException;
use Throwable;
use Illuminate\Http\Response;
use Mockery\Exception\InvalidOrderException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;
use Symfony\Component\Translation\Exception\NotFoundResourceException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array<int, class-string<Throwable>>
     */
    protected $dontReport = [
        //
        //MethodNotAllowedHttpException::class,
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (QueryException $e) {
            return '1'.$e;
        });

    }


    // public function render($request, Throwable $e)
    // {
    //     return '오류났다 지환아';
    // }
}
