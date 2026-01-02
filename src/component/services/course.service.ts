import React from 'react'
import { NextRequest, NextResponse } from 'next/server'
import {prisma} from '@/src/lib/prisma'
import Course from '../../data/types/course'

export async function getCourse() : Promise<Course[]> {
    const coursesData = await fetch('api/courses')
    let res : Course[] =  await coursesData.json();
  return res
}
