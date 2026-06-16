package com.vlabson.back;

import com.vlabson.back.repository.CourseRepository;
import com.vlabson.back.model.Course;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackApplication.class, args);
	}

    @Bean
    CommandLineRunner initDataBase(CourseRepository courseRepository){
       return args -> {
            courseRepository.deleteAll();

            Course c = new Course();
            c.setName("Angular com Spring");
            c.setCategory("front-end");

            courseRepository.save(new Course());
       };
    }

}
