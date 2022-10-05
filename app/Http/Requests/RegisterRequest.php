<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|max:20',
            'email' => 'required|email|max:20',
            'password' => 'required|confirmed',
        ];
    }


    public function messages()
    {
        return [
            'required' => '필수항목이 누락 되었습니다.',
            'confirmed' => '비밀번호와 비밀번호 확인이 일치하지 않습니다.',
            'max' => '글자수를 초과하였습니다.',
        ];
    }
}
