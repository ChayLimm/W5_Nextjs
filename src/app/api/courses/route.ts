import React from 'react'
import { NextRequest, NextResponse } from 'next/server'
import {prisma} from '@/src/lib/prisma'

export async function GET() {
    const courses = await prisma.coursed.findMany()
    let data = NextResponse.json(courses) 
  return data;
}
