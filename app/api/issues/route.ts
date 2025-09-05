// Next.js
import { NextRequest, NextResponse } from "next/server";

// Supabase
import { supabase } from "@/lib/supabase";

export async function POST(request: NextRequest) {
    const { title, description, location, image, category, status } = await request.json();

    const {data, error} = await supabase.from("issues").upsert({
        title,
        description,
        location,
        image,
        category,
        status
    });

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data });
}

export async function GET(request: NextRequest) {
    
    // commented to avoid warning in developement stage.
    // const { searchParams } = new URL(request.url);
    // const department = searchParams.get("department") as string;

    const dummyData = [
        {
            title: "Test Title 1",
            description: "Test Description 1",
            location: "Test Location 1",
            image: "Test Image 1",
            category: "Test Category 1",
            status: "Test Status 1"
        },
        {
            title: "Test Title 2",
            description: "Test Description 2",
            location: "Test Location 2",
            image: "Test Image 2",
            category: "Test Category 2",
            status: "Test Status 2"
        },
        {
            title: "Test Title 3",
            description: "Test Description 3",
            location: "Test Location 3",
            image: "Test Image 3",
            category: "Test Category 3",
            status: "Test Status 3"
        },
    ]

    // To be enabled when the database is ready

    // const { data, error } = await supabase.from("issues").select("*").eq("status", "open").eq("department", department);

    // if (error) {
    //     return NextResponse.json({ error: error.message }, { status: 500 });
    // }

    return NextResponse.json({ data: dummyData }, { status: 200 });
}
