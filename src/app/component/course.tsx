import { useEffect, useState } from 'react'
import { getCourse } from '../services/course.service'
import type Course from '../types/course'

export default function CourseComponent() { 
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        const data = await getCourse()
        setCourses(data)
      } catch (error) {
        setError('Failed to load courses')
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])  

  if (loading) return <div>Loading courses...</div>
  if (error) return <div>Error: {error}</div>
  if (courses.length === 0) return <div>No courses found</div>

  return (
    <div>
      {courses.map((course: Course) => (
        <div key={course.id}> 
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          <p>Price: ${course.price}</p>
        </div>
      ))}
    </div>
  )
}