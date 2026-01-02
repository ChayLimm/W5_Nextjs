import React from 'react'
import { NextRequest, NextResponse } from 'next/server'
import {prisma} from '@/src/lib/prisma'

export async function GET() {
  const courses = await prisma.course.findMany(); 
  return NextResponse.json(courses);
}