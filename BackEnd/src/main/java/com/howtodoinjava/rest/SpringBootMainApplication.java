package com.howtodoinjava.rest;

 

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.boot.builder.SpringApplicationBuilder;

import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

import org.springframework.context.annotation.PropertySource;

 

 

@SpringBootApplication

@PropertySource(value = {"classpath:test.properties"})
@PropertySource(value = {"classpath:caps.properties"})

public class SpringBootMainApplication extends SpringBootServletInitializer {

 

    public static void main(String[] args) {

        SpringApplication.run(SpringBootMainApplication.class, args);

    }

    @Override

    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {

        return application.sources(SpringBootMainApplication.class);

    }

} 