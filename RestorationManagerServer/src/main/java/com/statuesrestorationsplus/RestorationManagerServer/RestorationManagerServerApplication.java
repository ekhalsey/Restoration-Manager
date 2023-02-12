package com.statuesrestorationsplus.RestorationManagerServer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication
public class RestorationManagerServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(RestorationManagerServerApplication.class, args);
	}

}
