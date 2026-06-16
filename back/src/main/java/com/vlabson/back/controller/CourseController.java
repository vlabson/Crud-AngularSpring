package com.vlabson.back.controller;

import com.vlabson.back.model.Course;
import com.vlabson.back.repository.CourseRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
@AllArgsConstructor
public class CourseController {

    private CourseRepository courseRepository;

    //@RequestMapping(method = RequestMethod.GET)
    @GetMapping
    public List<Course> list(){
        return courseRepository.findAll();
    }




}
