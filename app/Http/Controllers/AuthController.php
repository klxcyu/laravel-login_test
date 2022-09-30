<?php

namespace App\Http\Controllers;

use App\Models\User;

use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\RegisterRequest;
use Illuminate\Support\Facades\Request;

class AuthController extends Controller
{

    public function __construct()
    {
        //미들웨어 설정
        $this->middleware('JWT', ['except' => ['login', 'register']]);
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
        if(!$token) {
            // 로그인한 사용자가 인증되지 않았으면 401 에러
            return response()->json(['error' => 'Unauthorized'], RESPONSE::HTTP_UNAUTHORIZED);
        }

        return $this->respondWithToken($token);
    }


    protected function respondWithToken($token) {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL(),
            'current_user' => auth()->user()
        ]);
    }


    //회원가입
    public function register(RegisterRequest $request) {
        $newUser = User::create($request->all());
        return $this->login($request);
    }


    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }


    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }


    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }
}
