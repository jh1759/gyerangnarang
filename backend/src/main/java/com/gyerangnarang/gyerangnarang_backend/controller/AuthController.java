package com.gyerangnarang.gyerangnarang_backend.controller;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class AuthController {

    @PostMapping("/logout")
    public String logout(HttpServletRequest request, HttpServletResponse response) {
        // 로그아웃 로직 (프론트에서 localStorage 삭제하면 서버에서는 특별한 작업 필요 없음)
        return "로그아웃 성공";
    }
}
