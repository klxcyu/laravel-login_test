<?php

namespace App\Http\Controllers;

use App\Models\User;

use Illuminate\Support\Facades\Auth;
use App\Http\Requests\RegisterRequest;
use Illuminate\Support\Facades\Request;

class AuthController extends BaseApiController
{

    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $credentials = request(['email', 'password']);
        $token = auth()->attempt($credentials);

        dd($token);
    }


    //회원가입
    public function register(RegisterRequest $request) {
        $newUser = User::create($request->all());

        return $this->login($request);
    }


}
