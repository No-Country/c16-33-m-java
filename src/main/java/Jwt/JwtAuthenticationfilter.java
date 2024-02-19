package Jwt;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.net.http.HttpHeaders;

@Component
public class JwtAuthenticationfilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        final String token = getTokenfromRequest(request);
        if(token == null)
        {
            filterChain.doFilter(request,response);
            return;
        }
        filterChain.doFilter(request,response);
    }

    private String getTokenfromRequest(HttpServletRequest request) {
        final String authHeader=request.getHeader(HttpHeaders.AUTHORIZATION); //Error minuto 22:40

        if (StringUtils.hasText(authHeader) && authHeader.startsWith("Bearer"))
        {
            return authHeader.substring(7);
        }
            return null;
    }




}
