package com.example.jobseeker.model;

import java.io.Serializable;

import org.springframework.stereotype.Component;

@Component
public class Jobseeker implements Serializable {
	
	private Long id;
	private String name;
	private int age;
	private String location;
	
	public Jobseeker () {
		
	}	
	
	public Jobseeker(Long id, String name, int age, String location) {
		super();
		this.id = id;
		this.name = name;
		this.age = age;
		this.location = location;
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	@Override
	public String toString() {
		return "Jobseeker [id=" + id + ", name=" + name + ", age=" + age + ", location=" + location + "]";
	}

}
