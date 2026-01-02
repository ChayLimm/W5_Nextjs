"use client";

import React, { useEffect, useState } from 'react';

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await fetch('/api/courses');
        if (!response.ok) throw new Error('Failed to fetch courses');
        const data = await response.json();
        setCourses(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      }
    }
    fetchCourses();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.map((course: any) => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
}