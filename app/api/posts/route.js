import { NextResponse } from 'next/server'

export const GET = async (request, { params }) => {
    const { id } = params
    
    return NextResponse.json({  })
}